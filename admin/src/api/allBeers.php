<?php

include_once '../../system/config.php';
include_once '../../system/db.php';
include_once '../class/beer.php';

header("Access-Control-Allow-Origin: " . HEADER_ORIGIN);
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Origin, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if($_SERVER['REQUEST_METHOD'] == 'GET'){

    $db = new DB(DB_HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_DATABASE);
    $items = new Beer($db);
    $stmt = $items->getBeersInfos();
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
}else{
    http_response_code(405);
    echo json_encode(["message" => "Unauthorized method"]);
}