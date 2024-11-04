import $ from jquery

$(function() {
    $('body').append('<p>Holberton Dashboard</p>')
    $('body').append('<p>Dashboard data for the students</p>')
    $('body').append('<button>Click here to get started</button>')
    $('body').append('<p id="count"></p>')
    $('body').append('<p>Copyright - Holberton School</p>')
})

let count = 0;
function updateCounter() {
    
    count++;

    // set the content of the paragraph element with id=‘count’ to {count} clicks on the button
    $('#count').text(`{count} clicks on the button`)
}
$('button').on('click', updateCounter)
