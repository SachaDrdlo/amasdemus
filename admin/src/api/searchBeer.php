<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../system/db.php';
include_once '../class/beer.php';

$db = new DB('db5002226855.hosting-data.io', 'dbu890823', 'AmasDemus59.', 'dbs1797869');
$items = new Beer($db);

$beer_name = isset($_GET["search"]) ? trim(strip_tags($_GET["search"])) : "";

$stmt = $items->searchBeer($beer_name);
$num = $stmt->rowCount();

if ($num > 0) {
    $beerArray = array();
    $beerArray["beers"] = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $beer = array(
            "id" => $row["id"],
            "name" => $row["nom_biere"],
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

    http_response_code(200);
    echo json_encode($beerArray);
} else {
    http_response_code(404);

    echo json_encode(
        array("message" => "No products found.")
    );
}
