<?php
class BreweryView
{
    public function __construct(BreweryController $controller)
    {
        $this->controller = $controller;
        $this->template = DIR_TEMPLATE . "brewery.php";
    }

    public function render()
    {
        if (!isset($_SESSION["session_id"]) && ($_SESSION["user_ip"] != $_SERVER["REMOTE_ADDR"])) {
            header("Location: login");
        } else {
            $message = "";
            $detailPage = "Ajouter une brasserie";
            if (!empty($_POST)) {
                if (isset($_FILES["logo"]) && $_FILES["logo"]["error"] === UPLOAD_ERR_OK) {
                    if (!$this->controller->uploadImage($_FILES["logo"])) {
                        $errors["message"] = "Le type du fichier est incorrect";
                    }
                }

                $data = $this->controller->getDataForm();

                if (!$this->controller->validateForm()) {
                    $errors["message"] = "Des champs obligatoires ne sont pas renseignées";
                }

                if (empty($errors)) {
                    if (isset($_GET["id"])) {
                        
                            if ($this->controller->edit()) {
                                header("Location:" . HOST."/breweries");                              
                            } else {
                                $message = "Erreur de bdd";
                            }
                        
                    } else {
                        if ($this->controller->add()) {
                            // $idBrewery = $this->controller->getBreweriesId();
                            header("Location:" . HOST."/breweries");
                        } else {
                            $message = "Erreur de bdd lors de l'ajout";
                        }
                    }
                } else {
                    $message = "<div class=\"alert alert-danger\">{$errors["message"]}</div>";
                }
            } else if (isset($_GET["id"])) {
                if (isset($_GET["operation"]) && $_GET["operation"] == "delete") {
                    if ($this->controller->delete()) {
                        header("Location:" . HOST."/breweries");
                    } else {
                        $message = "Erreur de bdd";
                    }
                } else {
                    $detailPage = "Modifier une brasserie";
                    $data = $this->controller->get();
                }
            }

            require($this->template);
        }
    }
}
