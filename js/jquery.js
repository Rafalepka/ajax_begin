$(function () {

    $("#link").click(function () {
            console.log('dziala');

            $.getJSON("http://echo.jsontest.com/imie/rafal/oczy/piwne/zycie/dziwne", function pobierzDane(event) {
                    console.log(event);
                });
            });
    });
