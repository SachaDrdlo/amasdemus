<?php
class BeerController
{
    private $model;

    public function __construct(BeerModel $model)
    {
        $this->model = $model;
    }

}
