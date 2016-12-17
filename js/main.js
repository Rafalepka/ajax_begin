"use strict" ;

function ajax (options) {
    options = {//obiekt options jest właściwością obiektu ajax
        type: options.type || "POST",
        url: options.url || "",
        onComplete: options.onComplete || function () {},
        onError: options.onError || function () {},
        onSuccess: options.onSuccess || function () {},
        dataType: options.dataType || "text"//type to definicja pola, options.type to jego wartość
    };
    
    function httpSuccess (httpRequest) {//przekuzje obiekt
        try {//jeśli było ok to funkcja zwraca true
        return (httpReq.status>=200 && httpReq.status <300 || 
        httpReq.status == 304 ||
        navigator.userAgent.indexOf("Safari")>= 0 && typeof
        httpReq.status == "undefined");
            
        } catch (e) {//jeśli cokolwiek jest nie tak zwróć false nie wyrzucaj do logów
            return false;
            
        }
    }
    
    var httpReq = new XMLHttpRequest ();
    
    httpReq.open(options.type, options.url, true);
    
     httpReq.onreadystatechange = function (){
         
        if ( httpReq.readyState == 4 ) {
            if (httpSuccess(httpReq)) {
                options.onSuccess(httpReq.responseText) ;
                
            } else {
                options.onError(httpReq.statusText);
            }
        }
        
     }
     
     httpReq.send();
}

function pobierzDane(event) {
        event.preventDefault();

        ajax({
            type: "GET",
            url: "http://echo.jsontest.com/imie/Rafal/oczy/Piwne/zycie/Dziwne",
            onError: function (msg) {
                console.log(msg);
            },

            onSuccess: function (response) {
                
                var jsonObj = JSON.parse(response);
                
                var imie = document.createElement('p');
                
                imie.innerHTML = "Twoje imie: " + jsonObj.imie;
                document.body.appendChild(imie);
                console.log(response);
                
                var oczy = document.createElement('p');
                oczy.innerHTML = "Oczy koloru: " + jsonObj.oczy;
                document.body.appendChild(oczy);
                
                var zycie = document.createElement('p');
                zycie.innerHTML = "Zycie jest: " + jsonObj.zycie;
                document.body.appendChild(zycie);
                
            }

        });
    };