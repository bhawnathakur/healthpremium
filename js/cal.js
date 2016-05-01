var percset=false;
function divs()
{$('#first').show();
	$('#second').hide();
$('#third').hide();	
	
}
function divs1()
{
	if($( "#select1" ).val()=="yes")
	{
			$('#first').hide();
	$('#second').hide();
$('#third').show();	
$('#annual_salary_row').hide();
percset=true;
perc=26.5;
	}
	else
	{
		$('#first').hide();
	$('#second').show();
$('#third').hide();
	}
}
function divs2()
{
	if($( "#select2" ).val()=="yes")
	{
	$('#first').hide();
	$('#second').hide();
$('#third').show();
$('#annual_salary_row').hide();
	}
	else
	{
		$('#first').hide();
	$('#second').hide();
$('#third').show();
$('#annual_salary_row').show();
$('#salary_range_row').hide();
	}
	

	
}


setInterval(function () {cal()}, 5000);

	function cal()
{
if(percset==false)
{
annual_salary=parseFloat($('#annual_salary').autoNumeric('get'));


if(annual_salary<20000){ perc=4.50;$('#premium_percent').autoNumeric('set',perc);}
else if(annual_salary >=20000&&annual_salary<25000 ){ perc=5.50; $('#premium_percent').autoNumeric('set',perc);}
else if(annual_salary >=25000&&annual_salary<30000 ){ perc=7.50; $('#premium_percent').autoNumeric('set',perc);}
else if(annual_salary >=30000&&annual_salary<35000 ){ perc=10.50; $('#premium_percent').autoNumeric('set',perc);}
else if(annual_salary >=35000&&annual_salary<40000 ){ perc=11; $('#premium_percent').autoNumeric('set',perc);}
else if(annual_salary >=40000&&annual_salary<45000 ){ perc=12; $('#premium_percent').autoNumeric('set',perc);}
else if(annual_salary >=45000&&annual_salary<50000 ){ perc=14; $('#premium_percent').autoNumeric('set',perc);}
else if(annual_salary >=50000&&annual_salary<55000 ){ perc=20; $('#premium_percent').autoNumeric('set',perc);}
else if(annual_salary >=55000&&annual_salary<60000 ){ perc=23; $('#premium_percent').autoNumeric('set',perc);}
else if(annual_salary >=60000&&annual_salary<65000 ){ perc=27; $('#premium_percent').autoNumeric('set',perc);}
else if(annual_salary >=65000&&annual_salary<70000 ){ perc=29;$('#premium_percent').autoNumeric('set',perc);}
else if(annual_salary >=70000&&annual_salary<75000 ){ perc=32;$('#premium_percent').autoNumeric('set',perc);}
else if(annual_salary >=75000&&annual_salary<80000 ){ perc=33;$('#premium_percent').autoNumeric('set',perc);}
else if(annual_salary >=80000&&annual_salary<95000 ){ perc=34;$('#premium_percent').autoNumeric('set',perc);}
else if(annual_salary >=95000 ){ perc=35;$('#premium_percent').autoNumeric('set',perc);}
else {$('#premium_percent').autoNumeric('set',"");}
}
else
{$('#premium_percent').autoNumeric('set',perc);
}
}

function cal1()
{
	/*
	
	premium=parseFloat($('#premium').autoNumeric('get'));
	paychecks=document.getElementById("paychecks").value;
	realpercentage =perc/100;
contribution = ( (realpercentage) * ( ( premium * 12 ) / (paychecks) ) ).toFixed(2);
	min_contribution = (( ( annual_salary / paychecks ) * 0.015 )).toFixed(2);
	
	if ((contribution*1) > (min_contribution*1) )
	{
document.getElementById( 'health_contribution' ).innerHTML       = '$'+" "+contribution; 
	
	}
else
{
 document.getElementById( 'health_contribution' ).innerHTML       = '$ '+" "+min_contribution; 
	
}
	*/
	
	
}