<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../system/db.php';
include_once '../class/beer.php';
// include_once './shared/utilities.php';
// include_once './config/core.php';

$db = new DB('db5002236283.hosting-data.io', 'dbu1488325', 'Amasdemus59.', 'dbs1804734');
$items = new Beer($db);

// $utilities = new Utilities();

$beer_name = isset($_GET["search"]) ? trim(strip_tags($_GET["search"])) : "";

$stmt = $items->searchBeer($beer_name);
$itemCount = $stmt->rowCount();

if ($itemCount > 0) {
    $beerArray = array();
    $beerArray["beers"] = array();
    // $beerArray["paging"]=array();
    $beerArray["itemCount"] = $itemCount;

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $beer = array(
            "id" => $row["id_biere"],
            "name" => $row["nom_biere"],
            "breweries" => $row["nom_brasserie"],
            "title" => $row["title"],
            "description" => $row["description"],
            "level" => $row["level"],
            "glass" => $row["glass"],
            "flavours" => $row["flavours"],
            "location" => $row["location"],
            "image" => $row["image"],
            "type" => $row["type"],
            "img_brewery" => $row["img_brewery"],
            "desc_brewery" => $row["desc_brewery"]
        );

        array_push($beerArray["beers"], $beer);
    }

    // $total_rows=$product->count();
    // $page_url="{$home_url}searchBeer.php?";
    // $paging=$utilities->getPaging($page, $total_rows, $records_per_page, $page_url);
    // $beerArray["paging"]=$paging;

    http_response_code(200);
    echo json_encode($beerArray);
} else {
    http_response_code(404);

    echo json_encode(
        array("message" => "No products found.")
    );
}
