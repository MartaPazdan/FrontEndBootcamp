function createData() {
	var data = {};

	return {
		set: function(key, val){

			if(key !== undefined && val !== undefined){
				data[key] = val;	
			}
		
		},
		get: function(key){
			return data[key];
		}
	};

}

var data = createData();

data.set("name", "Janek")

console.log( data.get("name") );