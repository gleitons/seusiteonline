<?php	
	if (empty($_POST['name_21821']) && strlen($_POST['name_21821']) == 0 || empty($_POST['e_mail_21821']) && strlen($_POST['e_mail_21821']) == 0 || empty($_POST['soma_21821']) && strlen($_POST['soma_21821']) == 0)
	{
		return false;
	}
	
	$name_21821 = $_POST['name_21821'];
	$e_mail_21821 = $_POST['e_mail_21821'];
	$ = $_POST[''];
	$telefone_21821 = $_POST['telefone_21821'];
	$select_1299 = $_POST['select_1299'];
	$soma_21821 = $_POST['soma_21821'];
	$concorda_em_receber_comunicados_21821 = $_POST['concorda_em_receber_comunicados_21821'];
	
	$to = 'receiver@yoursite.com'; // Email submissions are sent to this email

	// Create email	
	$email_subject = "Message from a Blocs website.";
	$email_body = "You have received a new message. \n\n".
				  "Name_21821: $name_21821 \nE_Mail_21821: $e_mail_21821 \n: $ \nTelefone_21821: $telefone_21821 \nSelect_1299: $select_1299 \nSoma_21821: $soma_21821 \nConcorda_Em_Receber_Comunicados_21821: $concorda_em_receber_comunicados_21821 \n";
	$headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=UTF-8\r\n";	
	$headers .= "From: contact@yoursite.com\n";
	$headers .= "Reply-To: $e_mail_21821";	
	
	mail($to,$email_subject,$email_body,$headers); // Post message
	return true;			
?>