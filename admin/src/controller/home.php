<?php
class HomeController
{
    private $model;

    public function __construct(HomeModel $model)
    {
        $this->model = $model;
    }

    public function getBeers() {
        $res = $this->model->db->query("SELECT beers.id, beers.name, beers.level, beers.image, types.type, brasseries.name as nom_brasserie,  GROUP_CONCAT(flavours.flavour SEPARATOR \", \") AS \"saveurs\"
        FROM beers 
        INNER JOIN breweries AS brasseries 
        ON beers.id_brewery = brasseries.id
        INNER JOIN types 
        ON beers.id_type = types.id
        INNER JOIN beers_flavours
        ON beers.id = beers_flavours.id_beer
        INNER JOIN flavours
        ON beers_flavours.id_flavour = flavours.id
        GROUP BY beers.id
        ORDER BY beers.name;");
        return $res;
    }

}
