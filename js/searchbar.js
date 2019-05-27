$(function(){
    $.ajax({
        url : "data/projecten.json",
        dataType : "json"
    }).done(function(data){
        zoek(data);
    }).fail(function (a,b){
        console.log(a,b);
    });
    function zoek(data){
        $("input").on("keyup",function(){
            $(".eerste,.tweede,.derde").hide();
            $(".resultaat").text("");
            var input, filter, persoon1, persoon2, persoon3;
            input = $(this).val();
            filter = input.toUpperCase();
            console.log(input);
            if(input == ""){
                console.log("leeg");
                $(".resultaat").hide();
                $(".eerste").show();
            }else{
                $(".resultaat").show();
            }
            eersteJaar= data[0];
            eersteJaars(eersteJaar, input, filter);
            tweedeJaar = data[1];
            tweedeJaars(tweedeJaar, input, filter);
            derdeJaar = data[2];
            derdejaars(derdeJaar, input, filter);  
        })
    }
    function eersteJaars(eersteJaar, input, filter){
        for (var i in eersteJaar) {
            naam = eersteJaar[i].student;
            if (naam.toUpperCase().indexOf(filter) > -1) {
                console.log("succes");
                $(".resultaat").append("<div class='eersteResultaat'><div class='mySlides fade' id='project"+i+"'><img src='Images/"+i+".jpg'><div class='usb-on on"+i+"'><img src='Images/USB-icon.png' id='"+i+"'></div>  <div class='usb-off off"+i+"'><img src='Images/USB-iconZwart.png' id='"+i+"'></div><h1>"+eersteJaar[i].project+"</h1><h2>"+eersteJaar[i].student+"</h2><p>"+eersteJaar[i].pojectbeschrijving+"</p><p>"+eersteJaar[i].email+"</p><p>"+eersteJaar[i].telefoonnummer+"</p><p>"+eersteJaar[i].studie+"</p></div>")
            } else {
                console.log("fail");
            }
        }
    };
    function tweedeJaars(tweedeJaar, input, filter){
        for (var i in tweedeJaar) {
            naam = tweedeJaar[i].student;
            if (naam.toUpperCase().indexOf(filter) > -1) {
                console.log("succes");
                $(".resultaat").append("<div class='tweedeResultaat'><div class='mySlides fade' id='project"+i+"'><img src='Images/"+i+".jpg'><div class='usb-on on"+i+"'><img src='Images/USB-icon.png' id='"+i+"'></div>  <div class='usb-off off"+i+"'><img src='Images/USB-iconZwart.png' id='"+i+"'></div><h1>"+tweedeJaar[i].project+"</h1><h2>"+tweedeJaar[i].student+"</h2><p>"+tweedeJaar[i].pojectbeschrijving+"</p><p>"+tweedeJaar[i].email+"</p><p>"+tweedeJaar[i].telefoonnummer+"</p><p>"+tweedeJaar[i].studie+"</p></div>")
            } else {
                console.log("fail");
            }
        }
    };
    function derdejaars(derdeJaar, input, filter){
        for (var i in derdeJaar) {
            naam = derdeJaar[i].student;
            if (naam.toUpperCase().indexOf(filter) > -1) {
                console.log("succes");
                $(".resultaat").append("<div class='derdeResultaat'><div class='mySlides fade' id='project"+i+"'><img src='Images/"+i+".jpg'><div class='usb-on on"+i+"'><img src='Images/USB-icon.png' id='"+i+"'></div>  <div class='usb-off off"+i+"'><img src='Images/USB-iconZwart.png' id='"+i+"'></div><h1>"+derdeJaar[i].project+"</h1><h2>"+derdeJaar[i].student+"</h2><p>"+derdeJaar[i].pojectbeschrijving+"</p><p>"+derdeJaar[i].email+"</p><p>"+derdeJaar[i].telefoonnummer+"</p><p>"+derdeJaar[i].studie+"</p></div>")
            } else {
                console.log("fail");
            }
        }
    };
})