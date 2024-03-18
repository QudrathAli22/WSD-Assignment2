function words() {
    const is = document.getElementById("Ip").value;
    let vowels = "aeiou";
    let vowelCount = 0;
    let consonantCount = 0;
  
    for (let i = 0; i < is.length; i++) {
      if (vowels.includes(is[i].toLowerCase())) {
        vowelCount++;
      } 
      else {
        consonantCount++;
      }
    }
  
    document.getElementById("result").innerHTML = `Vowels are ${vowelCount}, Consonants are ${consonantCount}`;
  }
  const inputString = document.getElementById('Ip');
  inputString.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      words();
    }
});

  function palin(){
    let x = document.getElementById("number").value;
    let y = 0;
  let xStr = x.toString();
let yStr = '';
for (let i = xStr.length - 1; i >= 0; i--) {
  yStr += xStr[i];
}
y = parseInt(yStr);

  if(x==y){
    document.getElementById("results").innerHTML = "It's a Palindrome";
  }
  else{
    document.getElementById("results").innerHTML = "It's not a Palindrome";
  }
}
const inputnumber = document.getElementById('number');
inputnumber.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      palin();
    }
})

function calculateTotal() {
  const subtotal = parseFloat(document.getElementById('subtotal').value);
  let tipPercentage = parseFloat(document.getElementById('tip').value);

  if (subtotal) {
      tipPercentage = tipPercentage ? tipPercentage : 0;
      const tipAmount = (subtotal * tipPercentage) / 100;
      const totalAmount = subtotal + tipAmount;

      document.getElementById('totalResult').textContent = `Total Amount (including ${tipPercentage}% tip): $${totalAmount.toFixed(2)}`;
  }
  else {
      document.getElementById('totalResult').textContent =` Please Enter valid subtotal amount!`;
  }
}