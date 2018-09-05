$(document).ready(function(){

    var formPage = 0;
    const MAX_FORM_PAGES = 4;

    var repeatButtonState = 2;

    $("#formPage0").show();
    $("#formPage1").hide();
    $("#formPage2").hide();
    $("#formPage3").hide();
    $("#formPage4").hide();
    $("#formPage5").hide();
    updateProgressBar();

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
        if (formPage > 0) {
            $("#formPage" + formPage).hide();
            formPage--;
            $("#formPage" + formPage).show();
        }
        updateProgressBar();
    });

    $("#forwardButton").click(function(){
        if (formPage < MAX_FORM_PAGES) {
            $("#formPage" + formPage).hide();
            formPage++;
            $("#formPage" + formPage).show();
        }
        updateProgressBar();
    });

    $("#playButton").click(function(){
        //$("#mainForm").submit();
        $("#formPage" + formPage).hide();
        formPage = 5;
        $("#formPage" + formPage).show();
    });

    function updateProgressBar() {
        var barWidth = (formPage / MAX_FORM_PAGES) * 100;
        $(".progressBarFG").css("width", barWidth + "%");
    }

});