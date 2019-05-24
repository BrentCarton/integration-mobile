//gebasseerd op https://github.com/js-cookie/js-cookie

$(function(){
    console.log("test");
    var cookies = Cookies.get();
    $.ajax({
        url : "data/projecten.json",
        dataType : "json"
    }).done(function(data){
        var projecten1 = data[0];
        for (var i in cookies){
            eersteJaar(cookies, projecten1, i);
        }
        var projecten2 = data[1];
        for (var i in cookies){
            tweedeJaar(cookies, projecten2, i);
        }
        var projecten3 = data[2];
        for (var i in cookies){
            derdeJaar(cookies, projecten3, i);
        }
    }).fail(function (a,b){
        console.log(a,b);
    });

    function eersteJaar(cookies, projecten1, i){
        if(cookies[i]<7){
            $(".connect").append("<h2>"+projecten1[cookies[i]].student+"</h2><h3>"+projecten1[cookies[i]].project+"</h3><p>"+projecten1[cookies[i]].email+"</p><p>"+projecten1[cookies[i]].telefoonnummer+"</p><p>"+projecten1[cookies[i]].studie+"</p>");
        }else{
            console.log("Geen 1e jaars aangeduid")
        }
    };
    function tweedeJaar(cookies, projecten2, i){
        if(cookies[i]>6 && cookies[i]<11){
            $(".connect").append("<h2>"+projecten2[cookies[i]].student+"</h2><h3>"+projecten2[cookies[i]].project+"</h3><p>"+projecten2[cookies[i]].email+"</p><p>"+projecten2[cookies[i]].telefoonnummer+"</p><p>"+projecten2[cookies[i]].studie+"</p>");
        }else{
            console.log("Geen 2e jaars aangeduid")
        }
    }
    function derdeJaar(cookies, projecten3, i){
        if(cookies[i]>10){
                $(".connect").append("<h2>"+projecten3[cookies[i]].student+"</h2><h3>"+projecten3[cookies[i]].project+"</h3><p>"+projecten3[cookies[i]].email+"</p><p>"+projecten3[cookies[i]].telefoonnummer+"</p><p>"+projecten3[cookies[i]].studie+"</p>");
            }else{
                console.log("Geen 3e jaars aangeduid")
            }
    }
})