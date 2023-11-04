document.getElementById("btns").addEventListener("click",()=>{
  
  let numb1 = document.querySelector(".num1").value;
  let numb2 = document.querySelector(".num2").value;
  let rest = document.querySelector(".result");
  let operator = document.getElementById("calc").value;
  
  switch (operator){
    case "add":
      rest.innerHTML = Number(numb1) + Number(numb2); 
      break;
    case "sub":
      rest.innerHTML = Number(numb1) - Number(numb2);
      break;
    case "mul":
      rest.innerHTML = Number(numb1) * Number(numb2);
      break;
    case "div":
      rest.innerHTML = Number(numb1) / Number(numb2);
  }
});
