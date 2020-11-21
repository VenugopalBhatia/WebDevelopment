var name;
var rollNo;
var marks;

$('#addEntry').click(function(){

    name = $('#studentName').val();
    rollNo = $('#rollNo').val();
    marks = $('#marks').val();

    $('#list').append('<p> RollNo. : '+rollNo+' '+name+' has scored '+marks+' marks</p>')
    $('#list p').last().css({
        // "background-color" : "grey",
        "height" : "30px",
        "padding" : "13px",
        "text-align" : "center"

    })

})


