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
            startSelecties();
            Connect();
            aanduidingScroll();
        }).fail(function (a,b){
            console.log(a,b);
        });
    });
    
    function startSelecties(){
        var cookies = Cookies.get();
        for(var i in cookies){
            var id = cookies[i];
            console.log(id);
            $(".off"+id).hide();
            $(".on"+id).show();
        }
    }
    
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
            $(".eerste").show();
            $(this).css("background-color", "#ff0000");
            $(this).css("color", "white");
            /*============================================
                                2DE
            ============================================*/
            $(".tweede").hide();
            $(".bachelorTwee").css("background-color", "white");
            $(".bachelorTwee").css("color", "#ff0000");
            /*============================================
                                3DE
            ============================================*/
            $(".derde").hide();
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
                $(".tweede").prepend("<a class='dot' href='#' id='"+i+"'></a>");
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
            $(".eerste").hide();
            $(".bachelorEen").css("background-color", "white");
            $(".bachelorEen").css("color", "#ff0000");
            /*============================================
                                2DE
            ============================================*/
            $(".tweede").show();
            $(this).css("background-color", "#ff0000");
            $(this).css("color", "white");
            /*============================================
                                3DE
            ============================================*/
            $(".derde").hide();
            $(".bachelorDrie").css("background-color", "white");
            $(".bachelorDrie").css("color", "#ff0000");
            aanduidingScroll();
        });
    }

    function DerdeBachelor(data) {
        /*============================================
                                DATA
            ============================================*/
        $(".bachelorDrie").one("click",function () {    
            var projecten3 = data[2];
            for (var i in projecten3){
                $(".derde").prepend("<a class='dot' href='#' id='"+i+"'></a>");
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
            $(".eerste").hide();
            $(".bachelorEen").css("background-color", "white");
            $(".bachelorEen").css("color", "#ff0000");
            /*============================================
                                2DE
            ============================================*/
            $(".tweede").hide();
            $(".bachelorTwee").css("background-color", "white");
            $(".bachelorTwee").css("color", "#ff0000");
            /*============================================
                                3DE
            ============================================*/
            $(".derde").show();
            $(this).css("background-color", "#ff0000");
            $(this).css("color", "white");
            aanduidingScroll();
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
            deleteCookie(id);
        })
    }
    
    function setCookie(id){
        var cookie = "id" + id;
        Cookies.set(cookie,id,{expires:999});
    }
    
    function deleteCookie(id){
        var cookie = "id" + id;
        console.log(cookie);
        Cookies.remove(cookie);
    }
    
    function aanduidingScroll(){
        if($("div:visible").hasClass("eerste")){
            console.log("een");
            
        }else if($("div:visible").hasClass("tweede")){
            console.log("twee");
            
        }else if($("div:visible").hasClass("derde")){
            console.log("drie");
        }
    }
});
