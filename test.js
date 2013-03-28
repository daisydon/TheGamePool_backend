function user_add_coins(coins){
  var xmlhttp;
	
	var gid=document.getElementById('hiddengid').value;
	var enckey=document.getElementById('enckey').value;
	enckey = encodeURIComponent(enckey);
	
	if(window.XMLHttpRequest)
		{
			xmlhttp = new XMLHttpRequest();
		}
		else
		{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
				
		xmlhttp.onreadystatechange = function()
		{
			
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
			{
				$( "#add_coins" ).dialog();
				setTimeout(function(){$( "#add_coins" ).dialog("close");}, 2000);
				//alert(coins+" Coins added!");
				alert(xmlhttp.responseText);
			}
		}
		
				
		xmlhttp.open("GET", "./backend/add_coins.php?coins="+coins+"&enckey="+enckey, true);
		xmlhttp.send();
}

function user_add_exp(exp){          
		var xmlhttp;
		var gid=document.getElementById('hiddengid').value;
		var enckey=document.getElementById('enckey').value;
		enckey = encodeURIComponent(enckey);
		
	if(window.XMLHttpRequest)
		{
			xmlhttp = new XMLHttpRequest();
		}
		else
		{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
				
		xmlhttp.onreadystatechange = function()
		{
			
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
			{
				$( "#add_exp" ).dialog();
				setTimeout(function(){$( "#add_exp" ).dialog("close");}, 2000);
				alert(exp+" Exp added!");
			}
		}
		
				
		xmlhttp.open("GET", "./backend/add_exp.php?exp="+exp+"&enckey="+enckey, true);
		xmlhttp.send();
}

function user_complete_mission(mission_num){
	
		var xmlhttp;
		
		var gid=document.getElementById('hiddengid').value;
		var enckey=document.getElementById('enckey').value;
		enckey=encodeURIComponent(enckey);

	if(window.XMLHttpRequest)
		{
			xmlhttp = new XMLHttpRequest();
		}
		else
		{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
				
		xmlhttp.onreadystatechange = function()
		{
			
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
			{
				
				alert("Mission "+mission_num+" complete!");
				//+xmlhttp.responseText
			}
		}
		
				
		xmlhttp.open("GET", "./backend/complete_mission.php?num="+mission_num+"&gid="+gid+"&enckey="+enckey, true);
		xmlhttp.send();
	
}

function user_update_mission(mission_num, detail){   
	var xmlhttp;
		
	var gid=document.getElementById('hiddengid').value;
	var enckey = document.getElementById('enckey').value;
	enckey = encodeURIComponent(enckey);
	if(window.XMLHttpRequest)
		{
			xmlhttp = new XMLHttpRequest();
		}
		else
		{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
				
		xmlhttp.onreadystatechange = function()
		{
			
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
			{
				alert("Mission Updated"+xmlhttp.responseText);
			}
		}
		
				
		xmlhttp.open("GET", "./backend/update_mission.php?gid="+gid+"&num="+mission_num+"&detail="+detail+"&enckey="+enckey, true);
		xmlhttp.send();		
}

function user_get_mission_data(){ 
	var xmlhttp;
		
	var gid=document.getElementById('hiddengid').value;
	var enckey = document.getElementById('enckey').value;
	enckey = encodeURIComponent(enckey);
	
	if(window.XMLHttpRequest)
		{
			xmlhttp = new XMLHttpRequest();
		}
		else
		{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
				
		xmlhttp.onreadystatechange = function()
		{
			
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
			{
				
				alert("Mission data added");
			}
		}
		
				
		xmlhttp.open("GET", "./backend/mission_data_new.php?gid="+gid+"&enckey="+enckey, true);
		xmlhttp.send();
	
}

function user_buy_item(coins, mission_num, giid) {
	var xmlhttp;
	var enckey=document.getElementById('enckey').value;
	enckey = encodeURIComponent(enckey);
	
	if(window.XMLHttpRequest)
		{
			xmlhttp = new XMLHttpRequest();
		}
		else
		{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
				
		xmlhttp.onreadystatechange = function()
		{
			
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
			{
				alert(xmlhttp.responseText);
			}
		}		
		xmlhttp.open("GET", "./backend/user_buy_item.php?coins="+coins+"&mission_num="+mission_num+"&giid="+giid+"&enckey="+enckey, true);
		xmlhttp.send();
}

function developer_add_storeitem(coins,mission_num,name,path){
	var xmlhttp;
		
	var gid=document.getElementById('hiddengid').value;	
	var enckey=document.getElementById('enckey').value;
	enckey = encodeURIComponent(enckey);
		
		if(window.XMLHttpRequest)
			{
				xmlhttp = new XMLHttpRequest();
			}
			else
			{
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
					
			xmlhttp.onreadystatechange = function()
			{
				
				if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
				{
					alert(xmlhttp.responseText);
				}
			}
			//this is where you change the path to the php file you want to go to.		
			xmlhttp.open("GET", "./backend/add_store_item.php?gid="+gid+"&coins="+coins+"&name="+name+"&mission_num="+mission_num+"&path="+path+"&enckey="+enckey, true);
			xmlhttp.send();
	}
	
function developer_add_mission(name, fields, num){
	var xmlhttp;
			
	var gid=document.getElementById('hiddengid').value;	
	var enckey=document.getElementById('enckey').value;
	enckey = encodeURIComponent(enckey);
	
	if(window.XMLHttpRequest)
		{
			xmlhttp = new XMLHttpRequest();
		}
		else
		{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
				
		xmlhttp.onreadystatechange = function()
		{
			
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
			{
				
				alert(xmlhttp.responseText);
			}
		}
		
				
		xmlhttp.open("GET", "./backend/add_mission.php?name="+name+"&fields="+fields+"&gid="+gid+"&num="+num+"&enckey="+enckey, true);
		xmlhttp.send();
	
}

	
function user_forgot_password(type){
	var xmlhttp;
	var emailFilter= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var email=document.getElementById('forgotpasswordemail').value;
	
	if(emailFilter.test(email)){
     	email=encodeURIComponent(email);
     if(window.XMLHttpRequest)
		{
			xmlhttp = new XMLHttpRequest();
		}
		else
		{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
				
		xmlhttp.onreadystatechange = function()
		{
			
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
			{
				if(type==1){
					alert("New Password Sent!");
					$.colorbox.close();	
					window.location = "http://www.thegamepool.com/";
				}else if(type==2){
						document.getElementById('submit').innerHTML="<h1>New password sent!</h1>"+
						"<br><h3>Refresh the page to be logged in!</h3>";

				}
				
			}
		}

	xmlhttp.open("GET","./backend/forgot_password.php?email="+email,true);
	xmlhttp.send();	
	}
	
	else{
		alert("Please enter valid email address!");
	} 	
}

function user_reset_password(type){
	
	var xmlhttp;
	var emailFilter= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var email=document.getElementById('email').value;
	var tempasswd=document.getElementById('tempass').value;
	var newpasswd=document.getElementById('password').value;
	
	if (emailFilter.test(email)) {
		email=encodeURIComponent(email);
		tempasswd=encodeURIComponent(tempasswd);
		newpasswd=encodeURIComponent(newpasswd);
		if(window.XMLHttpRequest){
			xmlhttp=new XMLHttpRequest();
		
		}
		else{
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange =function()
		{
			if (xmlhttp.readyState ==4 && xmlhttp.status=200) {
				if (type==1){
					alert("Reset Password Successfully!");
					$.colorbox.close();
					window.location="http://www.thegamepool.com/";
				}else if(type==2){
					document.getElementById('submit').innerHTML="<h1>Reset Password Successfully</h1>"+"<br><h3>Refresh page to log in!</h3>";
				 }
			 }
		}
		xmlhttp.open("GET","./backend/reset_password.php?email="+email+"&tempasswd="+tempasswd+"&newpasswd"+newpasswd,true);
		xmlhttp.send();
		
	} else{
	 alert("Please enter valid email address!");	
	}	
}


















