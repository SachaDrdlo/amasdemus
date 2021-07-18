<?php

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']) && $_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'] == 'POST') {
        header("Access-Control-Allow-Origin: http://localhost:3000");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Max-Age: 3600");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"); 
    }
    exit;
}

include_once '../../system/db.php';
include_once '../../system/config.php';
include_once '../class/beer.php';

$db = new DB(DB_HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_DATABASE);
$items = new Beer($db);

$data = json_decode(file_get_contents('php://input'), true);
$stmt = $items->selectBeersByTypeFilter($data["filters"]);
$itemCount = $stmt->rowCount();

if ($itemCount > 0) {
    $beerArray = array();
    $beerArray["beers"] = array();
    $beerArray["itemCount"] = $itemCount;

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        
        $beer = array(
            "id" => $row["id_biere"],
            "name" => $row["nom_biere"],
            "image" => $row["image"],
            "type" => $row["type"],
        );
        array_push($beerArray["beers"], $beer);
    };
    
    http_response_code(200);
    echo json_encode($beerArray);
} else {
    http_response_code(404);
    echo json_encode(
        array("message" => "No record found.")
    );
}
