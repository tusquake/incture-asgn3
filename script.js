let name = '';
let lastClicked;

function happy_sad() {
  name = prompt('What is your name?');
  if (name) {
    document.getElementById('greeting').innerText = `Hello, ${name}! \n Order Donuts at just 5$`;
    lastClicked = new Date().getTime();
     document.getElementById('cat_happy').style.display = 'block';
  document.getElementById('cat_sad').style.display = 'none';
  }
}

function calculate(event) {
  event.preventDefault();
  const customername = document.getElementById('name').value;
  const cake = document.getElementById('cake').value;
  const baked = document.getElementById('baked').value;
  const minutes = document.getElementById('minutes').value;
  console.log(cake)
  console.log(baked)
  console.log(minutes)

  // Perform validations

  if (!validateInput(minutes)) {
    alert('Enter valid numeric values minutes');
    return;
  }

  // Convert 'dozen' to 12
  const dozen = 12;
  const cakeCount = parseDonutInput(cake);
  console.log(cakeCount)
  const bakedCount = parseDonutInput(baked);
  console.log(bakedCount)
  const minutesCount = parseInt(minutes);

  const donutPrice = 5; 
  const taxRate = 0.1; 

  const subtotal = (cakeCount + bakedCount) * donutPrice;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  document.getElementById('subtotal').value = subtotal.toFixed(2)+" $";
  document.getElementById('tax').value = tax.toFixed(2);
  document.getElementById('total').value = total.toFixed(2)+" $";
  alert(`Thank you for placing the order ${customername} wait for ${minutesCount} minutes your order will be prepared on time! and your total will be displayed on screen`);
  document.getElementById('greeting').innerText = `Thank You for placing the order, ${customername}!`;
}

function validateInput(value) {
  return !isNaN(value) && value.trim() !== '';
}

function parseDonutInput(input) {
  const dozen = 12;

  const regex = /^(\d+)\s*dozen$/i;
  const match = input.match(regex);

  if (match) {
    const numericValue = parseInt(match[1]);
    return isNaN(numericValue) ? 0 : numericValue * dozen;
  }

  return parseInt(input) || 0;
}

// Check for inactivity every 5 minutes
setInterval(function() {
  const currentTime = new Date().getTime();
  const timeDifference = (currentTime - lastClicked) / 1000; // in seconds
  if (timeDifference > 5) {
    document.getElementById('cat_happy').style.display = 'none';
  document.getElementById('cat_sad').style.display = 'block';
  document.getElementById('greeting').innerText = 'Please Order!'
  }
}, 1000);
