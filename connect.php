<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Connect</title>
    <link rel="stylesheet" href="CSS/contact.css">
    <link rel="stylesheet" type="text/css" href="CSS/newnav.css" />
    <link href="https://fonts.googleapis.com/css?family=Pathway+Gothic+One" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>
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
                <a href='connect.php'>Connect</a>
            </li>
            <li>
                <a href='contact.php'>Contact</a>
            </li>
            <li>
                <a href='scanner.html'>QR-Code Scanner</a>
            </li>
        </ul>
    </label>
    <h2>Connect</h2>
    <p class="mail"><a href="mailto:info@ehb.be">info@ehb.be</a> <br> 02 523 37 37</p>



    <div class="formulier">
        <?php
            if (isset($_POST["submit"]) ) {

            $mail= $_POST["mail"];
                
            $voornaam= $_POST["voornaam"];
            $achternaam= $_POST["achternaam"];
                
            $submit=$_POST["submit"];
            $bericht= $bericht;

            if(mail("$mail", "Content-type: text/html; charset=iso-8859-1" . "\r\n" . "From: $mail ")){
                echo "<p>Uw bericht werd succesvol doorgestuurd, $voornaam $achternaam .</p>";
            }

            }
            else {
            
        ?>

        <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="POST">
            <h2 class="rood">Connect</h2>

           
            <h4>Uw email-adress</h4>
            <input type="mail" placeholder="mail" name="mail">

            <h4>Voornaam</h4>
            <input type="text" placeholder="Voornaam" name="voornaam">
            <h4>Achternaam</h4>
            <input type="text" placeholder="Achternaam" name="achternaam">
            <p><input type="submit" name="submit" value="Stuur gegevens naar mij"></p>
        </form>
        <?php
                }
        ?>
    </div>
</body>

</html>
