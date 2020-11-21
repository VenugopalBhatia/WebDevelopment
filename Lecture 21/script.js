// var para1 = document.getElementById('para1');

// para1.innerHTML = 'Changing html text';

$('#para1').html('Using jQuery to change text of para1').css({"font-weight":"bold"});

$('div').css({
    backgroundColor:"cyan",
    width:"100px",
    height:"100px"
    
});


$('div').on('click',function(){
    var element = $(this);
    // console.log(element,element.width());
    element.width(element.width() + 10);
    
})

// $('a').click(function(event)
//     {   
//         event.preventDefault();
//         alert("link clicked");
//     }
// )

$('a').on('click',function(event){
    event.preventDefault();
    alert("link clicked");
})