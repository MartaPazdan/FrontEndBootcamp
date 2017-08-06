(function() {

    if(String.prototype.repeatt){


        return;
    }
    String.prototype.repeatt = function(count){

        if(count < 0) {
            throw new Error("Invalid count value");
        }


        var output = "",
            string = this.toString()

        for(var i = 0; i < count; i++){
            output += string;

        }
        return output;
        //return(new Array(count + 1)).join( this.toString() );
    };

}) ();

 