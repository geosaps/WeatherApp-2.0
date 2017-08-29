function getForecast10 () {

    let appid = '3af5f670f8497198',
        openWeatherMap = 'http://api.wunderground.com/api/' + appid + '/forecast10day/q/' + country + '/' + city + '.json';
            $.getJSON(openWeatherMap, {
        	    dataType : "jsonp",
                units: 'metric'
            }).done(function(weather) {
                var forecast10 = JSON.parse(JSON.stringify(weather));
                forecast10 = forecast10.forecast.simpleforecast.forecastday;

                $('.container3').slideUp(250);

                setTimeout(function() {
                    $('.forecast_cont').remove();
                    let date10, weekday10, icon10, tempHight10, tempLow10, wind10, humidity10;

                    for (let i = 0; i < forecast10.length; i++) {
                        date10 = $('<h1>').text('' + forecast10[i].date.day + ' ' + forecast10[i].date.monthname + ' ' + forecast10[i].date.year);
                        weekday10 = $('<p>').text(forecast10[i].date.weekday);

                        tempHight10 = $('<h2>').text(forecast10[i].high.celsius + ' \u2103');
                        tempLow10 = $('<p>').text('Night: ' + forecast10[i].low.celsius + ' \u2103');
                        wind10 = $('<p>').text('Wind: ' + forecast10[i].avewind.kph + ' kph, ');
                        windDir10 = $('<p>').text(forecast10[i].avewind.dir);
                        humidity10 = $('<p>').text('Humidity: ' + forecast10[i].avehumidity + ' %');

                        if (forecast10[i].date.hour >= 22 && forecast10[i].date.hour <= 6) {
                           icon10 = $('<img>').attr('src', 'img/ico/nt_' + forecast10[i].icon + '.png');
                        } else {
                           icon10 = $('<img>').attr('src', 'img/ico/' + forecast10[i].icon + '.png');
                        }
                        let container = $('<div class="forecast_cont"><\/div>');
                        container.append(date10).append(weekday10).append(icon10).append(tempHight10).append(tempLow10).append(humidity10).append(wind10).append(windDir10);
                        $('.container3').append(container);
                    }
                }, 250);

                $('.container3').slideDown(250);

             });
        };