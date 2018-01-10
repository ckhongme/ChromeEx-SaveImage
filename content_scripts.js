setInterval(function () {
    chrome.runtime.sendMessage(
        { cmd: 'get-time' },
        function (response) {
            var timeNode = document.getElementById("testCurrentTime");
            if (timeNode) {
                timeNode.innerText = "现在时间是：" + response;
            }
            else {
                timeNode = document.createElement("p");
                timeNode.id = "testCurrentTime";
                timeNode.innerText = '现在时间：' + response;
                document.body.insertBefore(timeNode, document.body.firstChild);
            }
        }
    );


}, 500); 