(function($) {

    

    	var form = $("#add-user"),
    	input = form.find("input[name='user']"),
    	list = $("<ul>").insertAfter(form);

    	form.on("submit", function(e){
    		(e).preventDefault;

    		var name = $.trim(input.val());

    		if(name === ""){
    			input.addClass("invalid");
    			return;
    		}

    		input.removeClass("invalid").val("");
    		list.append("<li>", name, "</li>");

   	});



}) (jQuery);

 