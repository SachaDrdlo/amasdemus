<?php
$page = "brewery";
include("header.php");
?>
<main>
    <section class="beer-section">
        <div class="container">
            <h1><?= $detailPage ?></h1>
            <?= $message ?>
            <form class="form-container" action="" method="post" enctype="multipart/form-data">
                <div class="form-group">
                    <label for="inputName">Le nom de la brasserie</label>
                    <input type="text" name="name" id="inputName" value="<?= isset($data["name"]) ? $data["name"] : "" ?>" required />
                </div>

                <div class="form-group">
                    <label for="inputDescription">Le texte de description</label>
                    <input type="text" name="description" id="inputDescription" value="<?= isset($data["description"]) ? $data["description"] : "" ?>" />
                </div>

                <div class="form-group">
                    <label for="inputAddress">L'addresse de la brasserie</label>
                    <input type="text" name="address" id="inputAddress" value="<?= isset($data["address"]) ? $data["address"] : "" ?>" />
                </div>

                <div class="form-group">
                    <label for="inputUrl">Le site internet de la brasserie</label>
                    <input type="text" name="url" id="inputUrl" value="<?= isset($data["url"]) ? $data["url"] : "" ?>" />
                </div>

                <div class="form-group">
                    <label for="inputLogo">Le logo de la brasserie</label>
                    <?php
                    if (!empty($data["logo"])) {
                    ?>
                        <img src="../assets/img/breweries/<?= $data["logo"] ?>" alt="">
                        <input type="file" name="logo" id="inputLogo" />
                    <?php
                    } else {
                    ?>
                        <input type="file" name="logo" id="inputLogo" />
                        <label class="btn" for="inputLogo">Choisir une photo</label>
                    <?php
                    }
                    ?>


                </div>
                <div>
                    <input class="btn" type="submit" value="Ajouter la brasserie" />
                </div>
        </div>
        </div>
        </div>
        </form>
    </section>
</main>
<?php include("footer.php"); ?>