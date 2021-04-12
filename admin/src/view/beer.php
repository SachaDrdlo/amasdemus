<?php
class BeerView
{
    public function __construct(BeerController $controller)
    {
        $this->controller = $controller;
        $this->template = DIR_TEMPLATE . "beer.php";
    }

    public function render()
    {
        // $this->controller->addFlavours();
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
                        $idBeer = $this->controller->getBeerId();
                        
                        if ($this->controller->addFlavours($idBeer)){
                            header("Location:  ".HOST);
                        } else {
                            $message = "Erreur de bdd au niveau des saveurs";
                        }
                    } else {
                        $message = "Erreur de bdd";
                    }
                }
            } else {
                $message = "<div class=\"alert alert-danger\">{$errors["message"]}</div>";
            }
        } else if (isset($_GET["id"])) {
            if(isset($_GET["operation"]) && $_GET["operation"]== "delete") {
                if ($this->controller->delete()){
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
