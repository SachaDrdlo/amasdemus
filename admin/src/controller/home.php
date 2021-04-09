<?php
class HomeController
{
    private $model;

    public function __construct(HomeModel $model)
    {
        $this->model = $model;
    }

    public function getBeers() {
        $res = $this->model->db->query("SELECT beers.id, beers.name, beers.level, brasseries.name  as nom_brasserie FROM beers 
        INNER JOIN breweries as brasseries ON beers.id_brewery = brasseries.id;");
        return $res;
    }
}
