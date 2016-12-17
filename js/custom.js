"use strict";

function ajax(options) {

    options = {
        type: options.type || "POST",
        url: options.url || "",
        onComplete: options.onComplete || function () {},
        onError: options.onError || function () {},
        onSuccess: options.onSuccess || function () {},
        dataType: options.dataType || "text"
    };


    function xmlSuccess(xmlRequest) {
        try {
            return (xmlRequest.status >= 200 && xmlRequest.status < 300 || xmlRequest.status == 304 || navigator.userAgent.indexOf("Safari") >= 0 && typeof xml.status == "undefined");
            console.log('dziala');
        } catch (e) {
            return false;
        }

    }
    console.log(options);
    var xml = new XMLHttpRequest();
    xml.open(options.type, options.url, true);

    xml.onreadystatechange = function () {
        if (xml.readyState == 4) {
            if (xmlSuccess(xml)) {
                options.onSuccess(xml.responseText);
                xml = null; /*&& (xml.status >= 200 && xml.status < 300 || xml.status == 304 || navigator.userAgent.indexOf("Safari") >= 0 && typeof xml.status == "undefined")) */ // warunki do spelnienia przy przeladowaniu dokumentu
                /*

                        //            alert(xml.responseText);
                        options.onSuccess(xml.responseText);
                        //            console.log('dziala');

                        xml = null;*/

            } else {
                options.onError(xml.statusText);
            }

        }

        xml.send();
    };


    function pobierzDane(event) {
        event.preventDefault();

        ajax({
            type: "GET",
            url: "http://echo.jsontest.com/imie/rafal/oczy/piwne/zycie/dziwne",
            onError: function (msg) {
                alert(msg);
            },

            onSuccess: function (response) {
                alert(response);
            }

        });
    }

}





    /*function pobierzDane(event) {
        event.preventDefault();

        var xml = new XMLHttpRequest();
        xml.open("GET", "http://echo.jsontest.com/imie/rafal/oczy/piwne/zycie/dziwne", true); // otwieramy polaczenie do pobrania danych

        xml.onreadystatechange = function () {
            if (xml.readyState == 4 && (xml.status >= 200 && xml.status < 300 || xml.status == 304 || navigator.userAgent.indexOf("Safari") >= 0 && typeof xml.status == "undefined")) { // warunki do spelnienia przy przeladowaniu dokumentu
                
                
                alert(xml.responseText);
                xml = null;
            }
        }
         xml.send();
    };*/
    /*jesli status dokumentu zostal zmieniony
    0: polaczenie nie nawiazane
    1: polaczenie nawiazane
    2: żadanie odebrane
    3: przetwarzanie
    4: wszystko dziala*/