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
        $message = "";
        $detailPage = "Ajouter une bière";
        require($this->template);
    }
}
