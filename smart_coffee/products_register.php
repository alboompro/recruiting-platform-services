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
	if(isset($_POST['check'])){
		$check = implode(";", $_POST['check']);
		foreach($_POST['check'] as $check){
			$sql = "INSERT INTO client_recipes(recipe_id, client_id) VALUES('$check', (SELECT LAST_INSERT_ID(id) FROM clients ORDER BY id DESC LIMIT 1))";
			if(mysqli_query($conn, $sql))
				header("Refresh: 0.3; Url = complements.php");
		}
	}
	else{
		echo "<script>
		Swal.fire({
			html: 'Selecione pelo menos um produto.',
			icon: 'warning',
			focusConfirm: false,
			confirmButtonText: 'Ok',
		}).then((result) =>{
			if(result.value)
				window.location.href = 'products.php';
		})
		</script>";
	}
?>