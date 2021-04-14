var requiredFields = [
  "fullname", "title"
]

var myBook = {
  "project" : "Book",
  "owner" : "Yervand Tadevosyan",
  "fullname" : "",
  "title" : "",
  "author" : "",
  "color" : "",
  "covertype" : "",
  "otherCoverValue" : "",
  "numofpages" : "",
  "price" : "",
  "currency" : "",
  "language" : "",
  "otherLanguageValue" : "",
  "origLanguage" : "",
  "otherOrigLangauageValue" : "",
  "dimensions" : "",
  "publisher" : "",
  "publishingdate" : "",
  "origpublishingdate" : "",
  "genre" : "",
  "age" : "",
  "edition" : ""
}


function handleFullnameChange() {
  myBook.fullname = document.getElementById("fullname").value;
}


function handleTitleChange() {
  myBook.title = document.getElementById("title").value;
}

function handleAuthorChange() {
  myBook.author = document.getElementById("author").value;
  }

function handleColorChange() {
  myBook.color = document.getElementById("color").value;
}

function handleCoverTypeChange(e){
  myBook.covertype=e.target.value;
  if (myBook.covertype != "other") {
      myBook.otherCoverValue = "";
      document.getElementById("otherCoverValue").style.display = "none";
  }
  else{
    document.getElementById("otherCoverValue").style.display = "block";
  }
}

function handleCoverMaterialchange() {
  if (myBook.covertype == "other") {
    document.getElementById("otherCoverValue").style.display="block";
    myBook.otherCoverValue = document.getElementById("otherCoverValue").value;
  }
}

function handleNumofPagesChange() {
  myBook.numofpages = document.getElementById("numofpages").value;
}

function handlePriceChange() {
  myBook.price = document.getElementById("price").value;
}

function handleCurrencyChange() {
  myBook.currency = document.getElementById("currency").value;
}

function handleLanguageChange(e) {
  myBook.language = e.target.value;
  if(myBook.language!="otherlang"){
    myBook.otherLanguageValue = "";
    document.getElementById("otherLanguageValue").style.display = "none";
  }
  else{
    document.getElementById("otherLanguageValue").style.display = "block";
  }
}

function handleOtherLanguageChange(){
  if(myBook.language == "otherlang"){
    document.getElementById("otherLanguageValue").style.display = "block";
    myBook.otherLanguageValue = document.getElementById("otherLanguageValue").value;

  }
}

function handleOrigLanguageChange(e) {
  myBook.origLanguage = e.target.value;
  if(myBook.origLanguage!="otheroriglang"){
    myBook.otherOrigLangauageValue = "";
    document.getElementById("otherOrigLanguageValue").style.display = "none";
  }
  else{
    document.getElementById("otherOrigLanguageValue").style.display = "block";
  }
}

function handleOtherOrigLanguageChange(){
  if(myBook.origLanguage == "otheroriglang"){
    document.getElementById("otherOrigLanguageValue").style.display = "block";
    myBook.otherOrigLangauageValue = document.getElementById("otherOrigLanguageValue").value;
  }
}

function handleDimensionsChange() {
  myBook.dimensions = document.getElementById("dimensions").value;
}

function handlePublisherChange() {
  myBook.publisher = document.getElementById("publisher").value;
}

function handlePublishingDateChange() {
  myBook.publishingdate = document.getElementById("date").value;
}

function handleOrigPublishingDateChange() {
  myBook.origpublishingdate = document.getElementById("origdate").value;
}

function handleGenreChange() {
  myBook.genre = document.getElementById("genre").value;
}

function handleAgeChange() {
  myBook.age = document.getElementById("age").value;
}
 
function handleEditionChnage() {
  myBook.edition = document.getElementById("edition").value;
}
/*____________________________________________TENNIS PART ____________________________________________*/
var requiredFieldsTennis = [
  "fullname", "email"
]

var hobbyTennis = {
  "project" : "Tennis",
  "owner" : "Yervand Tadevosyan",
  "fullname" : "",
  "email" : "",
  "preference" : "",
  "favplayer" : "",
  "favretiredplayer" : "",
  "playorwatch" : "",
  "menorwomen" : "",
  "why" : "",
  "days" : "",
  "hours" : "",
  "racket" : [],
  "strengths" : [],
  "favtournament" : ""

}

