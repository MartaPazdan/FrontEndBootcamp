(function() {

function localDB(name){

	this._dbName = name;

}
	localDB.prototype.save = function(key, obj) {

		window.localStorage.setItem(this.dbName + "." + key, JSON.stringify(obj));

	};

	localDB.prototype.get = function(key) {
		return JSON.parse(window.localStorage.getItem(this.dbName + "." + key) );
	}

window.localDB = localDB;


})();