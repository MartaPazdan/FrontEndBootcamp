(function () {

function fecz(url, success, failure) {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onload = function() {

        if(xhr.status >= 200 && xhr.status < 400){
            success(xhr.response);
        } else {
            failure( new Error(" Wystąpił błąd!. Kod statusu HTTP to: " + xhr.status) );
        }

    };

    xhr.onerror = function() {

        if(typeof failure === "function") {
            failure(new Error ("Wystąpił problem z komunikacją sieciową.") );
        }
        

    };

    xhr.send();

}


    var button = document.querySelector("#button"),
        output = document.querySelector("#output");

        button.addEventListener("click", function(e){

            fecz("https://jsonplaceholder.typicode.com/users", function(data){


                console.log("Sukces");
                output.textContent = data;
                }, function(err) {
                console.log("Wystąpił błąd!");
                console.log(err.message);
            });



            },false);
        

})();