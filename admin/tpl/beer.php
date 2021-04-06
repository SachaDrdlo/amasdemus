<?php include("header.php"); ?>
    <main>
        <section>
            <h1><?= $detailPage ?></h2>
            <?= $message ?>
            <form action="" method="post" enctype="multipart/form-data">
                <div class="container">
                    <div class="form-group">
                        <label for="inputName">Nom de la bière</label>
                        <select name="name" id="inputName">
                            
                        </select>
                    </div>
                </div>
            </form>
        </section>
    </main>
<?php include("footer.php"); ?>