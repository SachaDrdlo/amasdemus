<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../system/db.php';
include_once '../class/beer.php';

$db = new DB('db5002236283.hosting-data.io', 'dbu1488325', 'Amasdemus59.', 'dbs1804734');
$item = new Beer($db);

$item->id = isset($_GET["id"]) ? trim(strip_tags($_GET['id'])) : die();

$item->getOneBeerInfos();

if ($item->name != null) {
    $beerArray = array(
        "id" => $item->id,
        "name" => $item->name,
        "id_brewery" => $item->id_brewery,
        "breweries" => $item->breweries,
        "title" => $item->title,
        "description" => $item->description,
        "level" => $item->level,
        "flavours" => $item->flavours,
        "glass" => $item->glass,
        "location" => $item->location,
        "image" => $item->image,
        "type" => $item->type,
        "img_brewery" => $item->img_brewery,
        "desc_brewery" => $item->desc_brewery

    );

    http_response_code(200);
    echo json_encode($beerArray);
} else {
    http_response_code(404);
    echo json_encode(
        array("message" => "No record found.")
    );
}
