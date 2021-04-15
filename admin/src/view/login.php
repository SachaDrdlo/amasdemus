<?php
class LoginView
{
    public function __construct(LoginController $controller) {
        $this->controller = $controller;
        $this->template = DIR_TEMPLATE."login.php";
    }

    public function render(){
        $message = "";
        if (!empty($_POST)) {
            if($this->controller->validateLogin()) {
                header("Location: ".HOST);
            } else {
                $message = "<div class=\"alert alert-danger\">Impossible de se connecter avec les informations saisies</div>";
            }
        }
        require($this->template);
    }
}