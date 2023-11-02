<?php


function flash(?string $message = null)
{
    if ($message) {
        $_SESSION['flash'] = $message;
    } else {
        if (!empty($_SESSION['flash'])) { ?>
          <div class="alert alert-danger mb-3">
              <?=$_SESSION['flash']?>
          </div>
        <?php }
        unset($_SESSION['flash']);
    }
}


function is_valid($dbc, $data) {
	$name = $data['name'];
	$mail = $data['mail'];
	$query_name = "SELECT name FROM test WHERE name = '$name'";
	$query_mail = "SELECT mail FROM test WHERE mail = '$mail'";

	$valid_name = mysqli_query($dbc, $query_name)->num_rows == 0;
	$valid_mail = mysqli_query($dbc, $query_mail)->num_rows == 0;
	if (!$valid_name) {
		return 'Это имя пользователя уже занято.';
	} elseif (!$valid_mail) {
		return 'Эта почта уже занята.';
	} else {
		return "ok";
	}
}


$dbc = mysqli_connect('localhost', 'root', '', 'login_database');
if (!$dbc) {
	header('Content-type: application/json');
	print json_encode(array('Error' => 'Connection falied'));
	die;
}
$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$mail = $data['mail'];
$password = $data['password'];
$agr = $data['agreement'];

$valid = is_valid($dbc, $data);
if ($valid != "ok") {
	// flash($valid);
	header('Content-type: application/json');
	print json_encode(array('error' => $valid));
	// header('Location: /'); // Возврат на форму регистрации
	die; // Остановка выполнения скрипта
}

$query = "INSERT INTO test (name, mail, password, agreement)
	VALUES ('$name', '$mail', '$password', '$agr')";
$request = mysqli_query($dbc, $query);

http_response_code('201');
header('Content-type: application/json');
print json_encode(array('message' => 'Successfully registered account', 
	'valid' => $valid));

mysqli_close($dbc);