<?php
	session_start();
	include("connection/database.h.php");
	mysqli_set_charset($conn, "utf8");
	require_once "assets/dompdf/autoload.inc.php";	
	use Dompdf\Dompdf;
	$dompdf = new DOMPDF();
	$sql_2 = "SELECT id, coupon_code 'coupon_code' FROM clients WHERE id = (SELECT LAST_INSERT_ID(id) FROM clients ORDER BY id DESC LIMIT 1)";
	$result_2 = mysqli_query($conn, $sql_2);
	while($row_result_2 = mysqli_fetch_assoc($result_2)){
		$html .= "<article style='height: auto; border-style: dotted; color: #c7c7c7;'>
			<h1 style='color: #5e4429; font-weight: 500; line-height: 1.2; letter-spacing: 2px;'>".$row_result_2['coupon_code']."</h1>
		</article>";
	}
	$dompdf = new Dompdf(array('enable_remote' => true));
	$dompdf->loadHtml('<article style="color: #5e4429; text-align: center; font-family: Arial, Helvetica, sans-serif;">
		<img src="assets/images/coffee.svg" alt="Café" width="72" height="72"/>
		<h1 style="margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; letter-spacing: 2px;">Smart Coffee</h1>
		<small style="font-size: 80%; font-weight: 400;">By Alboom</small>
	<h1>Código do cupom</h1>'. $html .'');
	$dompdf->setPaper('A5', 'landscape');
	$dompdf->render();
	$output = $dompdf->output();
	$dompdf->stream("coupon_code.pdf", array("Attachment" => false));
?>