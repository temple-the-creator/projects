let result =[0];

const buttons = document.querySelectorAll('.js-btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;
    const value = button.dataset.value;
    if( action === 'delete'){
      if (result.length === 1){
        result = [0]
      }else if (result.length > 1){
        result.pop()}
    }
    if( action === 'clear'){
      result = [0]
    }
    if( action === 'percent'){
      if(result[0] === 0 && result.length === 1){
        result.pop();
        result.push('%');
      }else{
        result.push('%');
      }
    }
    if( action === "divide"){
      if(result[0] === 0 && result.length === 1){
        result.pop();
        result.push('÷');
      }else{
        result.push('÷');
      }
    }
    if( value === "7"){
      if(result[0] === 0 && result.length === 1){
        result.pop();
        result.push('7');
      }else{
        result.push('7');
      }
    }
    if( value === "8"){
      if(result[0] === 0 && result.length === 1){
        result.pop();
        result.push('8');
      }else{
        result.push('8');
      }
    }
    if( value === "9"){
      if(result[0] === 0 && result.length === 1){
        result.pop();
        result.push('9');
      }else{
        result.push('9');
      }
    }
    if( action === "multiply"){
      if(result[0] === 0 && result.length === 1){
        result.pop();
        result.push('x');
      }else{
        result.push('x');
      }
    }
    if( value === "4"){
      if(result[0] === 0 && result.length === 1){
        result.pop();
        result.push('4');
      }else{
        result.push('4');
      }
    }
    if( value === "5"){
      if(result[0] === 0 && result.length === 1){
        result.pop();
        result.push('5');
      }else{
        result.push('5');
      }
    }
    if( value === "6"){
      if(result[0] === 0 && result.length === 1){
        result.pop();
        result.push('6');
      }else{
        result.push('6');
      }
    }
    if( action === "subtract"){
     if(result[0] === 0 && result.length === 1){
        result.pop();
        result.push('-');
      }else{
        result.push('-');
      }
    }
    if( value === "1"){
      if(result[0] === 0 && result.length === 1){
        result.pop();
        result.push('1');
      }else{
        result.push('1');
      }
    }
    if( value === "2"){
      if(result[0] === 0 && result.length === 1){
        result.pop();
        result.push('2');
      }else{
        result.push('2');
      }
    }
    if( value === "3"){
      if(result[0] === 0 && result.length === 1){
        result.pop();
        result.push('3');
      }else{
        result.push('3');
      }
    }
    if( action === "add"){
      if(result[0] === 0 && result.length === 1){
        result.pop();
        result.push('+');
      }else{
        result.push('+');
      }
    }
    if( action === "/"){
      if(result[0] === 0 && result.length === 1){
        result.pop();
        result.push('/');
      }else{
        result.push('/');
      }
    }
    if( value === "0"){
      if(result[0] === 0 && result.length === 1){
        result = [0]
      }else{
        result.push("0");
      }
    }
    if( value === "."){
        result.push(".");
    }
    
    if( action === "equals"){
       const total = calculateExpression();
       result = [];
       result.push(total);
    }
     
    console.log(result)
    document.querySelector('.result').innerHTML = result.join("");
    
  })
});

function calculateExpression () {
  const operators =['÷','x','-','+','/']
  let numbers = [];
  let ops = [];
  let currentNumber = '';

  //check for numbers and operators and save them in new arrays
  result.forEach((char) => {
    if(operators.includes(char)){
      numbers.push(parseFloat(currentNumber));
      ops.push(char);
      currentNumber = '';
    }else {
      currentNumber += char;
    }
  });

  numbers.push(parseFloat(currentNumber));

  //loops through ops array and does the math between the values in the number array
  let total = numbers[0];
  
  for (let i = 0; i < ops.length; i++) {
    switch (ops[i]) {
      case '+': total += numbers[i + 1]; break;
      case '-': total -= numbers[i + 1]; break;
      case 'x': total *= numbers[i + 1]; break;
      case '/': total /= numbers[i + 1]; break;
      case '%': total %= numbers[i + 1]; break;
      case '÷': total /= numbers[i + 1]; break;
    }
  }
  return total;
}





