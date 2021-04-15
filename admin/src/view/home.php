<?php
class HomeView
{
    public function __construct(HomeController $controller)
    {
        $this->controller = $controller;
        $this->template = DIR_TEMPLATE . "home.php";
    }

    public function render()
    {
        if (!isset($_SESSION["session_id"]) && ($_SESSION["user_ip"] != $_SERVER["REMOTE_ADDR"])) {
            header("Location: login");
        } else {
            $beers = $this->controller->getBeers();

            require($this->template);
        }
    }
}
