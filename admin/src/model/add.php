<?php
class AddModel
{
    public $id;
    public $image;
    
    public function __construct($db)
    {
        $this->db = $db;
        if (!empty($_POST)) {
            $this->name = trim(strip_tags($_POST['name']));
            $this->title = trim(strip_tags($_POST['title']));
            $this->description = trim(strip_tags($_POST['description']));
            $this->level = trim(strip_tags($_POST['level']));
            $this->type = trim(strip_tags($_POST['type']));
            $this->brewery = trim(strip_tags($_POST['brewery']));
            $this->location = trim(strip_tags($_POST['location']));
            $this->glass = trim(strip_tags($_POST['glass']));
            $this->flavour = $_POST['flavour'];
            
            // $this->format = trim(strip_tags($_POST['format']));

        }
        if(isset($_GET["id"])) {
            $this->id = trim(strip_tags($_GET["id"]));
        }
    }
}
