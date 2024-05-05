/*получаем значения полей из формы*/
$name = $_POST['name'];
$comment = $_POST['comment'];
$email = $_POST['email'];

/*функция для создания запроса на сервер Telegram */
function parser($url){
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);
    if($result == false){     
      echo "Ошибка отправки запроса: " . curl_error($curl);
      return false;
    }
    else{
      return true;
    }
}

/*собираем сообщение*/
$message .= "Новое сообщение из формы";
$message .= "Имя: ".$name;
$message .= "Телефон:".$comment;
$message .= "Email:".$email;

/*токен который выдаётся при регистрации бота */
$token = "1724061264:AAHTshrcn33459712fdsf2zM-bDviT-QgF0tAM";
/*идентификатор группы*/
$chat_id = "-4188715596";
/*делаем запрос и отправляем сообщение*/
parser("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$message}");