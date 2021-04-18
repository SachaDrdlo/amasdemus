<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../system/db.php';
include_once '../class/beer.php';

$db = new DB('db5002236283.hosting-data.io', 'dbu1488325', 'Amasdemus59.', 'dbs1804734');
$items = new Beer($db);

$idBrewery = isset($_GET["id"]) ? trim(strip_tags($_GET['id'])) : "";

$stmt = $items->getThreeBreweryBeers($idBrewery);
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
            "image" => $row["image"]
        );

        array_push($beerArray["beers"], $beer);
    }

    http_response_code(200);
    echo json_encode($beerArray);
} else {
    http_response_code(404);

    echo json_encode(
        array("message" => "No beer found.")
    );
}
