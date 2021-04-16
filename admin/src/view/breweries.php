<?php
class BreweriesView
{
    public function __construct(BreweriesController $controller)
    {
        $this->controller = $controller;
        $this->template = DIR_TEMPLATE . "breweries.php";
    }

    public function render()
    {
        if (!isset($_SESSION["session_id"]) && ($_SESSION["user_ip"] != $_SERVER["REMOTE_ADDR"])) {
            header("Location: login");
        } else {
            $breweries = $this->controller->getBreweries();

            require($this->template);
        }
    }
}
