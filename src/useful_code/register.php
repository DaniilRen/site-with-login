<?php

require_once __DIR__.'/boot.php';

// Проверим, не занято ли имя пользователя
$stmt = pdo()->prepare("SELECT * FROM `test` WHERE `name` = :name");
$stmt->execute(['name' => $_POST['name']]);
if ($stmt->rowCount() > 0) {
    flash('Это имя пользователя уже занято.');
    header('Location: /'); // Возврат на форму регистрации
    die; // Остановка выполнения скрипта
};

// Добавим пользователя в базу
$stmt = pdo()->prepare("INSERT INTO `test` (`name`, `password`, `mail`) VALUES (:name, :password, :mail)");
$stmt->execute([
    'name' => $_POST['name'],
    'password' => password_hash($_POST['password'], PASSWORD_DEFAULT),
		'mail' => $_POST['mail'],
]);

// header('Location: login.php');