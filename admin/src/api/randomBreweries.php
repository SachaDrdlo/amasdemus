<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include_once '../../system/db.php';
include_once '../class/brewery.php';

$db = new DB('db5002236283.hosting-data.io', 'dbu1488325', 'Amasdemus59.', 'dbs1804734');
$items = new Brewery($db);
$stmt = $items->getRandomBreweries();
$itemCount = $stmt->rowCount();


if ($itemCount > 0) {
    $breweriesArray = array();
    $breweriesArray["breweries"] = array();
    $breweriesArray["itemCount"] = $itemCount;

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $brewery = array(
            "id" => $row["id"],
            "name" => $row["name"],
            "logo" => $row["logo"]
        );

        array_push($breweriesArray["breweries"], $brewery);
    }
    echo json_encode($breweriesArray);
} else {
    http_response_code(404);
    echo json_encode(
        array("message" => "No record found.")
    );
}
