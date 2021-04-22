<!DOCTYPE html>
<html lang="fr">



<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Back office Amas Demus</title>
    <!-- <link rel="shortcut icon" href="<?= HOST ?>/assets/img/favicon.ico" type="image/x-icon">
    <link rel="icon" href="<?= HOST ?>/assets/img/favicon.ico" type="image/x-icon"> -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Germania+One&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?= HOST ?>/assets/css/main.css" />
</head>

<body>
    <?php
    if (isset($_SESSION["session_id"])) {
    ?>
        <header class="container">
            <div class="row">
                <div class="headercontainer">
                    <a class="logo-link" href="<?= HOST ?>">
                        <img class="logo" src="<?= HOST ?>/assets/img/logo.png" alt="Logo Amas Demus">
                    </a>
                    <nav>
                        <ul>
                            <li>
                                <a class="btn  <?= isset($page) && $page === "home" ? "hidden" : "" ?>" href="<?= HOST ?>">Accueil Bière</a>
                            </li>
                            <li>
                                <a class="btn <?= isset($page) && $page === "brewery" || $page === "beer" || $page === "breweries" ? "hidden" : "" ?>" href="<?= HOST ?>/beer">Ajouter une bière</a>
                            </li>
                            <li>
                                <a class="btn <?= isset($page) && $page === "breweries" ? "hidden" : "" ?>" href="<?= HOST ?>/breweries">Accueil Brasserie</a>
                            </li>
                            <li>
                                <a class="btn <?= isset($page) && $page === "home" || $page === "beer" ? "hidden" : "" ?>  " href="<?= HOST ?>/brewery">Ajouter une brasserie</a>
                            </li>
                            <li>
                                <a class="btn" href="<?= HOST ?>/logout.php">Se déconnecter</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    <?php
    }
    ?>