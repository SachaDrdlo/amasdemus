<?php

class Beer
{
    private $connection;
    private $db_table = 'beers';

    public $id;
    public $name;
    public $breweries;
    public $id_brewery;
    public $title;
    public $flavours;
    public $description;
    public $level;
    public $glass;
    public $location;
    public $image;
    public $type;
    public $img_brewery;
    public $desc_brewery;

    public function __construct($db)
    {
        $this->connection = $db;
    }

    public function getBeersInfos()
    {
        $sqlQuery = "SELECT beers.id, beers.name as nom_biere, beers.title, beers.level, beers.image, types.type, beers.description, glasses.glass, locations.location, breweries.id as id_brewery, breweries.name as nom_brasserie, breweries.description as description_brasserie, breweries.logo as image_brasserie, GROUP_CONCAT(flavours.flavour SEPARATOR \", \") AS \"saveurs\"
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
        $sqlQuery = "SELECT beers.id, beers.name as nom_biere, beers.title, beers.level, beers.image, types.type, beers.description, glasses.glass, locations.location, breweries.id as id_brewery, breweries.name as nom_brasserie, breweries.description as description_brasserie, breweries.logo as image_brasserie, GROUP_CONCAT(flavours.flavour SEPARATOR \", \") AS \"saveurs\"
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
        $this->id_brewery = $row["id_brewery"];
        $this->breweries = $row["nom_brasserie"];
        $this->title = $row["title"];
        $this->description = $row["description"];
        $this->level = $row["level"];
        $this->glass = $row["glass"];
        $this->location = $row["location"];
        $this->flavours = $row["saveurs"];
        $this->image = $row["image"];
        $this->type =  $row["type"];
        $this->img_brewery = $row["image_brasserie"];
        $this->desc_brewery = $row["description_brasserie"];
    }

    public function searchBeer($beer_name)
    {
        $sqlQuery = "SELECT beers.id as id_biere, beers.name as nom_biere, beers.title, beers.level, beers.image, types.type, beers.description, glasses.glass, locations.location, breweries.name as nom_brasserie, breweries.description as image_description, breweries.logo as image_brewery, GROUP_CONCAT(flavours.flavour SEPARATOR \", \") AS \"saveurs\"
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

    public function getRandomBeer()
    {
        $sqlQuery = "SELECT beers.id, beers.name as nom_biere, beers.title, beers.level, beers.image, types.type, beers.description, glasses.glass, locations.location, breweries.id as id_brewery, breweries.name as nom_brasserie, GROUP_CONCAT(flavours.flavour SEPARATOR \", \") AS \"saveurs\"
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
            ORDER BY RAND()
            LIMIT 1";
        $stmt = $this->connection->query($sqlQuery);
        $stmt->execute();
        return $stmt;
    }

    public function getThreeBreweryBeers($idBrewery)
    {
        $sqlQuery = "SELECT beers.id AS id_biere, beers.name AS nom_biere, beers.image
        FROM " . $this->db_table . "
        INNER JOIN breweries
        ON beers.id_brewery = $idBrewery
        GROUP BY beers.id
        ORDER BY RAND()
        LIMIT 3;";

        $stmt = $this->connection->prepare($sqlQuery);
        $stmt->execute();

        return $stmt;
    }

    public function getBreweryBeers($idBrewery)
    {
        $sqlQuery = "SELECT beers.id AS id_biere, beers.name AS nom_biere, beers.image
        FROM " . $this->db_table . "
        INNER JOIN breweries
        ON beers.id_brewery = $idBrewery
        GROUP BY beers.id
        ORDER BY beers.name;";

        $stmt = $this->connection->prepare($sqlQuery);
        $stmt->execute();

        return $stmt;
    }

    public function selectBeersByType($selection)
    {
        $sqlQuery = "SELECT beers.id AS id_biere, beers.name AS nom_biere, beers.image, types.type AS type
        FROM " . $this->db_table . "
        INNER JOIN types
        ON beers.id_type = types.id
        WHERE types.type = " . $selection . "
        ORDER BY RAND()
        LIMIT 3;";

        $stmt = $this->connection->prepare($sqlQuery);
        $stmt->execute();

        return $stmt;
    }
    
    public function selectBeersBySameTypeOfOneBeer($beerId, $selection)
    {
        $sqlQuery = "SELECT beers.id AS id_biere, beers.name AS nom_biere, beers.image, types.type AS type
        FROM " . $this->db_table . "
        MINUS beers.id = :id
        INNER JOIN types
        ON beers.id_type = types.id
        WHERE types.type = " . $selection . "
        ORDER BY RAND()
        LIMIT 3;";

        $stmt = $this->connection->prepare($sqlQuery);
        $stmt->bindParam(':id', $beerId);
        $stmt->execute();

        return $stmt;
    }
}
