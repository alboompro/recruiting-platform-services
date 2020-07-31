<?php
	if(!isset($_SESSION))
		session_start();
	include("connection/database.h.php");
	mysqli_set_charset($conn, "utf8");
?>
<!doctype html>
<html lang="pt-BR">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<link href="assets/css/bootstrap.css" rel="stylesheet">
		<script src="https://kit.fontawesome.com/a076d05399.js"></script>
		<link rel="icon" href="assets/images/favicon.ico" type="image/x-icon">
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<title>Complementos</title>
	</head>
	
	<body class="bg-light col-12 col-sm-6 col-lg-8 offset-md-3">
		<form action="complements_register.php" method="POST">
			<article class="container py-5 my-5">
				<article class="row">
					<article class="col-md-8 mx-auto">
						<article class="card">
							<article class="card-header">
								<article class="row justify-content-center">
									<article class="pl-5 pr-5 pt-2 text-center">					
										<img class="mb-4" src="assets/images/coffee.svg" alt="Café" width="80" height="80">
									</article>
									<article class="col-6 text-center">
										<h1 class="p1">Smart Coffee</h1>
										<small>By Alboom</small>
									</article>
								</article>
								<hr class="hrn">
								<?php						
									$sql_1 = "SELECT DISTINCT r.id 'id', r.name 'name', r.photo 'photo', TIME_FORMAT(SEC_TO_TIME(SUM(i.preparation_time)), '%i:%s') 'time' FROM client_recipes cr INNER JOIN recipe_ingredients ri ON cr.recipe_id = ri.recipe_id INNER JOIN recipes r ON r.id = ri.recipe_id INNER JOIN ingredients i ON i.id = ri.ingredient_id WHERE cr.client_id = (SELECT LAST_INSERT_ID(cl.id) FROM clients cl ORDER BY cl.id DESC LIMIT 1) GROUP BY r.id";
									$result_1 = mysqli_query($conn, $sql_1);
									while($row_result_1 = mysqli_fetch_assoc($result_1)){
										echo "<article class='container'>
											<article class='row'>
												<article class='media my-4'>
													<img src=assets/".$row_result_1['photo']." alt=".$row_result_1['name']." width='50' height='50'>
														<article class='media-body'>
															<p>".$row_result_1['name']."</p>
															<i class='fas fa-stopwatch' style='color: #5e4429;'></i>
															<small class='mt-2'>".$row_result_1['time']."</small>";
															$sql_2 = "SELECT DISTINCT i.id 'id', i.name 'name', i.photo 'photo', TIME_FORMAT(SEC_TO_TIME(i.preparation_time), '%i:%s') 'time' FROM complements c INNER JOIN ingredients i ON i.id = c.ingredient_id INNER JOIN recipes r ON r.id = c.recipe_id INNER JOIN client_recipes cr ON r.id = cr.recipe_id WHERE cr.client_id = (SELECT LAST_INSERT_ID(cl.id) FROM clients cl ORDER BY cl.id DESC LIMIT 1)";
															$result_2 = mysqli_query($conn, $sql_2);
															while($row_result_2 = mysqli_fetch_assoc($result_2)){	
															echo"<article class='media my-2'>
																	<img src=assets/".$row_result_2['photo']." alt=".$row_result_2['name']." width='50' height='50'>
																	<article class='media-body'>
																		<p>".$row_result_2['name']."</p>
																		<i class='fas fa-stopwatch' style='color: #5e4429;'></i>
																		<small>".$row_result_2['time']."</small>
																	</article>												
																	<article class='form-check col-2'>
																		<input type='checkbox' name='check[]' class='input_class_checkbox' id='image' value=".$row_result_2['id']."/>						
																	</article>
																</article>";
															}
												echo "</article>
													</article>
												</article>
											</article>
											<hr class='hrn'>";
										}
								?>
								<article class="container">
									<article class="row col-md-12 justify-content-center align-items-center">
										<article>
											<a href="products.php" class="btn btn-danger my-4 mx-3 text-uppercase" title="Voltar">Voltar</a>
										</article>
										<article>
											<button type="submit" name="submit" class="btn btn-success my-4 mx-3 text-uppercase">Finalizar</button>
										</article>
									</article>
								</article>
							</article>
						</article>
					</article>
				</article>
			</article>
		</form>
	</body>
	
	<script>
		$('.input_class_checkbox').each(function(){
			$(this).hide().after('<article class="class_checkbox"/>');
		});
		$('.class_checkbox').on('click',function(){
			$(this).toggleClass('checked').prev().prop('checked', $(this).is('.checked'))
		});
	</script>
</html>