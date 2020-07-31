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
			$sql = "INSERT INTO client_recipe_ingredients(ingredient_id, client_recipe_id) VALUES('$check', (SELECT LAST_INSERT_ID(id) FROM client_recipes ORDER BY id DESC LIMIT 1))";
			if(mysqli_query($conn, $sql))
				header("Refresh: 0.3; Url = final.php");
		}
	}
	else{
		echo "<script>
		Swal.fire({
			html: 'Selecione pelo menos um complemento.',
			icon: 'warning',
			focusConfirm: false,
			confirmButtonText: 'Ok',
		}).then((result) =>{
			if(result.value)
				window.location.href = 'complements.php';
		})
		</script>";
	}
?>