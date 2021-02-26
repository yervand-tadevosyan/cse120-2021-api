function Validatecurrentvalue(){
  var currentvalue=document.getElementById("fname").value;
  console.log("Eventcall;", currentvalue.length)
  if (currentvalue.length > 10){
   document.getElementById("fullnameerror").innerHTML="Bad";
  } else{
    document.getElementById("fullnameerror").innerHTML="Good";
  }
}

function handleFullNameChange(){
 Myformdata.fullname=document.getElementById("fname").value;

}

function handleTitleChange(){
 Myformdata.title=document.getElementById("title").value;
}

function handleAuthorChange(){
  Myformdata.author=document.getElementById("authorname").value;
}

function handleColorChange(){
  Myformdata.colour=document.getElementById("colour").value;
}

function handleCoverTypeChange(e){
 Myformdata.covertype= e.target.value; 
 if (Myformdata.covertype !="other"){
   Myformdata.othercovertype="";
   document.getElementById("othertext").style.display="none";
 } else{
   document.getElementById("othertext").style.display="block";
 }
}

function handleCustomTypeChange(){
if(Myformdata.covertype=="other"){
  Myformdata.othercovertype=document.getElementById("othertext").value;
}
}

function handlePageChange(){
  Myformdata.numberofpages=document.getElementById("numberofpages").value;
}

function handlePriceChange(){
 Myformdata.price=document.getElementById("price").value;
}

function handleCurrencyChange(){
 Myformdata.currency=document.getElementById("currency").value;
}

function handleLanguageChange(event){
  Myformdata.language= event.target.value;
  if (Myformdata.language != "other"){
    Myformdata.otherlanguage="";
    document.getElementById("otherlangtext").style.display="none";
  } else{
    document.getElementById("otherlangtext").style.display="block";
  }
}
function handleCustomLangChange(){
  if (Myformdata.language=="other") {
    document.getElementById("otherlangtext").value;
  }
}

function handleoriginallangchange(event){
 Myformdata.originallanguage=event.target.value;
 if (Myformdata.originallanguage != "other"){
   Myformdata.otheroriginallanguage="";
   document.getElementById("otherlangtext2").style.display="none";
 } else{
   document.getElementById("otherlangtext2").style.display="block";
 }
}

function handleotherlang2change(){
 if (Myformdata.originallanguage=="other"){
   document.getElementById("otherlangtext2").value;
 }
}

function handleEditionChange(){
  Myformdata.edition=document.getElementById("edition").value;
}
function handleDimensionsChange(){
  Myformdata.dimensions=document.getElementById("dimensions").value;
}
function handlePublisherChange(){
  Myformdata.publisher=document.getElementById("publisher").value;
}


function handlePubMonthChange(){
 Myformdata.publishingmonth=document.getElementById("publishingmonth").value;
}

function handlePubDayChange(){
  Myformdata.publishingday=document.getElementById("publishingday").value;
}

function handlePubYearChange(){
  Myformdata.publishingyear=document.getElementById("publishingyear").value;
}

function handleOriginalPubMonthChange(){
  Myformdata.originalpublishingmonth=document.getElementById("originalpubmonth").value;
}
function handleOriginalPubDayChange(){
  Myformdata.originalpublishingday=document.getElementById("originalpubday").value;
}

function handleOriginalPubYearChange(){
  Myformdata.originalpublishingyear=document.getElementById("originalpubdate").value;
}

function handleGenreChange(){
  Myformdata.genre=document.getElementById("genre").value;
}
function handleAgeChange(){
 Myformdata.agerestriction=document.getElementById("agerestriction").value;
}

function SaveData(){
  console.log(Myformdata)

  $.ajax({
    type: 'POST',
    url: "https://cse120-2021-api.herokuapp.com/data",
    data: Myformdata,
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
var Myformdata={
  "fullname": "",
  "title": "",
  "author": "",
  "colour": "",
  "covertype" : "", 
  "othercovertype": "",
  "numberofpages": "",
  "price": "",
  "currency": "",
  "language" : "",
  "otherlanguage": "",
  "originallanguage": "",
  "otheroriginallanguage": "",
  "edition": "",
  "dimensions": "",
  "publisher": "",
  "publishingmonth": "",
  "publishingday": "",
  "publishingyear":"", 
  "originalpublishingmonth": "",
  "originalpublishingday": "",
  "originalpublishingyear": "",
  "genre": "",
  "agerestriction": "",
}
