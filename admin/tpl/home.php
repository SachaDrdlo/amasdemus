<?php
$home = true;
require_once("header.php");
?>

<body>

    <main class="container">
        <ul>
            <?php
                foreach ($beers as $beer) {
            ?>
            <li>
                <h2><?= $beer['name'] ?></h2>
                <h3><?= $beer['nom_brasserie']?></h3>
                <p><?= $beer['level']?>°</p>
            </li>
            <?php
                }
            ?>    
        </ul>
    </main>

<?php
require_once('footer.php');
?>
