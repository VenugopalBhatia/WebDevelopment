var colors = [ 'red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick','crimson']


$('#btn button').click(function(){
    var t = Math.floor(Math.random()*colors.length)
    console.log('click ',colors[t]);
    $('#basket').append('<div class = "ball"></div>')
    $('#basket div').last().css({
        backgroundColor:colors[t]
    })
})