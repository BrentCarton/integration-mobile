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
            $(".resultaat").text("");
            var input, filter, persoon1, persoon2, persoon3;
            input = $(this).val();
            filter = input.toUpperCase();
            console.log(input);
            if(input == ""){
                console.log("leeg");
                $(".resultaat").hide();
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
                student = eersteJaar[i].student;
                $(".resultaat").append("<p><a href='#project"+i+"'>"+student+"</a></p>");
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
                student = tweedeJaar[i].student;
                $(".resultaat").append("<p><a href='#project"+i+"'>"+student+"</a></p>")
                var id = i;
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
                student = derdeJaar[i].student;
                $(".resultaat").append("<p><a href='#project"+i+"'>"+student+"</a></p>")
                var id = i;
            } else {
                console.log("fail");
            }
        }
    };
})