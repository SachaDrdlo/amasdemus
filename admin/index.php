<?php
session_start();

// Accès aau fichier de configuration
require_once("system/config.php");

// Connexion à la database
require_once("system/db.php");

$db = new DB(DB_HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_PORT);

$page = "home";
if (isset($_GET["page"]) && !empty($_GET["page"])) {
	$page = $_GET["page"];
}

$data = array(
	"home" => array("model" => "HomeModel", "view" => "HomeView", "controller" => "HomeController"),
);

$find = false;
foreach($data as $key => $components){
	if ($page == $key) {
		$find = true;
		
		$model = $components["model"];
		$view = $components["view"];
		$controller = $components["controller"];
		break;
	}
}

if ($find) {
	require_once(DIR_MODEL.$page.".php");
	require_once(DIR_CONTROLLER.$page.".php");
	require_once(DIR_VIEW.$page.".php");
	$pageModel = new $model($db);
	$pageController = new $controller($pageModel);
	$pageView = new $view($pageController);
	$pageView->render();
}