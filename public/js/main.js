
function saveData() {
	var tmp = {
		"test": "Data"
	}

    $.ajax({
        type: 'POST',
        url: "/data",
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
	var donations = [];
    $.ajax({
        type : "GET",
        url : "/data",
        dataType : "json",
        success : function(data) {
        	console.log("success", data);
            donations = data.donations;
        },
        error : function(data) {
            console.log("Error")
        }
    });
}