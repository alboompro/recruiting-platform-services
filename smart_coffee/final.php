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
		<link href="//www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css">
		<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
		<link rel="stylesheet" type="text/css" href="assets/css/firecircle.css">
		<script type="text/javascript" src="assets/js/circle.js"></script>
		<title>Tempo</title>
	</head>
	
	<body class="bg-light col-12 col-sm-6 col-lg-8 offset-md-3" onLoad="time()">
		<form action="#" method="POST">
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
								<article class="container col-md-12 mt-3">
									<article class="row text-center">
										<h2 class="p1">Pedido realizado com sucesso!</h2>
									</article>
									<article class="row justify-content-center">
										<article class="page">
											<article class="circles-container">
												<article class="circlebar" data-circle-dialWidth=15 data-circle-size="200px">
													<article class="loader-bg">
														<article id="spanTime"></article>
													</article>
												</article>
											</article>
										</article>
									</article>
								</article>
								<article class="container col-md-12 mt-3 offset-md-2">
									<article class="row justify-content-center align-items-center borders">
										<?php
											$sql_2 = "SELECT id, coupon_code 'coupon_code' FROM clients WHERE id = (SELECT LAST_INSERT_ID(id) FROM clients ORDER BY id DESC LIMIT 1)";
											$result_2 = mysqli_query($conn, $sql_2);
											while($row_result_2 = mysqli_fetch_assoc($result_2)){
												echo "<h1 class='p1 mt-2'>".$row_result_2['coupon_code']."</h1>";
											}
										?>
									</article>
								</article>
								<article class="container">
									<article class="row col-md-12 justify-content-center align-items-center">
										<article>
											<a href="return_index.php" class="btn btn-redo my-4 text-uppercase" title="Voltar">
												<i class="fas fa-redo"></i>
											</a>
										</article>
										<article>
											<a href="coupon_code.php" class="btn btn-primary my-4 text-uppercase" title="Imprimir cupom">Imprimir cupom</a>
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
		var min = <?php			
						$sql_1 = "SELECT r.id, r.name 'name', r.photo 'photo', TIME_FORMAT(SEC_TO_TIME(SUM(i.preparation_time)), '%i') 'time' FROM recipe_ingredients ri INNER JOIN recipes r ON r.id = ri.recipe_id INNER JOIN ingredients i ON i.id = ri.ingredient_id INNER JOIN client_recipes cr ON r.id = cr.recipe_id WHERE cr.client_id = (SELECT LAST_INSERT_ID(c.id) FROM clients c ORDER BY c.id DESC LIMIT 1)";
						$result_1 = mysqli_query($conn, $sql_1);
						while($row_result_1 = mysqli_fetch_array($result_1)){
							echo "".$row_result_1['time']."";
						}
					?>;
		var seg = <?php
						$sql_2 = "SELECT r.id, r.name 'name', r.photo 'photo', TIME_FORMAT(SEC_TO_TIME(SUM(i.preparation_time)), '%s') 'time' FROM recipe_ingredients ri INNER JOIN recipes r ON r.id = ri.recipe_id INNER JOIN ingredients i ON i.id = ri.ingredient_id INNER JOIN client_recipes cr ON r.id = cr.recipe_id WHERE cr.client_id = (SELECT LAST_INSERT_ID(c.id) FROM clients c ORDER BY c.id DESC LIMIT 1)";
						$result_2 = mysqli_query($conn, $sql_2);
						while($row_result_2 = mysqli_fetch_array($result_2)){
							echo "".$row_result_2['time']."";
						}
					?>;
		function time(){			
			if((min > 0) || (seg > 0)){				
				if(seg == 0){					
					seg = 59;				
					min = min - 1;
				}
				else
					seg = seg - 1;
				if(min.toString().length == 1)
					min = "0" + min;
				if(seg.toString().length == 1)
					seg = "0" + seg;
				document.getElementById('spanTime').innerHTML = min + ":" + seg + " min<br>" + "<small>tempo restante para ficar pronto</small>";
				setTimeout('time()', 1000);
			}
			else			
				document.getElementById('spanTime').innerHTML = "00:00 min";
		}
	</script>
</html>