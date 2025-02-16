<?php
declare(strict_types=1);
ini_set('display_errors', 1);
error_reporting(E_ALL);

// phpda $_GET super global o'zgaruvchanini ishlatib koramiz


?>

<!Doctype html>
<html>
    <head>
        <title>Php </title>
    </head>


    <body>

    <hr/>
        <?php
//         print "isminigiz: " . $_GET['givenName'] . '<br/>' .'<br/>';
//
//         print "familiyangiz: " . $_GET['familyName'];
//         Agar foydalanuvchi ism va familiyani kiritgan bo'lsa
//         Unda u  ma'lumotlarni ekranga chiqar
//         Bo'lmasa  , ekranga "Sorovnomani to'ldiring" jumlasini
//         Ekranga  chiqar
//          $firstName = isset($_GET['givenName']) ? $_GET['givenName'] : '';


//     $firstName = isset($_GET['givenName'] ? $_GET['givenName'] : '');
//     $lastName = isset($_GET['familyName'] ?  $_GET['familyName'] : '');
//     $result = "$firstName $lastName";
//
//     if($firstName || $lastName) {
//         print "ismingiz: $result";
//
//     }else{
//         print "sorovnomani toldiring";
//
//     }
//
//
//



//         Agar foydalanuvchi ism va familiyani kiritgan bo'lsa
//         Unda u  ma'lumotlarni ekranga chiqar
//         Bo'lmasa  , ekranga "Sorovnomani to'ldiring" jumlasini
//         Ekranga  chiqar



    $firstName = isset($_GET['givenName']) ?  $_GET['givenName'] : '';
    $lastName =  isset($_GET['familyName']) ? $_GET['familyName'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '';
//     $result = "$firstName $lastName";


// Foydalanuvchi inputlari tekshiriladi
if (!$firstName && !$lastName && !$password && empty($_GET)) {
    // Parametrlar bo'sh va birinchi marta sahifa ochilgan holatda
    print "Iltimos ism, familiya va parolni kiriting.";
} else if ($firstName && $lastName && $password) {
    // Agar barcha maydonlar to'ldirilgan bo'lsa
    print "Ismingiz: $firstName </br>Familiyangiz: $lastName </br>Parolingiz: $password </br>";
} else {
    // Foydalanuvchining kiritmagan malumotlarini aniqlash
    $messages = [];

    if (!$firstName) {
        $messages[] = "Ism kiritilmagan";
    }
    if (!$lastName) {
        $messages[] = "Familiya kiritilmagan";
    }
    if (!$password) {
        $messages[] = "Parol kiritilmagan";
    }

    // Xatolar ro'yxatini chiqarish
    print implode(", ", $messages) . " iltimos to'ldirib qayta urinib ko'ring.";
}


 ?>
    <hr/>
        <h1>Sorovnoma</h1>

        <form action="#">
            isminigiz: <input type="text" name="givenName" > <br><br/>
            familiyangiz: <input type="text" name="familyName" > <br><br/>
            parol :  <input type= "password" name = "password"/><br/>

            <br>
            <button>Jo'natish</button>
        </form>
    </body>



</html