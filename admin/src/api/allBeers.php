<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: content-type");
header("Content-Type: application/json");

// include_once '../controller/beer.php';
// include_once '../model/beer.php';
include_once '../../system/db.php';
include_once '../class/beer.php';

$db = new DB('db5002236283.hosting-data.io', 'dbu1488325', 'Amasdemus59.', 'dbs1804734');
$items = new Beer($db);
$stmt = $items->getBeersInfos();
$itemCount = $stmt->rowCount();

// echo json_encode($itemCount);

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
            "flavours" => $row["saveurs"],
            "glass" => $row["glass"],
            "location" => $row["location"],
            "image" => $row["image"],
            "type" => $row["type"],
            "img_brewery" => $row["image_brasserie"],
            "desc_brewery" => $row["description_brasserie"]
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
