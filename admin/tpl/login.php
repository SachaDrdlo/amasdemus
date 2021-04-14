<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AmasDemus - accès administration</title>
    <link rel="stylesheet" href="" />
    <link rel="stylesheet" href="" />
</head>

<body>
    <main>
        <section id="login">
            <img src="./assets/img/logo.png" alt="AmasDemus - Le jour de boire est arrivé">
            <?= $message ?>
            <form action="" method="post">
                <div class="form-group">
                    <label for="inputEmail">Email</label>
                    <input type="email" name="email" id="inputEmail" placeholder="Email" required />
                </div>
                <div class="form-group">
                    <label for="inputPassword">Mot de passe</label>
                    <input type="password" name="password" id="inputPassword" placeholder="Mot de passe" required />
                </div>

                <input class="btn btn-secondary" type="submit" value="Ouvrir une session" />

            </form>

        </section>
    </main>
</body>

</html>