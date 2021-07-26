<?php

header("Access-Control-Allow-Origin: https://amasdemus-psi.vercel.app/");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../system/config.php';
include_once '../../system/db.php';
include_once '../class/beer.php';

if($_SERVER['REQUEST_METHOD'] == 'GET'){

    $db = new DB(DB_HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_DATABASE);
    $items = new Beer($db);
    $stmt = $items->getRandomBeer();
    $itemCount = $stmt->rowCount();

    if ($itemCount > 0) {
        $beerArray = array();
        $beerArray["beers"] = array();
        $beerArray["itemCount"] = $itemCount;

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

            $beer = array(
                "id" => $row["id"],
                "name" => $row["nom_biere"],
                "title" => $row["title"],
                "level" => $row["level"],
                "image" => $row["image"],
                "type" => $row["type"]
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