<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include_once '../../system/config.php';
include_once '../../system/db.php';
include_once '../class/beer.php';

$db = new DB(DB_HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_DATABASE);
$items = new Beer($db);
$stmt = $items->getRandomBeer();
$itemCount = $stmt->rowCount();

if ($itemCount > 0) {
    $beerArray = array();
    $beerArray["beers"] = array();
    $beerArray["itemCount"] = $itemCount;

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $beer = array(
            "id" => $row["id"],
            "name" => $row["nom_biere"],
            "id_brewery" => $row["id_brewery"],
            "breweries" => $row["nom_brasserie"],
            "title" => $row["title"],
            "description" => $row["description"],
            "level" => $row["level"],
            "glass" => $row["glass"],
            "location" => $row["location"],
            "image" => $row["image"],
            "type" => $row["type"]
        );

        array_push($beerArray["beers"], $beer);
    }
    echo json_encode($beerArray);
} else {
    http_response_code(404);
    echo json_encode(
        array("message" => "No record found.")
    );
}
