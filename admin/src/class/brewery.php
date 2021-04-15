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
    
    public function getBreweryInfos()
    {
        $sqlQuery = "SELECT breweries.id, name, description, logo, address, url FROM " . $this->db_table . " WHERE breweries.id = :id";

        $stmt = $this->connection->prepare($sqlQuery);
        $stmt->bindParam(':id', $this->id);
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->name = $row["name"];
        $this->description = $row["description"];
        $this->logo = $row["logo"];
        $this->address = $row["address"];
        $this->url = $row["url"];
        $stmt = $this->connection->prepare($sqlQuery);
        $stmt->execute();
        return $stmt;
    }
}