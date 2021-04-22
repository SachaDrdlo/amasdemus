<?php

// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: *");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // var_dump($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']);

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']) &&
         $_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'] == 'POST') {
             // header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin");
            header('Access-Control-Allow-Origin: *');
            header("Access-Control-Allow-Headers: Origin, Content-Type");
            header("Content-Type: application/json; charset=UTF-8");
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
            header("Access-Control-Max-Age: 3600");

    }
    exit;
}

include_once '../../system/db.php';
include_once '../class/beer.php';

$db = new DB('db5002236283.hosting-data.io', 'dbu1488325', 'Amasdemus59.', 'dbs1804734');
$items = new Beer($db);

$data = json_decode(file_get_contents('php://input'), true);
// && isset($_SERVER['HTTP_ORIGIN']) &&
//          is_approved($_SERVER['HTTP_ORIGIN'])


$stmt = $items->selectBeersByTypeFilter($data["filters"]);
$itemCount = $stmt->rowCount();


// echo json_encode($itemCount);

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
            "type" => $row["type"]

            // "id_brewery" => $row["id_brewery"],
            // "breweries" => $row["nom_brasserie"],
            // "title" => $row["title"],
            // "description" => $row["description"],
            // "level" => $row["level"],
            // "flavours" => $row["saveurs"],
            // "glass" => $row["glass"],
            // "location" => $row["location"],
            // "img_brewery" => $row["image_brasserie"],
            // "desc_brewery" => $row["description_brasserie"]
        );

        array_push($beerArray["beers"], $beer);
    }
    echo json_encode($beerArray);
} else {
    http_response_code(404);
    // echo json_encode(
    //     array("message" => "No record found.")
    // );
}
