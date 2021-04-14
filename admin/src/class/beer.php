<?php

class Beer
{
    private $connection;
    private $db_table = 'beers';

    public $id;
    public $name;
    public $breweries;
    public $title;
    public $description;
    public $level;
    public $glass;
    public $location;
    public $image;
    public $type;

    public function __construct($db)
    {
        $this->connection = $db;
    }

    public function getBeers()
    {
        $sqlQuery = "SELECT id, name, level, title, image FROM " . $this->db_table . "";
        $stmt = $this->connection->prepare($sqlQuery);
        $stmt->execute();
        return $stmt;
    }

    public function getBeersInfos()
    {
        $sqlQuery = "SELECT beers.id, beers.name as nom_biere, beers.title, beers.level, beers.image, types.type, beers.description, glasses.glass, locations.location, breweries.name as nom_brasserie, GROUP_CONCAT(flavours.flavour SEPARATOR \", \") AS \"saveurs\"
            FROM beers
            INNER JOIN breweries
            ON beers.id_brewery = breweries.id
            INNER JOIN types
            ON beers.id_type = types.id
            INNER JOIN beers_flavours
            ON beers.id = beers_flavours.id_beer
            INNER JOIN flavours
            ON beers_flavours.id_flavour = flavours.id
            INNER JOIN glasses
            ON beers.id_glass = glasses.id
            INNER JOIN locations
            ON beers.id_location = locations.id
            GROUP BY beers.id
            ORDER BY beers.name";
        $stmt = $this->connection->query($sqlQuery);
        $stmt->execute();
        return $stmt;
    }

    public function getOneBeerInfos()
    {
        $sqlQuery = "SELECT beers.id, beers.name as nom_biere, beers.title, beers.level, beers.image, types.type, beers.description, glasses.glass, locations.location, breweries.name as nom_brasserie, GROUP_CONCAT(flavours.flavour SEPARATOR \", \") AS \"saveurs\"
        FROM beers
        INNER JOIN breweries
        ON beers.id_brewery = breweries.id
        INNER JOIN types
        ON beers.id_type = types.id
        INNER JOIN beers_flavours
        ON beers.id = beers_flavours.id_beer
        INNER JOIN flavours
        ON beers_flavours.id_flavour = flavours.id
        INNER JOIN glasses
        ON beers.id_glass = glasses.id
        INNER JOIN locations
        ON beers.id_location = locations.id
        WHERE beers.id = :id";

        $stmt = $this->connection->prepare($sqlQuery);
        $stmt->bindParam(':id', $this->id);
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->name = $row["nom_biere"];
        $this->breweries = $row["nom_brasserie"];
        $this->title = $row["title"];
        $this->description = $row["description"];
        $this->level = $row["level"];
        $this->glass = $row["glass"];
        $this->location = $row["location"];
        $this->image = $row["image"];
        $this->type =  $row["type"];
    }

    public function searchBeer($beer_name)
    {
        $sqlQuery = "SELECT beers.id, beers.name as nom_biere, beers.title, beers.level, beers.image, types.type, beers.description, glasses.glass, locations.location, breweries.name as nom_brasserie, GROUP_CONCAT(flavours.flavour SEPARATOR \", \") AS \"saveurs\"
        FROM beers
        INNER JOIN breweries
        ON beers.id_brewery = breweries.id
        INNER JOIN types
        ON beers.id_type = types.id
        INNER JOIN beers_flavours
        ON beers.id = beers_flavours.id_beer
        INNER JOIN flavours
        ON beers_flavours.id_flavour = flavours.id
        INNER JOIN glasses
        ON beers.id_glass = glasses.id
        INNER JOIN locations
        ON beers.id_location = locations.id
        WHERE beers.name LIKE :beer_name
        GROUP BY beers.id";

        $stmt = $this->connection->prepare($sqlQuery);

        $beer_name = trim(strip_tags($beer_name));
        $beer_name = '%' . $beer_name . '%';

        $stmt->bindParam(':beer_name', $beer_name);

        $stmt->execute();

        return $stmt;
    }
}
