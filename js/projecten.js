$(function () {
    console.log("ready!");
    $(function () {
        $.ajax({
            url : "data/projecten.json",
            dataType : "json"
        }).done(function(data){
            console.log("check");
            Start(data);
            EersteBachelor(data);
            TweedeBachelor(data);
            DerdeBachelor(data);
            Connect();
        }).fail(function (a,b){
            console.log(a,b);
        });
    });
    function Start(data) {
        $(".slideshow-een").show();
        var projecten1 = data[0];
        for (var i in projecten1){
            console.log(i);
            $(".slideshow-een").append(
                "<div class='mySlides fade' id='"+i+"'><img src='../Images/"+i+".jpg'><div class='usb-on on"+i+"'><img src='Images/USB-icon.png' id='"+i+"'></div>  <div class='usb-off off"+i+"'><img src='Images/USB-iconZwart.png' id='"+i+"'></div><h1>"+projecten1[i].project+"</h1><h2>"+projecten1[i].student+"</h2><p>"+projecten1[i].pojectbeschrijving+"</p><p>"+projecten1[i].email+"</p><p>"+projecten1[i].telefoonnummer+"</p><p>"+projecten1[i].studie+"</p></div>"
            );
        };
    }

    function EersteBachelor(data) {
        $(".bachelorEen").click(function () {
            /*============================================
                                1STE
            ============================================*/
            $(".slideshow-een").show();
            $(this).css("background-color", "#ff0000");
            $(this).css("color", "white");
            /*============================================
                                2DE
            ============================================*/
            $(".slideshow-twee").hide();
            $(".bachelorTwee").css("background-color", "white");
            $(".bachelorTwee").css("color", "#ff0000");
            /*============================================
                                3DE
            ============================================*/
            $(".slideshow-drie").hide();
            $(".bachelorDrie").css("background-color", "white");
            $(".bachelorDrie").css("color", "#ff0000");
        });
    }

    function TweedeBachelor(data) {
        /*============================================
                                DATA
            ============================================*/
        $(".bachelorTwee").one("click",function () {    
            var projecten2 = data[1];
            for (var i in projecten2){
                console.log(i);
                $(".slideshow-twee").append(
                    "<div class='mySlides fade' id='"+i+"'><img src='../Images/"+i+".jpg'><div class='usb-on on"+i+"'><img src='Images/USB-icon.png' id='"+i+"'></div>  <div class='usb-off off"+i+"'><img src='Images/USB-iconZwart.png' id='"+i+"'></div><h1>"+projecten2[i].project+"</h1><h2>"+projecten2[i].student+"</h2><p>"+projecten2[i].pojectbeschrijving+"</p><p>"+projecten2[i].email+"</p><p>"+projecten2[i].telefoonnummer+"</p><p>"+projecten2[i].studie+"</p></div>"
                );
            };
        });

        $(".bachelorTwee").click(function () {
            Connect();
            /*============================================
                                1STE
            ============================================*/
            $(".slideshow-een").hide();
            $(".bachelorEen").css("background-color", "white");
            $(".bachelorEen").css("color", "#ff0000");
            /*============================================
                                2DE
            ============================================*/
            $(".slideshow-twee").show();
            $(this).css("background-color", "#ff0000");
            $(this).css("color", "white");
            /*============================================
                                3DE
            ============================================*/
            $(".slideshow-drie").hide();
            $(".bachelorDrie").css("background-color", "white");
            $(".bachelorDrie").css("color", "#ff0000");
        });
    }

    function DerdeBachelor(data) {
        /*============================================
                                DATA
            ============================================*/
        $(".bachelorDrie").one("click",function () {    
            var projecten3 = data[2];
            for (var i in projecten3){
                console.log(i);
                $(".slideshow-drie").append("<div class='mySlides fade' id='"+i+"'><img src='../Images/"+i+".jpg'><div class='usb-on on"+i+"'><img src='Images/USB-icon.png' id='"+i+"'></div>  <div class='usb-off off"+i+"'><img src='Images/USB-iconZwart.png' id='"+i+"'></div><h1>"+projecten3[i].project+"</h1><h2>"+projecten3[i].student+"</h2><p>"+projecten3[i].pojectbeschrijving+"</p><p>"+projecten3[i].email+"</p><p>"+projecten3[i].telefoonnummer+"</p><p>"+projecten3[i].studie+"</p></div>"
                );
            };
        });
        $(".bachelorDrie").click(function () {
            Connect();
            /*============================================
                                1STE
            ============================================*/
            $(".slideshow-een").hide();
            $(".bachelorEen").css("background-color", "white");
            $(".bachelorEen").css("color", "#ff0000");
            /*============================================
                                2DE
            ============================================*/
            $(".slideshow-twee").hide();
            $(".bachelorTwee").css("background-color", "white");
            $(".bachelorTwee").css("color", "#ff0000");
            /*============================================
                                3DE
            ============================================*/
            $(".slideshow-drie").show();
            $(this).css("background-color", "#ff0000");
            $(this).css("color", "white");
        });
    }

    function Connect(){
        $(".usb-off img").click(function (){
            var id = this.id;
            $(".off"+id).hide();
            $(".on"+id).show();
            console.log(id);
            setCookie(id);
        })
        $(".usb-on img").click(function (){
            var id = this.id;
            console.log(id);
            $(".on"+id).hide();
            $(".off"+id).show();
            deleteCookie();
        })
    }
    
    function setCookie(id){
        var cookie = "id" + id;
        Cookies.set(cookie,id);
    }
    
    function deleteCookie(id){
        var cookie = "id" + id;
        Cookies.remove(cookie);
    }
});
