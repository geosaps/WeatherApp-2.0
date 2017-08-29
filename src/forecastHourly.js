function getForecastHourly () {

    let appid = '3af5f670f8497198',
        openWeatherMap = 'http://api.wunderground.com/api/' + appid + '/hourly/q/' + country + '/' + city + '.json';
            $.getJSON(openWeatherMap, {
        	    dataType : "jsonp",
                units: 'metric',
            }).done(function(weather) {
                var forecastHourly = JSON.parse(JSON.stringify(weather));
                forecastHourly = forecastHourly.hourly_forecast;

                $('.container3').slideUp(250);

                setTimeout(function() {
                   $('.forecast_cont').remove();
                    let dateHourly, timeHourly, iconHourly, tempHightHourly, tempLowHourly, windHourly, humidityHourly;

                    for (let i = 0; i < 30; i = i+3) {
                        dateHourly = $('<p>').text('' + forecastHourly[i].FCTTIME.mday + ' ' + forecastHourly[i].FCTTIME.month_name + ' ' + forecastHourly[i].FCTTIME.year);
                        timeHourly = $('<h1>').text('' + forecastHourly[i].FCTTIME.hour_padded + ' : ' + forecastHourly[i].FCTTIME.min);
                        tempHightHourly = $('<h2>').text(forecastHourly[i].temp.metric + ' \u2103');
                        windHourly = $('<p>').text('Wind: ' + forecastHourly[i].wspd.metric + ' kph, ');
                        windDirHourly = $('<p>').text(forecastHourly[i].wdir.dir);
                        humidityHourly = $('<p>').text('Humidity: ' + forecastHourly[i].humidity + ' %');

                        if (forecastHourly[i].FCTTIME.hour >= 22 || forecastHourly[i].FCTTIME.hour <= 6) {
                           iconHourly = $('<img>').attr('src', 'img/ico/nt_' + forecastHourly[i].icon + '.png');
                        } else {
                           iconHourly = $('<img>').attr('src', 'img/ico/' + forecastHourly[i].icon + '.png');
                        }
     
                        let container = $('<div class="forecast_cont"><\/div>');
                        container.append(timeHourly).append(dateHourly).append(iconHourly).append(tempHightHourly).append(humidityHourly).append(windHourly).append(windDirHourly);
                        $('.container3').append(container);
                    }
                }, 250);

                $('.container3').slideDown(250);

             });
        };