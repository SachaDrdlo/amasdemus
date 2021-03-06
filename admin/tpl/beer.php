<?php
$page = "beer";
include("header.php");
?>
<main>
    <section class="beer-section">
        <div class="container">
            <h1><?= $detailPage ?></h1>
            <?= $message ?>
            <form class="form-container" action="" method="post" enctype="multipart/form-data">
                <div class="form-group">
                    <label for="inputName">Le nom de la bière</label>
                    <input type="text" name="name" id="inputName" value="<?= isset($data["name"]) ? $data["name"] : "" ?>" required />
                </div>
                <div class="form-group">
                    <label for="inputBrewery">La brasserie dans laquelle est brassé cette bière</label>
                    <select name="brewery" id="inputBrewery">
                        <?php
                        foreach ($breweries as $brewery) {
                        ?>
                            <option value="<?= $brewery["id"] ?>" <?= isset($data["id_brewery"]) && ($brewery["id"] == $data["id_brewery"]) ? "selected" : "" ?>> <?= $brewery["name"] ?></option>
                        <?php
                        }
                        ?>
                    </select>
                </div>
                <div class="form-group">
                    <label for="inputType">Le type de la bière</label>
                    <select name="type" id="inputType">
                        <?php
                        foreach ($types as $type) {
                        ?>
                            <option value="<?= $type["id"] ?>" <?= isset($data["id_type"]) && ($type["id"] == $data["id_type"]) ? "selected" : "" ?>> <?= $type["type"] ?></option>
                        <?php
                        }
                        ?>
                    </select>
                    </div>
                    <div class="form-group">
                        <label for="inputTitle">Le slogan de la bière</label>
                        <input type="text" name="title" id="inputTitle" value="<?= isset($data["title"]) ? $data["title"] : "" ?>" />
                    </div>
                    <div class="form-group">
                        <label for="inputDescription">Le premier texte de description</label>
                        <textarea name="description" id="inputDescription" rows="10" cols="33" value="" ><?= isset($data["description"]) ? $data["description"] : "" ?></textarea>
                    </div>
                    <div class="form-group">
                        <label for="inputLevel">Le degré d'alcool dans la bière</label>
                        <input type="number" step="any" name="level" id="inputLevel" value="<?= isset($data["level"]) ? $data["level"] : "" ?>" />
                    </div>
                    <div class="form-group">
                        <fieldset>
                            <legend>Veuillez sélectionner les saveurs associées a cette bière</legend>
                            <?php

                        if (isset($data['saveurs'])) {
                            $saveurs = explode(", ", $data['saveurs']);
                        };

                        foreach ($flavours as $flavour) {
                        ?>
                            <div>
                                <input class="input-checkbox" type="checkbox" id="<?= $flavour["id"] ?>" name="flavour[<?= $flavour["id"] ?>]" value="<?= $flavour["flavour"] ?>" <?= isset($data['saveurs']) && in_array($flavour["flavour"], $saveurs) ? "checked" : "none"; ?>>
                                <label for="flavour[<?= $flavour["id"] ?>]"><?= $flavour["flavour"] ?></label>
                            </div>
                        <?php
                        }
                        ?>
                    </fieldset>
                </div>
                <div class="form-group">
                    <label for="inputGlass">Le verre de dégustation à utiliser</label>
                    <select name="glass" id="inputGlass">
                        <?php
                        foreach ($glasses as $glass) {
                        ?>
                            <option value="<?= $glass["id"] ?>" <?= isset($data["id_glass"]) && ($glass["id"] == $data["id_glass"]) ? "selected" : "" ?>> <?= $glass["glass"] ?></option>
                        <?php
                        }
                        ?>
                    </select>
                </div>
                <div class="form-group">
                    <label for="inputLocation">La région dans laquelle est brassé cette bière</label>
                    <select name="location" id="inputLocation">
                        <?php
                        foreach ($locations as $location) {
                        ?>
                            <option value="<?= $location["id"] ?>" <?= isset($data["id_location"]) && ($location["id"] == $data["id_location"]) ? "selected" : "" ?>> <?= $location["location"] ?></option>
                        <?php
                        }
                        ?>
                    </select>
                </div>
                <div class="form-group">
                    <label for="inputImage">L'image de la bière</label>
                    <?php
                    if (!empty($data["image"])) {
                    ?>
                        <img class="beer-img" src="../assets/img/beers/<?= $data["image"] ?>" alt="">
                        <input type="file" name="image" id="inputImage" />
                        <label class="btn" for="inputImage">Choisir une photo</label>
                    <?php
                    } else {
                    ?>
                        <input type="file" name="image" id="inputImage" />
                        <label class="btn" for="inputImage">Choisir une photo</label>
                    <?php
                    }
                    ?>
                </div>
                <div>
                    <input class="btn" type="submit" value="Ajouter la bière" />
                </div>
        </div>
        </form>
        </div>
    </section>
</main>
<?php include("footer.php"); ?>