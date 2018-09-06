$(document).ready(function(){

    var formPage = 0;
    const MAX_FORM_PAGES = 5;
    const LAST_FORM_PAGE = 6;

    var repeatButtonState = 2;

    $(".logoCenter").css("opacity", "1");

    $(".middleContainer").hide();
    $("#formPage0").show();
    $("#formPage1").hide();
    $("#formPage2").hide();
    $("#formPage3").hide();
    $("#formPage4").hide();
    $("#formPage5").hide();
    $("#formPage6").hide();
    updateProgressBar();

    $(".logoCenter").click(function(){
        $(".logoCenter").css("opacity", "0");
        $(".logoCenter").hide();
        $(".middleContainer").show();
        $(".middleContainer").css("opacity", "1");
        $("#formPage" + formPage).css("opacity", "1");
    });

    $("#shuffleButton").click(function(){
        $("#shuffleButton").toggleClass("control-button--active");
        $("#shuffleButton").toggleClass("control-button--active-dot");
    });

    $("#repeatButton").click(function(){
        if (repeatButtonState == 2) {
            $("#repeatButton").toggleClass("control-button--active");
            $("#repeatButton").toggleClass("control-button--active-dot");
            $("#repeatButton").toggleClass("spoticon-repeatonce-16");
            $("#repeatButton").toggleClass("spoticon-repeat-16");
            repeatButtonState = 0;
        } else if (repeatButtonState == 1) {
            $("#repeatButton").toggleClass("spoticon-repeat-16");
            $("#repeatButton").toggleClass("spoticon-repeatonce-16");
            repeatButtonState++;
        } else if (repeatButtonState == 0) {
            $("#repeatButton").toggleClass("control-button--active");
            $("#repeatButton").toggleClass("control-button--active-dot");
            repeatButtonState++;
        }
    });

    $("#backButton").click(function(){
        if (formPage > 1 && formPage <= MAX_FORM_PAGES) {
            $("#formPage" + formPage).hide();
            $("#formPage" + formPage).css("opacity", "0");
            formPage--;
            $("#formPage" + formPage).show();
            $("#formPage" + formPage).css("opacity", "1");
        }
        updateProgressBar();
    });

    $("#forwardButton").click(function(){
        if (formPage < MAX_FORM_PAGES && formPage > 0) {
            $("#formPage" + formPage).hide();
            $("#formPage" + formPage).css("opacity", "0");
            formPage++;
            $("#formPage" + formPage).show();
            $("#formPage" + formPage).css("opacity", "1");
        }
        updateProgressBar();
    });

    $("#playButton").click(function(){
        if (formPage == 0) {
            $("#playButton").toggleClass("spoticon-play-16");
            $("#playButton").toggleClass("spoticon-pause-16");
            $("#formPage" + formPage).hide();
            $("#formPage" + formPage).css("opacity", "0");
            formPage++;
            $("#formPage" + formPage).show();
            $("#formPage" + formPage).css("opacity", "1");
        }
        if (formPage == MAX_FORM_PAGES) {
            $("#playButton").toggleClass("spoticon-play-16");
            $("#playButton").toggleClass("spoticon-pause-16");
            $("#formPage" + formPage).hide();
            $("#formPage" + formPage).css("opacity", "0");
            formPage++;
            $("#formPage" + formPage).show();
            $("#formPage" + formPage).css("opacity", "1");
        }
        updateProgressBar();
    });

    function updateProgressBar() {
        var barWidth = (formPage / MAX_FORM_PAGES) * 100;
        $(".progressBarFG").css("width", barWidth + "%");
    }

});