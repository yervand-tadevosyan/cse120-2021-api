
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
    $.ajax({
        type : "GET",
        url : "https://cse120-2021-api.herokuapp.com/data",
        dataType : "json",
        success : function(data) {
        	console.log("success", data);
            displayData(data.data);
        },
        error : function(data) {
            console.log("Error")
        }
    });
}

function displayData(data) {
    document.getElementById("dataContainer").innerHTML = "";
    data.forEach(elem => {
        var item = document.createElement("div");
        item.className = "item";
        Object.keys(elem).forEach(key => {
            if (key != "_id") {
                span = document.createElement("span");

                b = document.createElement("b");
                b.innerHTML = key + ": ";
                span.appendChild(b);
                
                span.className = "item";
                if (elem[key]) {
                    span.innerHTML += elem[key];
                } else {
                    span1 = document.createElement("span");
                    span1.className = "undefined";
                    span1.innerHTML = "N/A";
                    span.appendChild(span1)
                }
                item.appendChild(span);

                br = document.createElement("br");
                item.appendChild(br);
            }
        })
        document.getElementById("dataContainer").appendChild(item);
    })

}
