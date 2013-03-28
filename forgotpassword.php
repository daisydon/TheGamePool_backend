<?php
require_once('config.php');
session_start();

$email=mysql_real_escape_string(decodeJS($_POST['forgotpassword']));

mysql_query("START TRANSACTOIN");

//This functions checks and makes sure the email address that is being added to database is valid in format. 
function check_email_address($email) {
  // First, we check that there's one @ symbol, and that the lengths are right
  if (!ereg("^[^@]{1,64}@[^@]{1,255}$", $email)) {
    // Email invalid because wrong number of characters in one section, or wrong number of @ symbols.
    return false;
  }
  // Split it into sections to make life easier
  $email_array = explode("@", $email);
  $local_array = explode(".", $email_array[0]);
  for ($i = 0; $i < sizeof($local_array); $i++) {
     if (!ereg("^(([A-Za-z0-9!#$%&'*+/=?^_`{|}~-][A-Za-z0-9!#$%&'*+/=?^_`{|}~\.-]{0,63})|(\"[^(\\|\")]{0,62}\"))$", $local_array[$i])) {
      return false;
    }
  }  
  if (!ereg("^\[?[0-9\.]+\]?$", $email_array[1])) { // Check if domain is IP. If not, it should be valid domain name
    $domain_array = explode(".", $email_array[1]);
    if (sizeof($domain_array) < 2) {
        return false; // Not enough parts to domain
    }
    for ($i = 0; $i < sizeof($domain_array); $i++) {
      if (!ereg("^(([A-Za-z0-9][A-Za-z0-9-]{0,61}[A-Za-z0-9])|([A-Za-z0-9]+))$", $domain_array[$i])) {
        return false;
      }
    }
  }
  return true;
}


if (isset($_POST['submit'])) {
   //Make sure it's a valid email address, last thing we want is some sort of exploit!
  if (!check_email_address($email)) {
    	echo"Email Not Valid - Must be in format of name@domain.tld";
	}		
	//check if the email address is valid
   //echo $email;
   $a=mysql_query("SELECT * FROM user WHERE email='$email' LIMIT 1");
  if (mysql_num_rows($a)!=1) {
	echo "Email Not Found!";
 } 
 else{ 
	$random_password=md5(uniqid(rand()));
	$email_password=substr($random_password, 0,8);
	$new_password=base64_encode($email_password);
	
	$query=sprintf("UPDATE user SET pass='$new_password'
	 WHERE email='$email'");
	 
	 mysql_query($query);
	// $uid=mysql_insert_id();
	 
	 $_SESSION['uid']=$uid;
	 $_SESSION['email']=$email;
	 $_SESSION['new_password']=$new_password;
	 
	 //secure E-mail 
  if (isset($_POST['forgotpassword']))    //if "email" is filled out, send email
  {
 
  //Email Information
  $subject = "Your New Password";
  $site_name="TheGamePool";
  $site_email="info@thegamepool.com";
  $message = "Your new password is as follows:

----------------------------
Password: ".$email_password."
----------------------------
Please make note this information has been encrypted into our database 

Click on the link below to reset your password:
http://www.thegamepool.com/nextv/indexDaisy.php
 
This email was automatically generated."; 

   if(!mail($email, $subject, $message,  "FROM: $site_name <$site_email>")){ 
             die ("Sending Email Failed, Please Contact Site Admin! ($site_email)"); 
          }
    else{ 
                echo('New Password Sent!.');
         } 
    }
   }
}
else {
?>
<form name="forgotpasswordform" action="./backend/forgot_password.php" method="post">
<table border="0" cellspacing="0" cellpadding="3" width="100%">
<caption>
<div>Forgot Password</div>
</caption>
<tr>
<td>Email Address:</td>
<td><input name="forgotpassword" type="text"  value="" id="forgotpassword" /></td>
</tr>
<tr>
<td colspan="2" class="footer"><input type="submit" name="submit" value="Submit" class="mainoption" /></td>
</tr>
</table>
</form>
<?
}
?>
