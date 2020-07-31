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
		<title>Home</title>
	</head>
	
	<body class="bg-light col-12 col-sm-6 col-lg-8 offset-md-3">
		<form action="register.php" method="POST">
			<article class="container py-5 my-5">
				<article class="row">
					<article class="col-md-8 mx-auto">
						<article class="card">
							<article class="card-header">
								<article class="pl-5 pr-5 pt-2 text-center">					
									<img class="mb-4" src="assets/images/coffee.svg" alt="Café" width="80" height="80">
								</article>
								<article class="container">
									<article class="row">
										<article class="col-md-12">
											<article class="input-group mb-2 mr-sm-2">
												<article class="input-group-prepend">
													<article class="input-group-text">
														<i class="fas fa-user"></i>
													</article>
												</article>
												<input type="text" class="form-control" name="name" placeholder="Nome completo" required autofocus>
											</article>
											<article class="input-group mb-2 mr-sm-2">
												<article class="input-group-prepend">
													<article class="input-group-text">
														<i class="fas fa-envelope"></i>
													</article>
												</article>
												<input type="email" class="form-control" name="email" placeholder="E-mail" required>
											</article>
										</article>
									</article>
								</article>
								<article class="container col-md-10">
									<article class="row justify-content-end align-items-end">
										<article class="justify-content-center">
											<button type="submit" name="submit" class="btn btn-primary my-4 mx-3 text-uppercase">Cadastrar</button>
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
</html>