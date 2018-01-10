setInterval(function () {
    var now = chrome.extension.getBackgroundPage().getTime();

    $("#currentTime").text("现在时间：" + now);

}, 500);  