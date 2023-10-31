<?php

function get_query($data) {
	$fields = count($data);
	if ($fields == 3) {
		$mail = $data['mail'];
		$password = $data['password'];

		$query = "INSERT INTO test (mail, password)
			VALUES ('$mail', '$password')";
		
		echo $query;

	} elseif ($fields == 4) {
		$name = $data['name'];
		$mail = $data['mail'];
		$password = $data['password'];
		$agr = $data['agreement'];

		$query = "INSERT INTO test (name, mail, password, agreement)
			VALUES ('$name', '$mail', '$password', '$agr')";
	}
	return $query;
}


$dbc = mysqli_connect('localhost', 'root', '', 'login_database');
$data = json_decode(file_get_contents('php://input'), true);

$query = get_query($data);
$result = mysqli_query($dbc, $query);

http_response_code('201');
header('Content-type: application/json');
print json_encode(array('message' => 'Data has been sent'));

mysqli_close($dbc);