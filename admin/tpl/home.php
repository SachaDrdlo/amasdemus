<?php
$home = true;
require_once("header.php");
?>

<body>

    <main class="container">
        <ul class="beer-container">
            <?php
                foreach ($beers as $beer) {
                    // $flavours = explode(" - ", $beer['saveurs']);
            ?>
            <li class="beer">
                <div class="beer-infos">
                    <h2><?= $beer['name'] ?></h2>
                
                    <h3><?= $beer['nom_brasserie']?></h3>
                    <p><?= ucfirst($beer['type'])?> - <?= $beer['level']?>°</p>
                    <p><?= ucfirst($beer['saveurs'])?></p>
                    
                </div>
                <div class="beer-img">
                    <img src="./assets/img/beers/<?= $beer["image"] ?>" alt="">
                </div>
                <div class="beer-btns">
                    <a class="btn btn__beerhome" href="<?= HOST ?>/edit/<?= $item["id"] ?>">Editer</a>
                    <a class="btn btn__beerhome" href="<?= HOST ?>/delete/<?= $item["id"] ?>">Supprimer</a>
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
