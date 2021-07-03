<?php

class Brewery
{
    private $connection;
    private $db_table = 'breweries';

    public $id;
    public $name;
    public $description;
    public $logo;
    public $address;
    public $url;
    public $locations;

    public function __construct($db)
    {
        $this->connection = $db;
    }


    public function getBreweries()
    {
        $sqlQuery = "SELECT id, name, description, logo, address, url FROM " . $this->db_table . "";
        $stmt = $this->connection->prepare($sqlQuery);
        $stmt->execute();
        return $stmt;
    }

    public function getRandomBreweries()
    {
        $sqlQuery = "SELECT id, name, description, logo, address, url FROM " . $this->db_table . " ORDER BY RAND() LIMIT 3";
        $stmt = $this->connection->prepare($sqlQuery);
        $stmt->execute();
        return $stmt;
    }

    public function getBreweryInfos()
    {
        $sqlQuery = "SELECT breweries.id, breweries.name, breweries.description, logo, address, url, locations.location as region
        FROM " . $this->db_table . "
        INNER JOIN beers
        ON breweries.id = beers.id_brewery
        INNER JOIN locations
        ON beers.id_location = locations.id
        WHERE breweries.id = :id";

        $stmt = $this->connection->prepare($sqlQuery);
        $stmt->bindParam(':id', $this->id);
        $stmt->execute();

        $query = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->name = $query["name"];
        $this->description = $query["description"];
        $this->logo = $query["logo"];
        $this->address = $query["address"];
        $this->url = $query["url"];
        $this->locations = $query["region"];
        // $stmt = $this->connection->prepare($sqlQuery);
        // $stmt->execute();
        // return $stmt;
    }

}