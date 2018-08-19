var CustomerName;
var ProductPrice;
var DeliveryMethod;
var ProductName;

function getName(){
 CustomerName = prompt("what is your name?","");
 if(CustomerName != null)
 {
   alert(CustomerName);
 }
 return CustomerName;
}

function deliverySelectorChange()
{
   alert("Delivery Option selected");
 var divoption = document.getElementById("deliverySelector");
 var chosen = divoption.options[divoption.selectedIndex].value;
 DeliveryMethod = chosen;

 alert("you chose "+DeliveryMethod+ " option");
  return DeliveryMethod;
}
 function confirmOrder(){
  
     var x;
    if (confirm("confirm order the order!") == true) {
        x = "<b>Thank you for your order!!</b>";
    } else {
        x = "<b>Order Cancelled!</b>";
    }
    document.getElementById("orderConfirmationDiv").innerHTML = x;
  
 }
function checkOut()
{
  if(CustomerName == null && DeliveryMethod == null)
 {
   alert("please enter above option");
   
 }
 else if(CustomerName == null)
 {
   getName();
 }
 else if(DeliveryMethod == null){
   deliverySelectorChange();
   
 }
 else 
 {
  alert("Continue with the order");
    
	if(DeliveryMethod == "Post")
	{
	  alert("you ordered with post");
	  ProductPrice = 700 + 100 + (700 * 25/100);
      document.getElementById("checkOutDiv").innerHTML = "<b> Customer Name: </b>" +CustomerName+
	                                                 "\n<b> Ordered Product: </b> E-bussiness 10th edition \n<b> Delivery Method: </b>" +DeliveryMethod+
													 "\n<b> Total Order price: </b> R" +ProductPrice;
	 confirmOrder();
	} 
	else if(DeliveryMethod == "Door to Door")
	{
	   alert("ordered with door to door");
	   ProductPrice = 700 + 150 + (700 * 40/100);
	   document.getElementById("checkOutDiv").innerHTML = "<b> Customer Name: </b>" +CustomerName+
	                                                 "\n<b> Ordered Product: </b> E-bussiness 10th edition \n<b> Delivery Method: </b>" +DeliveryMethod+
													 "\n<b> Total Order price: </b> R" +ProductPrice;
		confirmOrder();											 
	     
	  
	} 
	else 
	{
	   alert("you choose to come to our office");
	   ProductPrice = 700;
	   document.getElementById("checkOutDiv").innerHTML = "<b> Customer Name: </b>" +CustomerName+
	                                                 "\n<b> Ordered Product: </b> E-bussiness 10th edition \n<b> Delivery Method: </b>" +DeliveryMethod+
													 "\n<b> Total Order price: </b> R" +ProductPrice;
													 
	confirmOrder();												 
	}
  }
 }
 
 
 