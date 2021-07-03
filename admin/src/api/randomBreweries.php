<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include_once '../../system/config.php';
include_once '../../system/db.php';
include_once '../class/brewery.php';

$db = new DB(DB_HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_DATABASE);
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
