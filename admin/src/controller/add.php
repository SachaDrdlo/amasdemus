<?php
class AddController
{
    private $model;

    public function __construct(AddModel $model)
    {
        $this->model = $model;
    }

    public function getDataForm()
    {
        return array(
            "id" => $this->model->id,
            "name" => $this->model->name,
            "brewery" => $this->model->brewery,
            "title" => $this->model->title,
            "description" => $this->model->description,
            "description2"=> $this->model->description2,
            "level"=>$this->model->level,
            "glass" =>$this->model->glass,
            "location" =>$this->model->location,
            "image" =>$this->model->image,
            "type" =>$this->model->type,
        );
    }

    public function uploadImage($file)
    {
        $fileTmpPath = $file["tmp_name"];
        $fileName = $file["name"];
        $fileType = $file["type"];

        $fileNameArray = explode(".", $fileName);
        $fileExtension = end($fileNameArray);
        $newFileName = md5(time() . $fileName) . "." . $fileExtension;
        $fileDestPath = "./assets/img/beers/{$newFileName}";

        $allowedTypes = array("image/jpeg", "image/png", "image/webp");
        if (in_array($fileType, $allowedTypes)) {
            // Le type de fichier est bien valide on peut donc ajouter le fichier à notre serveur
            move_uploaded_file($fileTmpPath, $fileDestPath);

            $this->model->image = $newFileName;
        } else {
            // Le type du fichier est incorrect
            return false;
        }

        return true;
    }

    public function validateForm()
    {
        if (empty($this->model->name)) {
            return false;
        }

        return true;
    }

    public function get()
    {

        $query = $this->model->db->prepare("SELECT name, image, title, description, description2, degre, id_type AS type, id_brewery AS brewery, id_location AS location, id_glass AS glass,
            FROM beers
            WHERE id=:id");
        $query->bindParam(":id", $this->model->id);
        $query->execute();
        $res = $query->fetch();

        return $res;
    }

    public function add(): bool
    {
        $query = $this->model->db->prepare("INSERT INTO beers (name, image, title, description, description2, level,id_sort, id_brewery, id_location, id_glass) VALUES(:name, :image, :title, :description, :description2, :level, :sort, :brewery, :location, :glass)");
        $query->bindParam(":name", $this->model->name);
        $query->bindParam(":image", $this->model->image);
        $query->bindParam(":title", $this->model->title);
        $query->bindParam(":description", $this->model->description);
        $query->bindParam(":description2", $this->model->description2);
        $query->bindParam(":level", $this->model->level);
        $query->bindParam(":brewery", $this->model->brewery);
        $query->bindParam(":location", $this->model->location);
        $query->bindParam(":glass", $this->model->glass);
        $query->bindParam(":type", $this->model->type);

        if ($query->execute()) {
            return true;
        } else {
            return false;
        }
    }
    public function edit(): bool
    {
        if(empty($this->model->image)) {
            $beer = $this->get();
            if (isset($beer["image"])) {
                $this->model->image = $beer["image"];
            }
        }

        $query = $this->model->db->prepare("UPDATE beer 
                    SET name=:name, image=:image, title=:title, description=:description, description2=:description2, level=:level, id_type=:type, id_brewery=:brewery, id_location=:location, id_glass=:glass,  
                    WHERE id=:id;");
        $query->bindParam(":name", $this->model->name);
        $query->bindParam(":image", $this->model->image);
        $query->bindParam(":title", $this->model->title);
        $query->bindParam(":description", $this->model->description);
        $query->bindParam(":description2", $this->model->description2);
        $query->bindParam(":level", $this->model->level);
        $query->bindParam(":id_brewery", $this->model->brewery);
        $query->bindParam(":id_location", $this->model->location);
        $query->bindParam(":id_glass", $this->model->glass);
        $query->bindParam(":id_type", $this->model->type);

        if ($query->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function delete(): bool
    {

        $query = $this->model->db->prepare("DELETE FROM beers WHERE id=:id");
        $query->bindParam(":id", $this->model->id);

        if ($query->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function getBreweries()
    {
        $res = $this->model->db->query("SELECT * FROM breweries;");
        return $res;
    }
    
    public function getTypes()
    {   
        $res = $this->model->db->query("SELECT * FROM types;");
        return $res;
    }

    public function getLocations()
    {
        $res = $this->model->db->query("SELECT * FROM locations;");
        return $res;
    }

    public function getGlasses()
    {
        $res = $this->model->db->query("SELECT * FROM glasses;");
        return $res;
    }

    public function getFlavours()
    {
        $res = $this->model->db->query("SELECT * FROM flavours;");
        return $res;
    }






}
