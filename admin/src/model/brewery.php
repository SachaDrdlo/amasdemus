<?php
class BreweryModel
{
    public $id;
    public $logo;
    
    public function __construct($db)
    {
        $this->db = $db;
        if (!empty($_POST)) {
            $this->name = trim(strip_tags($_POST['name']));
            $this->description = trim(strip_tags($_POST['description']));
            $this->address = trim(strip_tags($_POST['address']));
            $this->url = trim(strip_tags($_POST['url']));
            
        }
        if(isset($_GET['id'])) {
            $this->id = trim(strip_tags($_GET['id']));
        }
    }
}
