<?php
require_once('header.php');
?>
<main class="login">
    <div class="container">
        <section id="login" class="login-section">
            <img class="logo logo__login" src="./assets/img/logo.svg" alt="AmasDemus - Le jour de boire est arrivé">
            <?= $message ?>
            <form action="" method="post">
                <div class="form-group">
                    <label for="inputEmail">Email</label>
                    <input type="email" name="email" id="inputEmail" required />
                </div>
                <div class="form-group">
                    <label for="inputPassword">Mot de passe</label>
                    <input type="password" name="password" id="inputPassword" required />
                </div>
                <input class="btn" type="submit" value="Se connecter" />

            </form>

        </section>
    </div>
</main>

<?php
require_once('footer.php');
?>