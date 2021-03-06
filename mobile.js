$(document).ready(function(){

    var formPage = 0;
    const MAX_FORM_PAGES = 6;
    const LAST_FORM_PAGE = 7;

    var repeatButtonState = 2;

    var totalTimeString = "4:16";
    var totalTimeInt = (4 * 60) + 16;

    var bgMusic = $("#clarity")[0];
    var isPlaying = true;

    bgMusic.addEventListener('ended', function() {
        console.log("Made it");
        this.currentTime = 0;
        this.volume = 0.7
        this.play();
    }, false);

    $("body").css("min-height", screen.height);
    $("body").css("min-width", screen.width);
    $(".mainContainer").css("min-height", screen.height);
    $(".mainContainer").css("min-width", screen.width);
    $(".blackGradient").css("min-height", screen.height);
    $(".blackGradient").css("min-width", screen.width);

    $(".logoCenter").css("opacity", "1");

    $(".middleContainer").hide();
    $("#formPage0").show();
    $("#formPage1").hide();
    $("#formPage2").hide();
    $("#formPage3").hide();
    $("#formPage4").hide();
    $("#formPage5").hide();
    $("#formPage6").hide();
    $("#formPage7").hide();
    updateProgressBar();

    $("#totalTime").html(totalTimeString);


    $("#submitButton").click(function(){
        var emptyFieldCount = 0;
        $(":text, select").each(function() {
            if($(this).val() === "")
                emptyFieldCount++;
            if($(this).val() == "None")
                emptyFieldCount++;
        });

        if (emptyFieldCount > 0)
            alert("Complete all fields!");
        else {
            $("#mainForm").submit();

            $("#playButton").toggleClass("spoticon-play-16");
            $("#playButton").toggleClass("spoticon-pause-16");
            $("#formPage" + formPage).hide();
            $("#formPage" + formPage).css("opacity", "0");
            formPage++;
            $("#formPage" + formPage).show();
            $("#formPage" + formPage).css("opacity", "1");
        }
        $(".mainFormDiv").css("margin-top", ($(".contentContainer").height() - $(".mainFormDiv").height()) / 2);
    });

    $(".logoCenter").click(function(){
        $(".logoCenter").css("opacity", "0");
        $(".logoCenter").hide();
        $(".middleContainer").show();
        $(".middleContainer").css("opacity", "1");
        $("#formPage" + formPage).css("opacity", "1");
        $(".spacerDiv").hide();
        $(".contentContainer").css("min-height", screen.height - 90);
        $(".mainFormDiv").css("margin-top", ($(".contentContainer").height() - $(".mainFormDiv").height()) / 2);
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
        $(".mainFormDiv").css("margin-top", ($(".contentContainer").height() - $(".mainFormDiv").height()) / 2);
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
        $(".mainFormDiv").css("margin-top", ($(".contentContainer").height() - $(".mainFormDiv").height()) / 2);
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
            bgMusic.volume = 0.7
            bgMusic.play();
            bgMusic.animate({volume: 1}, 1000);
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
        $(".mainFormDiv").css("margin-top", ($(".contentContainer").height() - $(".mainFormDiv").height()) / 2);
        updateProgressBar();
    });

    function updateProgressBar() {
        var barWidth = (formPage / MAX_FORM_PAGES) * 100;
        $(".progressBarFG").css("width", barWidth + "%");
        updateElapsedTime();
    }

    function updateElapsedTime() {
        var elapsedTimeInt = Math.round(totalTimeInt * (formPage / MAX_FORM_PAGES));
        var elapsedTimeString = "" + Math.floor(elapsedTimeInt / 60) + ":";
        if ((elapsedTimeInt % 60) < 10)
            elapsedTimeString += "0" + (elapsedTimeInt % 60);
        else
            elapsedTimeString += (elapsedTimeInt % 60);
        $("#elapsedTime").html(elapsedTimeString);
    }

});