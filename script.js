const add = document.querySelector("#add");
const taskinput = document.querySelector("#content input");
const taskcount = document.querySelector("#task");
const error = document.getElementById("error");
const value = document.querySelector(".count");

let count = 0;
const displaycount = (count) =>{
   value.innerText = count;
};

const addtask = () =>{
    const taskName = taskinput.value.trim();
    error.style.display = "none";

    if(!taskName){
      setTimeout(() => {
         error.style.display = "block";
      }, 200);
      return;
      }
       
      const task = `<div class = "task">
              <input type = "checkbox" class ="check">
              <span class = "taskname">${taskName}</span>
              <button class= "edit">
                   <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class = "delete"><i class="fa-solid fa-trash"></i></button>
      </div>`
     
      taskcount.insertAdjacentHTML("beforeend",task);

      const deletebtn = document.querySelectorAll(".delete");
      deletebtn.forEach(button =>{
         button.onclick = () =>{
            button.parentNode.remove();
            count -= 1;
            displaycount(count);
         }
      });
       const editbtn = document.querySelectorAll(".edit");

       editbtn.forEach((editbtn) =>{
         editbtn.onclick = (e) =>{
            let targetElement = e.target;

            if(!(e.target.className == "edit")){
               targetElement = e.target.parentElement;
            }

            taskinput.value = targetElement.previousElementSibling?.innerText;
            targetElement.parentNode.remove();

            count -= 1;
            displaycount(count);
         };
       });

       const taskcheck = document.querySelectorAll(".check");

       taskcheck.forEach((checkbox) => {
         checkbox.onchange = () => {
            checkbox.nextElementSibling.classList.toggle("completed");
            if(checkbox.checked) {
               count -= 1;
            }else{
               count += 1;
            }

            displaycount(count);
         };
       });

       count += 1;
       displaycount(count);
       taskinput.value = "";

    };

    add.addEventListener('click',addtask);

    window.onload = () =>{
      count = 0 ;
      displaycount(count);
      taskinput.value = "";
    }



