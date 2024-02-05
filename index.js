
let main=document.querySelector("#main");
let addNewTabbutton=document.querySelector(".butt");

addNewTabbutton.addEventListener('click',()=>{
    addNotpad()
})
function addNotpad(text = ""){
    const div1=document.createElement("div")
    div1.classList.add("box");
    div1.innerHTML=`<div class="nav">
    <i class="savebutton button fa-solid fa-floppy-disk"></i>
    <i class="deletebutton button fa-solid fa-trash"></i>
    </div>
    <textarea class="text" >${text}</textarea>`;
    div1.querySelector('.deletebutton').addEventListener('click',()=>{
        div1.remove();
        save()
    });
    div1.querySelector('.savebutton').addEventListener('click',()=>{
        save()
    });
    
    main.appendChild(div1)
    
}

function save(){
    let text=document.querySelectorAll(".text");
    let arr=[];
    text.forEach((e)=>{
        arr.push(e.value)
    })
    if(arr.length==0){
        localStorage.removeItem("notes")
    }
    else{
        localStorage.setItem("notes", JSON.stringify(arr))
    }
}

(function(){
    const lsNotes=JSON.parse(localStorage.getItem("notes")) 
    
    if (lsNotes === null) {
        addNotpad()
    } else {
        lsNotes.forEach(
            (lsNote) => {
                addNotpad(lsNote)
            }
        )
    }

}
)()
