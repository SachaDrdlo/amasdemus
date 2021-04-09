<?php
$home = true;
require_once("header.php");
?>

<body>

    <main class="container">
        <ul class="beer-container">
            <?php
                foreach ($beers as $beer) {
            ?>
            <li class="beer">
                <div class="beer-infos">
                    <h2><?= $beer['name'] ?></h2>
                    <h3><?= $beer['nom_brasserie']?></h3>
                    <span><?= $beer['type']?> - <?= $beer['level']?>°</span>
                </div>
                <div class="beer-img">
                    <img src="./assets/img/beers/<?= $beer["image"] ?>" alt="">
                </div>
                <!-- <p>
                    <?php
                        foreach ($flavours as $flavour) {
                            echo $flavour['flavour'] . " ";
                        }
                    ?>
                </p> -->
            </li>
            <?php
                }
            ?>    
        </ul>
    </main>

<?php
require_once('footer.php');
?>
