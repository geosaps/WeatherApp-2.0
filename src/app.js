//clear, nt_clear, partlycloudy, mostlycloudy, nt_partlycloudy, chancerain, nt_chancerain, cloudy, rain
//chancetstorms, tstorms
let country = "Ukraine",
    city = "Ivano-Frankivs'k"


function weather (country, city) {
    $('.container3').slideUp(250);
    let appid = '3af5f670f8497198',
        openWeatherMap = 'http://api.wunderground.com/api/' + appid + '/conditions/q/' + country + '/' + city + '.json';
    $(document).ready(function(position) {
            $.getJSON(openWeatherMap, {
        	    dataType : "jsonp",
                units: 'metric'
            }).done(function(weather) {

                $('#error').remove();
                var obj = JSON.parse(JSON.stringify(weather));
                console.log(obj);
                if (obj.current_observation) {
                    obj = obj.current_observation;

                    if (obj === undefined) {
                        $('#logo').after("<p id='error'>Can't find this city</p>")
                    } else {
                let city = obj.display_location.city,
                    country = obj.display_location.country_iso3166,
                    alt = obj.display_location.elevation,
                    long = obj.display_location.longitude,
                    lat = obj.display_location.latitude,
                    pressure = obj.pressure_mb,
                    visibility = obj.visibility_km,
                    humidity = obj.relative_humidity,
                    wind = obj.wind_string,
                    temperature = Math.round(obj.temp_c),
                    feels = obj.feelslike_c,
                    time = obj.local_time_rfc822,
                    epoch = obj.local_epoch,
                    update = obj.observation_time,
                    icon = obj.icon,
                    partOfDay = time.slice(17, 19),
                    partOfDayWord = '';


                $('#location').text('' + city + ', ' + country);
                $('#coordinates').text('Elv: '+ alt + ' m; ' + lat.slice(0, 5) + ' °N, ' + long.slice(0, 5) + ' °E');
                $('#pressure').text(pressure + ' hPa');
                $('#visibility').text(visibility + ' km');
                $('#humidity').text(humidity);
                $('#wind').text(wind);
                $('#temperature').find('h4').text('' + temperature + ' \u2103');
                $('#temperature').find('p').text('Feels like ' + feels + ' \u2103');
                $('#time').text(time);
                $('#update').text(update);
                $('#conditions').find('img').attr("src", ('img/ico/' + icon + '.png'));

                if (partOfDay >= 0 && partOfDay < 4) {
                    partOfDayWord = 'nt';
                } else if (partOfDay >= 6 && partOfDay < 10) {
                    partOfDayWord = 'mn';
                } else if (partOfDay >= 10 && partOfDay < 18) {
                    partOfDayWord = 'dy';
                } else if (partOfDay >= 18 && partOfDay < 22) {
                    partOfDayWord = 'ev';
                } else if (partOfDay >= 22 && partOfDay < 24) {
                    partOfDayWord = 'nt';
                }
                $('body').animate(function() {
                    opacity: 1
                })
                    .css("background-image", 'url(\'img/background/' + partOfDayWord + '_' + icon + '.jpg\')');
            }
        } else {
            console.log(obj.response.results["0"].l);
            getBigWeather(obj.response.results["0"].l);
        }
            /* $('#info').html(JSON.stringify(weather)); */ 
    		});
    	});
}

window.onload(weather(country, city));

function getWeather() {
    console.log(country, city)
    country = $('#country').val();
    city = $('#city').val();
    weather(country, city);
};