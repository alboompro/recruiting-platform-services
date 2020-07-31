<!doctype html>
<html lang="pt-BR">
	<head>
		<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
	</head>
</html>

<?php
	session_start();
	include("connection/database.h.php");
	mysqli_set_charset($conn, "utf8");
	$name = $_POST['name'];
	$email = $_POST['email'];
	$sql_1 = "SELECT * FROM clients WHERE email = '$email'";
	if($result = mysqli_query($conn, $sql_1)){
		while($row = mysqli_fetch_row($result)){
			echo "<script>
				Swal.fire({
					html: 'O e-mail já está cadastrado.',
					icon: 'error',
					focusConfirm: false,
					confirmButtonText: 'Ok',
				}).then((result) =>{
					if(result.value)
						window.location.href = 'index.php';
				})
				</script>";
		}
	}
	$sql = "INSERT INTO clients(name, email, coupon_code) VALUES ('$name', '$email', (SELECT GROUP_CONCAT((SELECT CAST(CHAR(FLOOR(RAND()*26)+65) AS CHAR CHARACTER SET utf8mb4)), (SELECT CAST(CHAR(FLOOR(RAND()*26)+65) AS CHAR CHARACTER SET utf8mb4)), (SELECT FLOOR(RAND()*1000000) LIMIT 1)) AS coupon_code))";
	if(mysqli_query($conn, $sql))
		header("Refresh: 0.3; Url = products.php");
?>