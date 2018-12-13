



// Create
var submit = document.getElementById("submit");
submit.addEventListener("click", (evt)=>{
    evt.preventDefault();
    let inputContent = document.getElementById("input").innerText;
    if (inputContent === "") {alert("Please write task in the input field");}
    else {axios.post("/api/todolists",{
            name: `${inputContent}`,
            isComplete: false
        }).then(function() {
            $(".listcontainer").append(
            `<div class="container">
                <div class="row">
                    <div class="col-4"><ul><li>${inputContent.innerText}</li></ul></div>
                    <div class="col-4"><button type="button" class="btn btn-outline-secondary btn-lg">INCOMPLETE</button><button type="button" class="btn btn-outline-danger btn-lg">DELETE</button></div>        
                </div>
            </div>`
            );
        }
    )}
});