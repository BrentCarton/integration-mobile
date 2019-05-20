$(function () {
    console.log("ready!");

    Start();
    EersteBachelor();
    TweedeBachelor();
    DerdeBachelor();

    function Start() {
        $(".slideshow-een").show();
        $(".bachelorEen").css("background-color", "#ff0000");
        $(".bachelorEen").css("color", "white");

        $(".slideshow-twee").hide();
        $(".bachelorTwee").css("background-color", "white");
        $(".bachelorTwee").css("color", "#ff0000");

        $(".slideshow-drie").hide();
        $(".bachelorDrie").css("background-color", "white");
        $(".bachelorDrie").css("color", "#ff0000");
    }


    function EersteBachelor() {
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

    function TweedeBachelor() {
        $(".bachelorTwee").click(function () {
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

    function DerdeBachelor() {
        $(".bachelorDrie").click(function () {
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
});
