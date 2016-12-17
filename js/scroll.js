"use strict" ;

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

window.onscroll = function (ev) {
    
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log('koniec strony');
        // you're at the bottom of the page
    

    ajax({
        type: "GET",
        url: "http://jsonplaceholder.typicode.com/users",
        onError: function (msg) {
            console.log(msg);
        },

        onSuccess: function (response) {

            var jsonArray = JSON.parse(response);
            console.log(jsonArray);


            var poczatekDok = document.createElement('p');
            var koniecDok = document.createElement('p');
            
            
            for (var i in jsonArray) {
                
            var userId = document.createElement('p');
            var userName = document.createElement('p');
            var userMail = document.createElement('p');
            
                poczatekDok.innerHTML = "------------- DATA BEGIN -------------";
                koniecDok.innerHTML = "------------- END OF DATA -------------";
                
                userId.innerHTML = "User ID: " + jsonArray[i].id;
                userName.innerHTML = "User Name: " + jsonArray[i].name;
                userMail.innerHTML = "User Mail: " + jsonArray[i].email;
                
                document.body.appendChild(poczatekDok);
                document.body.appendChild(userId);
                document.body.appendChild(userName);
                document.body.appendChild(userMail);
                document.body.appendChild(koniecDok);
                

        }

        }

    });
}
};