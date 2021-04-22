<?php
class BreweryController
{
    private $model;

    public function __construct(BreweryModel $model)
    {
        $this->model = $model;
    }

    public function getDataForm()
    {
        return array(
            "id" => $this->model->id,
            "name" => $this->model->name,
            "description" => $this->model->description,
            "logo" => $this->model->logo,
            "address" => $this->model->address,
            "url" => $this->model->url
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
        $fileDestPath = "./assets/img/breweries/{$newFileName}";

        $allowedTypes = array("image/jpeg", "image/png", "image/webp", "image/svg+xml");
        if (in_array($fileType, $allowedTypes)) {
            move_uploaded_file($fileTmpPath, $fileDestPath);
            $this->model->logo = $newFileName;
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
        $query = $this->model->db->prepare("SELECT name,description, logo, address, url
        FROM breweries
        WHERE breweries.id=:id");
        $query->bindParam(":id", $this->model->id);
        $query->execute();
        $res = $query->fetch();

        return $res;
    }

    public function add(): bool
    {
        $query = $this->model->db->prepare("INSERT INTO breweries
        (name, description, logo, address, url )
            VALUES (:name, :description, :logo, :address, :url)");
        $query->bindParam(":name", $this->model->name);
        $query->bindParam(":description", $this->model->description);
        $query->bindParam(":logo", $this->model->logo);
        $query->bindParam(":address", $this->model->address);
        $query->bindParam(":url", $this->model->url);

        if ($query->execute()) {
            // $this->getBreweriesId();
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
            if (isset($data["logo"])) {
                $this->model->image = $data["logo"];
            }
        }
        $query = $this->model->db->prepare("UPDATE breweries
            SET name=:name, description=:description, logo=:logo, address=:address, url=:url
            WHERE id=:id;");
        $query->bindParam(":name", $this->model->name);
        $query->bindParam(":description", $this->model->description);
        $query->bindParam(":logo", $this->model->logo);
        $query->bindParam(":address", $this->model->address);
        $query->bindParam(":url", $this->model->url);
        $query->bindParam(":id", $this->model->id);

        if ($query->execute()) {

            return true;
        } else {

            return false;

        }
    }

    public function delete(): bool
    {

        $query = $this->model->db->prepare("DELETE FROM breweries WHERE id=:id");
        $query->bindParam(":id", $this->model->id);

        if ($query->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function getBreweriesId()
    {
        $breweryId = $this->model->db->lastInsertId();
        return $breweryId;
    }


}
