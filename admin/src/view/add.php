<?php
class AddView
{
    public function __construct(AddController $controller)
    {
        $this->controller = $controller;
        $this->template = DIR_TEMPLATE . "add.php";
    }

    public function render()
    {
        $message = "";
        $detailPage = "Ajouter une bière";
        if (!empty($_POST)){
            if (isset($_FILES["image"]) && $_FILES["image"]["error"] === UPLOAD_ERR_OK){
                if (!$this->controller->uploadImage($_FILES["image"])) {
                    $errors["message"] = "Le type du fichier est incorrect";
                }
            }

            $data = $this->controller->getDataForm();

            if (!$this->controller->validateForm()){
                $errors["message"] = "Des champs obligatoires ne sont pas renseignées";
            }

            if(empty($errors)) {
                if (isset($_GET["id"])){
                    if ($this->controller->edit()){
                        header("location: ".HOST);
                    } else {
                        $message = "Erreur de bdd";
                    }
                    
                } else {
                    if ($this->controller->add()){
                        header("Location:  ".HOST);
                    } else {
                        $message = "Erreur de bdd";
                    }
                }
            } else {
                $message = "<div class=\"alert alert-danger\">{$errors["message"]}</div>";
            }
        } else if (isset($_GET["id"])) {
            if(isset($_GET["operation"]) && $_GET["operation"]== "delete") {
                if ($this-controller->delete()){
                    header("Location:".HOST);
                } else {
                    $message ="Erreur de bdd";
                }
            } else {
                $detailPage = "Modifier un bière";
                $data = $this->controller->get();
            }
        }
        $breweries = $this->controller->getBreweries();
        $glasses = $this->controller->getGlasses();
        $locations = $this->controller->getLocations();
        $types = $this->controller->getTypes();
        $flavours = $this->controller->getFlavours();

        require($this->template);
    } 
}