function handleFullNameTennisChange() {
  hobbyTennis.fullname = document.getElementById("fullname").value;
}

function handleEmailChange() {
  hobbyTennis.email = document.getElementById("email").value;
}

function handlePreferenceChange(e) {
  hobbyTennis.preference = e.target.value;
  if(hobbyTennis.preference == "BigTennis") {
    hobbyTennis.preference = document.getElementById("BigTennis").value;
  }
  else{
    hobbyTennis.preference = document.getElementById("TableTennis").value;
  }
  
 }

function handleFavplayerChange() {
  hobbyTennis.favplayer = document.getElementById("favplayer").value;
}

function handleFavretiredplayerChange() {
  hobbyTennis.favretiredplayer = document.getElementById("favretiredplayer").value;
}

function handlePlayOrWatchChange(select) {
  hobbyTennis.playorwatch = select.value;

}

function handleMenorWomenChange(select) {
  hobbyTennis.menorwomen = select.value;
}


function handleWhyChange() {
  hobbyTennis.why = document.getElementById("why").value;
}

function handleDaysChange() {
  hobbyTennis.days = document.getElementById("days").value;
}

function handleHoursChange() {
  hobbyTennis.hours = document.getElementById("hours").value;
}



function handleRacketChange(e) {
  if(e.target.checked){
     hobbyTennis.racket.push(e.target.value);
  }else{
    hobbyTennis.racket.splice(hobbyTennis.racket.indexOf(e.target.value),1);
  }
}

function handleStrengthsChange(e){
  if(e.target.checked){
    hobbyTennis.strengths.push(e.target.value);
  }else{
    hobbyTennis.strengths.splice(hobbyTennis.strengths.indexOf(e.target.value),1);
  }
}

function handleFavTournamentChange(e) {
  hobbyTennis.favtournament = e.target.value;
  if(hobbyTennis.favtournament == "wimbledon") {
    hobbyTennis.favtournament = document.getElementById("wimbledon").value;
  }
  else if(hobbyTennis.favtournament == "usopen"){
    hobbyTennis.favtournament = document.getElementById("usopen").value;
  }
  else if(hobbyTennis.favtournament == "australianopen") {
    hobbyTennis.favtournament = document.getElementById("australianopen").value;
  }
  else if(hobbyTennis.favtournament == "frenchopen") {
    hobbyTennis.favtournament = document.getElementById("frenchopen").value;
  }
}


/* _______________________________________Server and Admin Part_____________________________________ */
function validateFormData() {
  var isFormValid = true;
  var keys = Object.keys(myBook);
  keys.forEach(key => {
      if (requiredFields.indexOf(key) > -1 && myBook[key] == "") { console.log(key, " is a required field, please add a value") 
      if (requiredFieldsTennis.indexOf(key) > -1 && hobbyTennis[key] == "") { console.log(key, " is a required field, please add a value")
      if(document.getElementById(key)) {
        document.getElementById(key).style.backgroundColor = "yellow"; 
        isFormValid = false;
          }
        } 
    }  
  })
  return isFormValid;
}

