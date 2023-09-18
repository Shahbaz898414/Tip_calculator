

// console.log(bill.value);

// console.log(per.value);








function calculateTip() {
  const bill=document.querySelector('.bill').value;
  const per=document.querySelector('.Percentage').value;

  if (bill === "" || per == "") {
    alert("Please enter values");
    return;
  }


  let g=(bill/per)*2;

  let total=g+Number(bill);

  // console.log(total);
  document.getElementById("result").innerHTML = `Your Total Bill is: ${total}`;



}




document.getElementById("cal").onclick = function() {
  calculateTip();
};



