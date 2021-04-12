<?php
class HomeView
{
    public function __construct(HomeController $controller) {
        $this->controller = $controller;
        $this->template = DIR_TEMPLATE."home.php";        
    }

    public function render(){
        $beers = $this->controller->getBeers();
        
        require($this->template);
    }
}