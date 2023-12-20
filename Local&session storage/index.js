const title  = document.getElementById("title");
const description = document.getElementById("description");
//const btn = document.getElementById("submitButton");
const form = document.querySelector("form");
const container = document.querySelector(".container");


let arr = localStorage.getItem("tasks")
?JSON.parse(localStorage.getItem("tasks"))
:[];

showAllTasks();

//  this should be pattern of output as we have styled before in css 
//  <!-- <div class="task">
//         <div>
//           <p>Title Here</p>
//           <span>Description Here</span>
//         </div>
//         <button class="deleteBtn">-</button>
//       </div> -->

function showAllTasks(){
    arr.forEach((value,index) =>{
        const div = document.createElement("div");
        div.setAttribute("class","task");

        const innerdiv =document.createElement("div");
        div.append(innerdiv);

        const p =document.createElement("p");
        p.innerText=value.title;
        innerdiv.append(p);

        const span =document.createElement("span");
        span.innerText=value.description;
        innerdiv.append(span);

        const btn = document.createElement("button");
        btn.setAttribute("class","deleteBtn");
        btn.innerText="-";

        btn.addEventListener("click",()=>{
            DeleteTask();
         arr.splice(index,1);
         localStorage.setItem("tasks",JSON.stringify(arr));
         showAllTasks();
        })

        div.append(btn);
        container.append(div);
    

    });
}




//deleting existing elements in aaray
function DeleteTask(){

arr.forEach((value)=>{
const div = document.querySelector(".task");
div.remove();
})
}




form.addEventListener("submit",(e)=>{
   e.preventDefault();
  DeleteTask();
   arr.push({
    title:title.value,
    description:description.value,
   });
   localStorage.setItem("tasks",JSON.stringify(arr));
   showAllTasks();
});


