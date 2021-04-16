<?php
class BreweriesController
{
    private $model;

    public function __construct(BreweriesModel $model)
    {
        $this->model = $model;
    }

    public function getBreweries() {
        $res = $this->model->db->query("SELECT id, name, logo, address, url
        FROM breweries 
        ORDER BY name;");
        return $res;
    }

}