function saveData(e) {
e.preventDefault();
if(validateFormData() == false){
  return;
}else{
  console.log(myBook);

    $.ajax({
    type: 'POST',
    url: "https://cse120-2021-api-yervand.herokuapp.com/data",
    data: myBook,
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
}

function saveDataTennis(e) {
e.preventDefault();
if(validateFormData() == false){
  return;
}else{
  console.log(hobbyTennis);

    $.ajax({
    type: 'POST',
    url: "https://cse120-2021-api-yervand.herokuapp.com/data",
    data: hobbyTennis,
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
}

function updateData(e) {
  e.preventDefault();
  var updatedBook = {};
  updatedBook.id = document.getElementById("_idBook").value;
  updatedBook.fullname = document.getElementById("fullnameBook").value;
  updatedBook.title = document.getElementById("titleBook").value;
  updatedBook.author = document.getElementById("authorBook").value;
  updatedBook.color = document.getElementById("colorBook").value;
  updatedBook.covertype = document.getElementById("coverBook").value;
  updatedBook.numofpages = document.getElementById("numofpagesBook").value;
  updatedBook.price = document.getElementById("priceBook").value;
  updatedBook.currency = document.getElementById("currencyBook").value;
  updatedBook.language = document.getElementById("languageBook").value;
  updatedBook.origLanguage = document.getElementById("origlanguageBook").value;
  updatedBook.dimensions = document.getElementById("dimensionsBook").value; 
  updatedBook.publisher = document.getElementById("publisherBook").value; 
  updatedBook.publishingdate = document.getElementById("publishingdateBook").value;
  updatedBook.origpublishingdate = document.getElementById("origpublishingdateBook").value;
  updatedBook.genre = document.getElementById("genreBook").value;
  updatedBook.age = document.getElementById("agerestrictionBook").value;
  updatedBook.edition = document.getElementById("editionBook").value;
  
  if(validateFormData() == false){
    return;
  }else{
    console.log(myBook);

      $.ajax({
      type: 'POST',
      url: "https://cse120-2021-api-yervand.herokuapp.com/data/update",
      data: updatedBook,
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
}




function loadExistingData() {
    myTennisData = [];
    myBookData = [];
    otherData = [];
    $.ajax({
        type : "GET",
        url : "https://cse120-2021-api-yervand.herokuapp.com/data",
        dataType : "json",
        success : function(data) {
        	console.log("success", data);
          loadedData = data.data;
          data.data.forEach(elem =>{
            if(elem["owner"] == "Yervand Tadevosyan"){
              if(elem["project"] == "Tennis"){
                myTennisData.push(elem);
              } else {
                myBookData.push(elem);
              }
            }else{
              otherData.push(elem);
            }
          })
          displayData(myTennisData, "tennisDataContainer");
          displayData(myBookData, "bookDataContainer");
          displayData(otherData, "otherDataContainer");
        },
        error : function(data) {
            console.log("Error")
        }
    });
}

function displayData(data, containerDivName) {
    document.getElementById(containerDivName).innerHTML = "";
    data.forEach(elem => {
        var item = document.createElement("div");
        item.id = "div" + elem["_id"];
        item.className = "item";
        if (Object.keys(elem).length == 1) {
            var span = document.createElement("span");
            span.innerHTML = "<i>Empty Element with autogenerated ID: </i>" + elem["_id"];
            item.appendChild(span);
        }
        Object.keys(elem).forEach(key => {
            if (key != "_id") {
                var span = document.createElement("span");

                var b = document.createElement("b");
                b.innerHTML = key + ": ";
                span.appendChild(b);
                
                span.className = "item";
                if (elem[key]) {
                    span.innerHTML += elem[key];
                } else {
                    var span1 = document.createElement("span");
                    span1.className = "undefined";
                    span1.innerHTML = "N/A";
                    span.appendChild(span1)
                }
                item.appendChild(span);

                var br = document.createElement("br");
                item.appendChild(br);
            }
        })
      if (elem["owner"] == "Yervand Tadevosyan") {
        var button2 = document.createElement("button");
        button2.innerHTML = "Edit";
        button2.className = "editButton";
        button2.id = "edit_"+ elem["_id"];
        button2.addEventListener("click", function(e){
        editData(e, e.target.id);
        }, false);
        item.appendChild(button2);
      }

      if (elem["owner"] = "Yervand Tadevosyan" || (elem["fullname"] && elem["fullname"].indexOf("Yervand Tadevosyan") > -1)){
        var button = document.createElement("button");
        button.innerHTML = "Delete";
        button.id = elem["_id"];
        button.addEventListener("click", function(e){
            deleteData(e.target.id);
        }, false);
        item.appendChild(button);
      }
        document.getElementById(containerDivName).appendChild(item);
    })

      document.querySelectorAll("#tennisDataContainer div.item").forEach(div => {
      div.addEventListener("click", function(e){
        if (this.style.height == "auto") {
          this.style.height = "30px";
        } else {
          this.style.height = "auto";
        }
      })        
    })
}

function deleteData(id) {

    var r = confirm("Are you sure you want to delete the item with the following ID? " + id);
    if (r == true) {
      
    } else {
      return;
    }

    var tmp = {
        "id": id
    }

    $.ajax({
        type: 'POST',
        url: "https://cse120-2021-api-yervand.herokuapp.com/data/delete",
        data: tmp,
        cache: false,
        dataType : 'json',
        success: function (data) {
            console.log("success");
            document.getElementById("div" + id).style.display = "none";
        },
        error: function (xhr) {
            console.error("Error in post", xhr);
        },
        complete: function () {
            console.log("Complete");  
        }
    });
}

var loadedData = [];

function editData(e){
  e.stopImmediatePropagation(); 
 var id = e.target.id; 
 var tmp = id.split("edit_");
 var item_id = tmp[1];
 console.log(item_id);

loadedData.forEach(item => {
    if (item._id == item_id && item["owner"] == "Yervand Tadevosyan") {
        console.log(item); 
        localStorage = window.localStorage;
        localStorage.setItem('editItem', JSON.stringify(item));
        if (item["project"] == "Book"){
          document.location = "edit_book.html";
        } else {
        document.location  = "edit_tennis.html"; 
      }
    }
  })
}

function loadBookEditItem() {
  localStorage = window.localStorage;
  editItem = JSON.parse(localStorage.getItem("editItem"));
  console.log(editItem);
  document.getElementById("_idBook").value = editItem["_id"];
  document.getElementById("titleBook").value = editItem["title"];
  document.getElementById("fullnameBook").value = editItem["fullname"];
  document.getElementById("authorBook").value = editItem["author"]; 
  document.getElementById("colorBook").value = editItem["color"];
  document.getElementById("coverBook").value = editItem["covertype"];
  document.getElementById("numofpagesBook").value = editItem["numofpages"];
  document.getElementById("priceBook").value = editItem["price"];
  document.getElementById("currencyBook").value = editItem["currency"];
  document.getElementById("languageBook").value = editItem["language"];
  document.getElementById("origlanguageBook").value = editItem["origLanguage"];
  document.getElementById("dimensionsBook").value = editItem["dimensions"];
  document.getElementById("publisherBook").value = editItem["publisher"];
  document.getElementById("publishingdateBook").value = editItem["publishingdate"];
  document.getElementById("origpublishingdateBook").value = editItem["origpublishingdate"];
  document.getElementById("genreBook").value = editItem["genre"];
  document.getElementById("agerestrictionBook").value = editItem["age"];
  document.getElementById("editionBook").value = editItem["edition"]; 

}

function loadTennisEditItem(){
  localStorage = window.localStorage;
  editItem = JSON.parse(localStorage.getItem("editItem"));
  console.log(editItem);
  document.getElementById("_idTennis").value = editItem["_id"];
  document.getElementById("fullnameTennis").value = editItem["fullname"];
  document.getElementById("emailTennis").value = editItem["email"];
  document.getElementById("preferTennis").value = editItem["preference"];
  document.getElementById("favplayerTennis").value = editItem["favplayer"];
  document.getElementById("favretiredplayerTennis").value = editItem["favretiredplayer"];
  document.getElementById("playorwatchTennis").value = editItem["playorwatch"];
  document.getElementById("menorwomenTennis").value = editItem["menorwomen"];
  document.getElementById("whyTennis").value = editItem["why"];
  document.getElementById("daysTennis").value = editItem["days"];
  document.getElementById("hoursTennis").value = editItem["hours"];
  document.getElementById("racketTennis").value = editItem["racket"];
  document.getElementById("strengthsTennis").value = editItem["strengths"];
  document.getElementById("tournamentTennis").value = editItem["favtournament"];
}


function toggleOtherData() {
  var otherData = document.getElementById("otherDataContainer");
  if (otherData.style.display == "block") {
    otherData.style.display = "none";
  } else {
    otherData.style.display = "block";
  }
}






















/*
function displayData(existingData) {
  console.log(Object.values(existingData))
  console.log(existingData[1])
  // document.getElementById("existingData").innerHTML = "<ul>";
  let exData = document.getElementById("existingData")
  for (var i = 0; i < existingData.length; i++) {
    let itemData = existingData[i]
    let ul = document.createElement('ul')
    exData.appendChild(ul)
    // currentBook = existingData[i];
    for (let k = 0; k < Object.values(itemData).length; k++) {
      let li = document.createElement('li')
      li.innerHTML = Object.values(itemData)[k]
      ul.appendChild(li)
    }
    

    
    //  exData += "<li><i>" + currentBook.fullname + "</li> : <b>" + currentBook.title + "</b> </li>" + currentBook.author + "</li>";
  }
  // document.getElementById("existingData").innerHTML += "</ul>"
}
*/

