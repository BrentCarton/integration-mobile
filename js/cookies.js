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
            $(".connect").append("<div class='student'><h2>"+projecten1[cookies[i]].student+"</h2><h3>"+projecten1[cookies[i]].project+"</h3><a id='mail' href='mailto:"+projecten1[cookies[i]].email+"'>"+projecten1[cookies[i]].email+"</a><a id='tel'  href='tel:"+projecten1[cookies[i]].telefoonnummer+"'>"+projecten1[cookies[i]].telefoonnummer+"</a><p>"+projecten1[cookies[i]].studie+"</p></div>");
        }else{
            console.log("Geen 1e jaars aangeduid")
        }
    };
    function tweedeJaar(cookies, projecten2, i){
        if(cookies[i]>6 && cookies[i]<11){
            $(".connect").append("<div class='student'><h2>"+projecten2[cookies[i]].student+"</h2><h3>"+projecten2[cookies[i]].project+"</h3><a id='mail' href='mailto:"+projecten2[cookies[i]].email+"'>"+projecten2[cookies[i]].email+"</a><a id='tel' href='tel:"+projecten2[cookies[i]].telefoonnummer+"'>"+projecten2[cookies[i]].telefoonnummer+"</a><p>"+projecten2[cookies[i]].studie+"</p></div>");
        }else{
            console.log("Geen 2e jaars aangeduid")
        }
    }
    function derdeJaar(cookies, projecten3, i){
        if(cookies[i]>10){
                $(".connect").append("<div class='student'><h2>"+projecten3[cookies[i]].student+"</h2><h3>"+projecten3[cookies[i]].project+"</h3><a id='mail' href=mailto:'"+projecten3[cookies[i]].email+"'>"+projecten3[cookies[i]].email+"</a><a id='tel' href='tel:"+projecten3[cookies[i]].telefoonnummer+"'>"+projecten3[cookies[i]].telefoonnummer+"</a><p>"+projecten3[cookies[i]].studie+"</p></div>");
            }else{
                console.log("Geen 3e jaars aangeduid")
            }
    }
})