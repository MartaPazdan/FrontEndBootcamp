(function($) {

var API_URL = "https://jsonplaceholder.typicode.com/users",
    template = $("#userTemplate").html();

function showUsers(data){

    var output = "";

    $.each(data, function(index, obj){

        output += Mustache.render(template, obj);

    });

    $(".container").append( $("<ul>").html(output));

}


    $("#getUsers").on("click", function() {

        $.getJSON(API_URL)
            .done(function(data) {
            
            showUsers(data);

            })


            .fail(function() {
                $(".container").append("<ul><li> Wystąpił błąd </li></ul>");
            });
    });




}) (jQuery);

 