$('.switch input').on("click",function(){
    if($(this).prop("checked") == true){
        document.body.style.backgroundColor = 'black';
    }else{
        document.body.style.backgroundColor = 'white';
    }
})