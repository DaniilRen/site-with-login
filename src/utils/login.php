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


function is_registered($dbc, $mail) {
	$query = "SELECT mail FROM test WHERE mail = '$mail'";
	return mysqli_query($dbc, $query)->num_rows == 1;
}


function check_password($dbc, $password) {
	
}


$dbc = mysqli_connect('localhost', 'root', '', 'login_database');
if (!$dbc) {
	header('Content-type: application/json');
	print json_encode(array('Error' => 'Connection falied'));
	die;
}
$data = json_decode(file_get_contents('php://input'), true);

$mail = $data['mail'];
$password = $data['password'];
$remember = $data['remember'];

$registered = is_registered($dbc, $mail);
if (!$registered) {
	header('Content-type: application/json');
	print json_encode(array('message' => 'Unknown account',
	'registered' => $registered));
	// flash('Пользователь с такой почтой не найден');
	// header('Location: https://www.php.net/manual/en/function.header.php');
	die;
}

http_response_code('201');
header('Content-type: application/json');
print json_encode(array('message' => 'Successfully loged in',
	'registered' => $registered));

mysqli_close($dbc);