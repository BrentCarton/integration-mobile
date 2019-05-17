$(function() {
    $("#back-button").on("click", function(){
        event.preventDefault();
        window.history.back();
    })
});