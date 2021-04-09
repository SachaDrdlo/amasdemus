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
            $this->brewery = trim(strip_tags($_POST['brewery']));
            $this->title = trim(strip_tags($_POST['title']));
            $this->description = trim(strip_tags($_POST['description']));
            $this->description2 = trim(strip_tags($_POST['description2']));
            $this->level = trim(strip_tags($_POST['level']));
            $this->glass = trim(strip_tags($_POST['glass']));
            $this->location = trim(strip_tags($_POST['location']));
            $this->type = trim(strip_tags($_POST['type']));
            // $this->format = trim(strip_tags($_POST['format']));
            $this->flavour = trim(strip_tags($_POST['flavour']));

        }
        if(isset($_GET["id"])) {
            $this->id = trim(strip_tags($_GET["id"]));
        }
    }
}
