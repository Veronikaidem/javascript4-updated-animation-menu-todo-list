let navbar = document.getElementById('navigation');
let burgerBar = document.getElementById('burgerBar');
let toggleBar = document.getElementById('toggle-menu');



toggleBar.addEventListener('click', function(){
    toggleBar.classList.toggle('toggleActive');
    navbar.classList.toggle("overlay");
})

//  toggleBar.addEventListener('click', function(){
    
//       navbar.classList.toggle('active');
//  })
///////////todolistlet 



let inputBlock = document.querySelector(".input-form");
let addButton = document.querySelector(".btn-add");
let ulItems = document.querySelector(".ul-items");
let deleteAllItems = document.querySelector(".clear-all");
let form = document.getElementById("form-wraper");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let value = inputBlock.value;

  let li = document.createElement("li");

let i = document.createElement('i');
i.innerHTML = '<i class="fa fa-trash"></i>'; 



ulItems.appendChild(i)
  i.addEventListener("click", function () {
    li.remove();
  });
  li.textContent = value;

  li.appendChild(i);
  ulItems.appendChild(li);




  inputBlock.value = " ";
});

deleteAllItems.addEventListener("click", function () {
  ulItems.innerHTML = " ";
});





   
  