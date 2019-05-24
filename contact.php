<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Final Show</title>
    <link rel="stylesheet" type="text/css" href="CSS/contact.css" />
    <link rel="stylesheet" type="text/css" href="CSS/newnav.css" />
    <link rel="stylesheet" href="CSS/Index.css">
    <link href="https://fonts.googleapis.com/css?family=Pathway+Gothic+One" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="js/nav.js"></script>
</head>
<label>
    <input type='checkbox'>
    <span class='menu'>
        <span class='hamburger'></span>
    </span>
    <ul>
        <li>
            <a href='index.html'>Home</a>
        </li>
        <li>
            <a href='projecten.html'>Projecten</a>
        </li>
        <li>
            <a href='connect.html'>Connect</a>
        </li>
        <li>
            <a href='contact.php'>Contact</a>
        </li>
        <li>
            <a href='scanner.html'>QR-Code Scanner</a>
        </li>
    </ul>
</label>

<body>
    <header>
        <a href="index.html"><img src="Images/LogoFS.png" alt="Logo" width="30%"></a>
        <a href="scanner.html"><img class="scan" src="Images/Qr-code-scanner.png" alt="qrscan" width="10%"></a>

    </header>
    <h2>Contact</h2>
    <p class="mailadres"><a href="mailto:info@ehb.be">info@ehb.be</a> <br> 02 523 37 37</p>

    <div class="formulier">
       
        <!--Ik heb deze php-code vanuit mijn oude portfolio website genomen die ik in mijn SENSE jaar heb gemaak in Don Bosco Halle schooljaar 2017-2018.-->
       
        <?php
            if (isset($_POST["submit"]) ) {

            /*$mail= $_POST["mail"];*/
            $mail= "attila.tolnai170@gmail.com";
                
            $voornaam= $_POST["voornaam"];
            $achternaam= $_POST["achternaam"];
            $email= $_POST["email"];
            $onderwerp=$_POST["onderwerp"];
            $bericht=$_POST["bericht"];
                
            $submit=$_POST["submit"];
            $bericht= $bericht;

            if(mail("$mail", $onderwerp, "$bericht", "Content-type: text/html; charset=iso-8859-1" . "\r\n" . "From: $email ")){
                echo "<p>Uw bericht werd succesvol doorgestuurd, $voornaam $achternaam .</p>";
            }

            }
            else {
            
        ?>
        
        <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="POST">
            <!--
<h4>Uw email-adress</h4>
<input type="mail" placeholder="mail" name="mail">
-->

            <h4>Voornaam</h4>
            <input type="text" placeholder="Voornaam" name="voornaam">
            <h4>Achternaam</h4>
            <input type="text" placeholder="Achternaam" name="achternaam">
            <h4>Onderwerp</h4>
            <input type="text" placeholder="Onderwerp" name="onderwerp">
            <h4>E-mail</h4>
            <input type="mail" placeholder="Email" name="email">
            <h4>Bericht</h4>
            <p id="bericht"><textarea name="bericht" cols="31px" rows="5" placeholder="Bericht"></textarea></p>
            <p id="button"><input type="submit" name="submit" value="Verstuur mail"></p>
        </form>
        <?php
            }
            ?>
    </div>



    <h2>Waar</h2>
    <h3 class="naam">Zinnema</h3>
    <p id="adres">Rue de Veeweyde 24 <br> 1070 anderlecht</p>
    <div class="kaart">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.8315355715654!2d4.304913016006102!3d50.83428427953021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c41dd7e13f2d%3A0x622bf72642175cf9!2sZINNEMA+Open+Talentenhuis+in+Brussel!5e0!3m2!1snl!2sbe!4v1558082489435!5m2!1snl!2sbe" width="100%" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>

    <footer>
        <a href="https://www.erasmushogeschool.be/nl"><img class="logo" src="Images/Ehb-logowit.png"></a>
        <a href="https://www.facebook.com/erasmushogeschool"><img src="Images/facebook.svg"></a>
        <a href="https://twitter.com/ehbrussel?lang=nl"><img src="Images/twitter.svg"></a>
        <a href="https://www.instagram.com/erasmushogeschool/"><img src="Images/instagram.svg"></a>
    </footer>

</body>

</html>
