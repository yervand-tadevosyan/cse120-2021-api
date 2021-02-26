
function saveData() {
	var tmp = {
		"test": "Data"
	}

    $.ajax({
        type: 'POST',
        url: "https://cse120-2021-api.herokuapp.com/data",
        data: tmp,
        cache: false,
        dataType : 'json',
        success: function (data) {
        	console.log("success");
        },
        error: function (xhr) {
            console.error("Error in post", xhr);
        },
        complete: function () {
            console.log("Complete");  
        }
    });
}

function loadExistingData() {
	var data = [];
    $.ajax({
        type : "GET",
        url : "https://cse120-2021-api.herokuapp.com/data",
        dataType : "json",
        success : function(data) {
        	console.log("success", data);
            data = data;
        },
        error : function(data) {
            console.log("Error")
        }
    });
}