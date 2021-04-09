<?php include("header.php"); ?>
    <main>
        <section>
            <h1><?= $detailPage ?></h1>
            <?= $message ?>
            <form action="" method="post" enctype="multipart/form-data">
                <div class="container">
                    <div class="form-group">
                        <label for="inputName">Le nom de la bière</label>
                        <input type="text" name="name" id="inputName" value="<?=isset($data["name"]) ? $data["name"] : "" ?>" required />
                    </div>
                    <div class="form-group">
                        <label for="inputBrewery">La brasserie dans laquelle est brassé cette bière</label>
                        <select name="brewery" id="inputBrewery">
                            <?php
                            foreach ($breweries as $brewery){
                                ?>
                                    <option value="<?= $brewery["id"] ?>" <?= isset($data["brewery"]) && ($brewery["id"] == $data["brewery"]) ? "selected" : "" ?>> <?= $brewery["name"] ?></option>
                                <?php
                                }
                                ?>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="inputType">Le type de la bière</label>
                        <select name="type" id="inputType">
                        <?php
                            foreach ($types as $type){
                        ?>
                            <option value="<?= $type["id"] ?>" <?= isset($data["type"]) && ($type["id"] == $data["type"]) ? "selected" : "" ?>> <?= $type["type"] ?></option>
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
                        <input type="text" name="description" id="inputDescription" value="<?= isset($data["description"]) ? $data["description"] : "" ?>" />
                    </div>
                    <div class="form-group">
                        <label for="inputDescription2">Le second texte de description</label>
                        <input type="text" name="description2" id="inputDescription2" value="<?= isset($data["description2"]) ? $data["description2"] : "" ?>" />
                    </div>
                    <div class="form-group">
                        <label for="inputLevel">Le degré d'alcool dans la bière</label>
                        <input type="text" name="level" id="inputLevel" value="<?= isset($data["level"]) ? $data["level"] : "" ?>" />
                    </div>
                    <div class="form-group">
                        <fieldset>
                            <label>Veuillez sélectionner les saveurs associées a cette bière</label>
                            <?php
                                foreach ($flavours as $flavour)
                                {
                                ?>
                                    <div>
                                        <input type="checkbox" id="<?= $flavour["id"] ?>" name="flavour" value=<?= $flavour["flavour"]?>>
                                        <label for="<?= $flavour["id"] ?>"><?= $flavour["flavour"]?></label>
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
                            foreach ($glasses as $glass){
                                ?>
                                    <option value="<?= $glass["id"] ?>" <?= isset($data["glass"]) && ($glass["id"] == $data["glass"]) ? "selected" : "" ?>> <?= $glass["glass"] ?></option>
                                <?php
                            }
                            ?>
                        </select>
                    </div>
                    <div class="form-group">
                    <label for="inputLocation">La région dans laquelle est brassé cette bière</label>
                        <select name="location" id="inputLocation">
                            <?php
                            foreach ($locations as $location){
                                ?>
                                    <option value="<?= $location["id"] ?>" <?= isset($data["location"]) && ($location["id"] == $data["location"]) ? "selected" : "" ?>> <?= $location["location"] ?></option>
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
                                <img src="../../assets/img/beers/<?= $data["image"] ?>" alt="">
                            <?php
                            } else {
                            ?>
                                <input type="file" name="image" id="inputImage" />
                            <?php
                            }
                            ?>
                    </div>
                    <div>
                        <input type="submit" value="Ajouter la bière" />
                    </div>
                </div>
            </form>
        </section>
    </main>
<?php include("footer.php"); ?>
