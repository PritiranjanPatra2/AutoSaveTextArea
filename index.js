const textbox=document.getElementById("textarea");
textbox.addEventListener('input',function(){
    var text=textbox.value;
    localStorage.setItem("savedText",text)
})