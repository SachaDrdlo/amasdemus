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

}