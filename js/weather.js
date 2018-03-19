

function getWeather(cityID) {
  
  var apiURI = "http://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&appid=db165cb0f6923a9f5b271e913c561add";

  //debugger;
  
  $.ajax({
    url: apiURI,
    dataType: "json",
    type: "GET",
    async: "false",
    success: function(apiResponse) {

      if (apiResponse.city.name) {
        $("#city-text").html(apiResponse.city.name + ", " + apiResponse.city.country);
      }
	  
	  var dayNum = 0; //today
	  var lastDisplayDate = new Date('1980','0','1');
	  var dateTimeFromJSON;
	  var dateOnlyFromJSON;
	  var timeOnlyFromJSON;
	  var parts;
	  var dateFromJSON;
	  var i;
	  
	  for (i = 0; i < apiResponse.list.length; i++){
		  
		  if (apiResponse.list[i].dt_txt){
			  
			  dateTimeFromJSON = apiResponse.list[i].dt_txt;
			  timeOnlyFromJSON = dateTimeFromJSON.substring(11)
			  dateOnlyFromJSON = dateTimeFromJSON.substring(0,10)
			  parts = dateOnlyFromJSON.split('-');
			  dateFromJSON = new Date(parts[0], parts[1] - 1, parts[2]);
			  
			  if ((dateFromJSON > lastDisplayDate && i==0)||(dateFromJSON > lastDisplayDate && timeOnlyFromJSON == '12:00:00')){ //
			  
				  if (apiResponse.list[i].wind) {
					var mph = apiResponse.list[i].wind.speed * 2.24 ;
					$("#wind-text" + dayNum).html(mph.toFixed(1)+ " mph");
				  }
				  if (apiResponse.list[i].main.temp) {
					var degreesCelcius = (apiResponse.list[i].main.temp - 273.15);
					if (degreesCelcius > 24){ 
					  $("#temp-text" + dayNum).css("color", "red");
					} else if (degreesCelcius < 18){
					  $("#temp-text" + dayNum).css("color", "blue");
					}
					$("#temp-text" + dayNum).html(degreesCelcius.toFixed(0) + " C&deg");
				  }
				  if (apiResponse.list[i].weather) {
					var imgURL = "http://openweathermap.org/img/w/" + apiResponse.list[i].weather[0].icon + ".png";
					$("#weatherImg" + dayNum).attr("src", imgURL);
					$("#weather-text" + dayNum).html(apiResponse.list[i].weather[0].description);
				  }
				  
				  if(dayNum > 1){
					  //today and tomorrow have fixed text
					  $("#displayDate-text" + dayNum).html(formatDate(dateFromJSON));
				  }
				  
				  //update last date displayed
				  lastDisplayDate = dateFromJSON;
				  dayNum ++;
			  }
		  }
	   }	  
    },
    error: function(apiResponse) {
       alert("API Error - " + apiResponse);
       clearInterval(updateinter);
    }
  });
}


function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}


function setStartLocation() {
	var cityID = 2650225;
	{
      getWeather(cityID);
    }
}


setStartLocation();