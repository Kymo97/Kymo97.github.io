window.onload=()=>{
    $("#puppies").click(updatePic);
    $("#kitties").click(updatePic);
};
let url ="https://mumstudents.org/cs472/2013-09/Sections/8/ajaxpets/ajaxpets.php";

function updatePic(e){
    //ajax solution
        // $.ajax(url,{
    //     "data":{"animal":this.value},
    // }).done(displayPic)
    // .fail((err)=>{console.log(err);});
    fetch(url+"?animal="+this.value,{
        method:'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res=> res.text())
    .then(displayPic)
    .catch((err)=>console.log(err));
}
function displayPic(response){
    console.log(response);
    $("#pictures").children().remove();
    $("#pictures").append(response);
}

