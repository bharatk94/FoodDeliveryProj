(function(){
	var phone=localStorage.phone;
	var firstName=localStorage.firstName;
	var lastName=localStorage.lastName;
	var ad1=localStorage.ad1;
	var ad2=localStorage.ad2;
	var city=localStorage.city;
	var pin=localStorage.pin;
	var state=localStorage.state;
	var sum=localStorage.sum;
    
	document.getElementById('name').innerHTML=firstName+' '+lastName;
	document.getElementById('ad1').innerHTML=ad1;
	document.getElementById('ad2').innerHTML=ad2;
	document.getElementById('total').innerHTML=total;
	document.getElementById('city').innerHTML=city;
	document.getElementById('state').innerHTML=state;
	document.getElementById('pin').innerHTML=pin;
	document.getElementById('phone').innerHTML=phone;
    document.getElementById('idNo').innerHTML=Math.random().toString(30).slice(9);
    document.getElementById('total').innerHTML=sum;


    document.getElementById('clearlocal').addEventListener('click', function(){

     localStorage.clear();

    });


})()