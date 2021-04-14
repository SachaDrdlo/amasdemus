<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../system/db.php';
include_once '../class/beer.php';

$db = new DB('db5002226855.hosting-data.io', 'dbu890823', 'AmasDemus59.', 'dbs1797869');
$item = new Beer($db);

$item->id = isset($_GET["id"]) ? trim(strip_tags($_GET['id'])) : die();

$item->getOneBeerInfos();

if ($item->name != null) {
    $beerArray = array(
        "id" => $item->id,
        "name" => $item->name,
        "breweries" => $item->breweries,
        "title" => $item->title,
        "description" => $item->description,
        "level" => $item->level,
        "glass" => $item->glass,
        "location" => $item->location,
        "image" => $item->image,
        "type" => $item->type
    );

    http_response_code(200);
    echo json_encode($beerArray);
} else {
    http_response_code(404);
    echo json_encode(
        array("message" => "No record found.")
    );
}
