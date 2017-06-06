(function(){
	var data=JSON.parse(localStorage.json).data;

	for(var i=0;i<data.length;i++){
       var parent = document.getElementById('order-table');
       var itemName=data[i].itemName;
       var count = data[i].count;
       var price = data[i].price;
       var div = "<tr class='order-row'><td>"+itemName+"</td><td><span>"+count+"</span><button type='button' class='order-increase-btn'>[+]</button><button type='button' class='order-decrease-btn'>[-]</button></td><td>"+parseInt(price)*parseInt(count)+"</td></tr>";
       	parent.innerHTML+=div;
       	addPlusListeners();
       	 updateTotal();
	}
	function addPlusListeners(){
	var btI = document.getElementsByClassName('order-increase-btn');
	var btD = document.getElementsByClassName('order-decrease-btn');

	for(var i=0;i<btI.length;i++){
		
		btD[i].addEventListener('click',function(){
			  
			  if(this.previousElementSibling.previousElementSibling.innerHTML>1){
			 var priceAmt=this.parentNode.nextElementSibling
			var amt=parseInt(priceAmt.innerHTML);
			var actualprice=amt/parseInt(this.previousElementSibling.previousElementSibling.innerHTML);	
			amt=(amt)-(actualprice);
		      priceAmt.innerHTML=amt;
			this.previousElementSibling.previousElementSibling.innerHTML=parseInt(this.previousElementSibling.previousElementSibling.innerHTML)-1;
	       updateTotal();
	}
	       else{alert("ITEM CANNOT BE LESS THAN 1")}
		})

		btI[i].addEventListener('click',function(){
             var priceAmt=this.parentNode.nextElementSibling
			var amt=parseInt(priceAmt.innerHTML);
			var actualprice=amt/parseInt(this.previousElementSibling.innerHTML);	
			amt=(amt)+ (actualprice);
			this.previousElementSibling.innerHTML=parseInt(this.previousElementSibling.innerHTML)+1; 
			 priceAmt.innerHTML=amt;
			 updateTotal(this);

		});
	}
}
document.getElementById('confirm').addEventListener('click',function(){

	localStorage.firstName=document.getElementById('fn').value;
	localStorage.lastName=document.getElementById('ln').value;
	localStorage.ad1=document.getElementById('ad1').value;
	localStorage.ad2=document.getElementById('ad2').value;
	localStorage.phone=document.getElementById('phone').value;
	localStorage.city=document.getElementById('city').value;
	localStorage.state=document.getElementById('state').value;
	localStorage.pin=document.getElementById('pin').value;
	localStorage.sum=document.getElementById('total-price').innerHTML;
	

     
	
})

function updateTotal(event){

  var rows = document.getElementsByClassName('order-row');
  var tot=0,totCount=0;
  for(var i=0;i<rows.length;i++){
     totCount+=parseInt(rows[i].childNodes[1].childNodes[0].innerHTML);
      tot+=parseInt(rows[i].childNodes[2].innerHTML);
  }
  document.getElementById('total-count').innerHTML=totCount;
  document.getElementById('total-price').innerHTML=tot;
  localStorage.sum=document.getElementById('total-price').innerHTML;
}

})()

