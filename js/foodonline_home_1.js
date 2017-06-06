(function(){

var addbtn = document.getElementsByClassName("add");
var subbtn = document.getElementsByClassName("sub");
var orderTab=document.getElementById('order-table');
var order={data:[]};
  for(var index=0;index<addbtn.length;index++)
  {    
       addbtn[index].addEventListener("click", function(){
       var price=this.previousElementSibling.innerHTML;
       var stock=this.nextElementSibling.nextElementSibling.innerHTML;
       var count = 1;
       var itemName = this.previousElementSibling.previousElementSibling.innerHTML;
       	var div = "<tr class='order-row' data-count=1 data-name="+itemName+" data-price="+price+"><td>"+itemName+"</td><td><span>1</span><button type='button' class='order-increase-btn'>[+]</button><button type='button' class='order-decrease-btn'>[-]</button></td><td>"+price+"</td><td class='hide'>"+stock+"</td></tr>";
       	orderTab.innerHTML+=div;
  
       	addPlusListeners();
		updateTotal();
     this.classList.add("disable");
     this.nextElementSibling.classList.remove("disable");
              });	

  }

  for(var index=0;index<subbtn.length;index++)
  {    
      subbtn[index].addEventListener("click", function(){
                   
        for(var row=0;row<orderTab.childNodes.length-1;row++){

        if((this.parentElement.childNodes[3].innerHTML)==(orderTab.childNodes[row+1].childNodes[0].innerHTML))
        {
                
              orderTab.childNodes[row+1].childNodes[0].parentElement.remove();
                 updateTotal();

        }}
     this.classList.add("disable");
     this.previousElementSibling.classList.remove("disable");

              }); 
      subbtn[index].classList.add("disable");
  }

 



function addPlusListeners(){
	var btI = document.getElementsByClassName('order-increase-btn');
	var btD = document.getElementsByClassName('order-decrease-btn');

	for(var i=0;i<btI.length;i++){
    //order table decrease button
		btD[i].addEventListener('click',function(){
      var count=this.previousElementSibling.previousElementSibling.innerHTML;
		if((count)>1 )
		   {
			this.previousElementSibling.previousElementSibling.innerHTML=parseInt(this.previousElementSibling.previousElementSibling.innerHTML)-1;
       this.parentNode.nextElementSibling.innerHTML=parseInt(this.parentNode.parentNode.getAttribute('data-price'))*parseInt(this.previousElementSibling.previousElementSibling.innerHTML);
		  this.parentNode.parentNode.setAttribute('data-count',this.previousElementSibling.previousElementSibling.innerHTML);
      updateTotal();
	  }
	  
	  else
	   {   this.parentElement.parentElement.remove();
      updateTotal();
	  }
    })
     // order table increase button
		btI[i].addEventListener('click',function(){
            var stock=this.parentNode.parentNode.childNodes[3].innerHTML;
        
              if((this.previousElementSibling.innerHTML)+1 < stock)
              {
			this.previousElementSibling.innerHTML=parseInt(this.previousElementSibling.innerHTML)+1;
       this.parentNode.nextElementSibling.innerHTML=parseInt(this.parentNode.parentNode.getAttribute('data-price'))*parseInt(this.previousElementSibling.innerHTML);
		  this.parentNode.parentNode.setAttribute('data-count',this.previousElementSibling.innerHTML);
      updateTotal();
    }
    else{alert("Sorry no more order left in stock")}
    });
	}
}

document.getElementById('checkout').addEventListener('click',function(){
     if(orderTab.childNodes.length-1>0)
     { 
var rows = document.getElementsByClassName('order-row');
  for(var i=0;i<rows.length;i++){
  order.data.push({
       		"count":rows[i].getAttribute('data-count'),
       		"price":rows[i].getAttribute('data-price'),
       		"itemName":rows[i].getAttribute('data-name'),
          "stock":"5"
       	});
}
	localStorage.json=JSON.stringify(order);
	console.log(order)
	// event.preventDefault();
	window.location="foodonline_checkout_2.html";
}
else{
  alert("PLEASE SELECT AN ITEM TO CHECKOUT!!");
}

});


function updateTotal(){

  var rows = document.getElementsByClassName('order-row');
  var tot=0,totCount=0;
  for(var i=0;i<rows.length;i++){
    totCount+=parseInt(rows[i].getAttribute('data-count'));
    tot+=parseInt(rows[i].getAttribute('data-price'))*parseInt(rows[i].getAttribute('data-count'));
  }
  document.getElementById('total-count').innerHTML=totCount;
  document.getElementById('total-price').innerHTML=tot;
}

})()