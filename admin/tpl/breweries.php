<?php
$home = true;
require_once("header.php");
?>

    <main class="container">
        <ul class="beer-container">
            <?php
            foreach ($breweries as $brewery) {
            ?>
                <li class="beer">

                    <div class="beer-img">
                        <img src="./assets/img/breweries/<?= $brewery["logo"] ?>" alt="">
                    </div>
                    <div class="beer-infos">
                        <h2><?= $brewery['name'] ?></h2>
                    </div>
                    <div class="beer-btns">
                        <a class="btn btn__beerhome" href="<?= HOST ?>/edit_brewery/<?= $brewery["id"] ?>">Editer</a>
                        <a class="btn btn__beerhome" href="<?= HOST ?>/delete_brewery/<?= $brewery["id"] ?>">Supprimer</a>
                    </div>
                </li>
            <?php
            }
            ?>
        </ul>
    </main>

    <?php
    require_once('footer.php');
    ?>