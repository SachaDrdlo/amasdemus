<?php
class BeerController
{
    private $model;

    public function __construct(BeerModel $model)
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
            "level" => $this->model->level,
            "glass" => $this->model->glass,
            "location" => $this->model->location,
            "image" => $this->model->image,
            "type" => $this->model->type
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
            move_uploaded_file($fileTmpPath, $fileDestPath);
            $this->model->image = $newFileName;
        } else {
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
        $query = $this->model->db->prepare("SELECT name, title, description, level, image,  id_type, id_brewery, id_location, id_glass, GROUP_CONCAT(flavours.flavour SEPARATOR \", \") AS \"saveurs\"
            FROM beers
            INNER JOIN beers_flavours
            ON beers.id = beers_flavours.id_beer
            INNER JOIN flavours
            ON beers_flavours.id_flavour = flavours.id
            WHERE beers.id=:id
            GROUP BY beers.name");
        $query->bindParam(":id", $this->model->id);
        $query->execute();
        $res = $query->fetch();

        return $res;
    }

    public function add(): bool
    {
        $query = $this->model->db->prepare("INSERT INTO beers (name, image, title, description, level, id_type, id_brewery, id_location, id_glass)
            VALUES (:name, :image, :title, :description, :level, :type, :brewery, :location, :glass)");
        $query->bindParam(":name", $this->model->name);
        $query->bindParam(":image", $this->model->image);
        $query->bindParam(":title", $this->model->title);
        $query->bindParam(":description", $this->model->description);
        $query->bindParam(":level", $this->model->level);
        $query->bindParam(":type", $this->model->type);
        $query->bindParam(":brewery", $this->model->brewery);
        $query->bindParam(":location", $this->model->location);
        $query->bindParam(":glass", $this->model->glass);

        if ($query->execute()) {
            $this->getBeerId();
            return true;
        } else {
            var_dump($query->errorinfo());
            return false;
        }
    }


    public function addFlavours($idBeer) : bool
    {
        $flavourCount = 0;
        foreach ($this->model->flavours as $flavour => $value) {
                $this->addFlavour($idBeer, $flavour);
                $flavourCount++;
        }

        if ($flavourCount === count($this->model->flavours)){
            return true;
        }else{
            return false;
        }
    }

    public function addFlavour($idBeer, $idFlavour) : bool
    {
        $query = $this->model->db->prepare("INSERT INTO beers_flavours
        (id_beer, id_flavour)
        VALUES
        (:id_beer, :id_flavour)");
        $query->bindParam(":id_beer", $idBeer);
        $query->bindParam(":id_flavour", $idFlavour);

        if ($query->execute()) {
            return true;
        } else {
            var_dump($query->errorinfo());
            return false;
        }
    }

    public function edit(): bool
    {
        if(empty($this->model->image)) {
            $data = $this->get();
            if (isset($data["image"])) {
                $this->model->image = $data["image"];
            }
        }
        $query = $this->model->db->prepare("UPDATE beers 
            SET name=:name, image=:image, title=:title, description=:description, level=:level, id_type=:type, id_brewery=:brewery, id_location=:location, id_glass=:glass
            WHERE id=:id;");
        $query->bindParam(":name", $this->model->name);
        $query->bindParam(":image", $this->model->image);
        $query->bindParam(":title", $this->model->title);
        $query->bindParam(":description", $this->model->description);
        $query->bindParam(":level", $this->model->level);
        $query->bindParam(":type", $this->model->type);
        $query->bindParam(":brewery", $this->model->brewery);
        $query->bindParam(":location", $this->model->location);
        $query->bindParam(":glass", $this->model->glass);
        $query->bindParam(":id", $this->model->id);

        if ($query->execute()) {
            
            return true;
        } else {
            
            return false;
            
        }
    }

    public function deleteFlavours(): bool { 

        $query = $this->model->db->prepare("DELETE FROM beers_flavours WHERE id_beer=:id");
        $query->bindParam(":id", $this->model->id);
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

    public function getBeerId()
    {
        $beerId = $this->model->db->lastInsertId();
        return $beerId;
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
