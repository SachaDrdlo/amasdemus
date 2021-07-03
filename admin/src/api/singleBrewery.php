<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../system/config.php';
include_once '../../system/db.php';
include_once '../class/brewery.php';

$db = new DB(DB_HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_DATABASE);
$item = new Brewery($db);

$item->id = isset($_GET["id"]) ? trim(strip_tags($_GET['id'])) : die();

$item->getBreweryInfos();

if ($item->name != null) {
    $breweryArray = array(
        "id" => $item->id,
        "name" => $item->name,
        "description" => $item->description,
        "logo" => $item->logo,
        "address" => $item->address,
        "url" => $item->url,
        "region" => $item->locations

    );

    http_response_code(200);
    echo json_encode($breweryArray);
} else {
    http_response_code(404);
    echo json_encode(
        array("message" => "No record found.")
    );
}
