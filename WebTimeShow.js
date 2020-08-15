$("#time").on("mouseenter", function (ev) {
    var vTime = new Date();
    $(this).text(vTime);
    });
function fClock(  ) {
    var eleClock = document.getElementById("clock");
    if (eleClock !== null) {
        var oTime = new Date();
        var HH = oTime.getHours();
        var MM = oTime.getMinutes();
        var SS = oTime.getSeconds();
        $("#clock").text(HH + ":" + MM + ":" + SS);
        $("#bar").attr("value", SS);
        } else {
        clearInterval(setClock);
        console.log("clear !");
        };
    };
var setClock = setInterval("fClock()", 1000);