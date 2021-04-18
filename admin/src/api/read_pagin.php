<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../system/db.php';
include_once '../class/beer.php';
include_once './shared/utilities.php';
include_once './config/core.php';

$db = new DB('db5002236283.hosting-data.io', 'dbu1488325', 'Amasdemus59.', 'dbs1804734');
$items = new Beer($db);

$utilities = new Utilities();

$stmt = $items->readPagin($from_record_num, $records_per_page);
$itemCount = $stmt->rowCount();

if ($itemCount > 0) {
    $beerArray = array();
    $beerArray["beers"] = array();
    $beerArray["paging"]=array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $beer = array(
            "id" => $id,
            "name" => $name,
            "breweries" => $breweries,
            "title" => $id_brewery,
            "description" => $title,
            "level" => $level,
            "glass" => $glass,
            "flavours" => $flavours,
            "location" => $location,
            "image" => $image,
            "type" => $type,
            "img_brewery" => $img_brewery,
            "desc_brewery" => $desc_brewery
        );

        array_push($beerArray["beers"], $beer);
    }

    $total_rows=$items->count();
    $page_url="{$home_url}/read_pagin.php?";
    $paging=$utilities->getPaging($page, $total_rows, $records_per_page, $page_url);
    $beerArray["paging"]=$paging;

    http_response_code(200);
    echo json_encode($beerArray);
} else {
    http_response_code(404);

    echo json_encode(
        array("message" => "No products found.")
    );
}