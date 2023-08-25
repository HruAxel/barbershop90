$(document).ready(function () {
    $("#logo").fadeIn(1000);
    $("a").fadeIn(3000);
    $(".content").fadeIn(4000);
});

$(".card_1").mouseenter(function () {
    $(".jpg_text_balazs").slideDown(500);
});

$(".card_1").mouseleave(function () {
    $(".jpg_text_balazs").slideUp(500);
});


$(".card_2").mouseenter(function () {
    $(".jpg_text_amanda").slideDown(500);
});

$(".card_2").mouseleave(function () {
    $(".jpg_text_amanda").slideUp(500);
});

$("input").mouseenter(function () {
    $(this).css({
        "background-color": "#cccccc",
    });
});
$("input").mouseleave(function () {
    $(this).css("background-color", "#ffffff");
});

$("button").mouseenter(function () {
    $(this).css({
        "color": "#fff",
        "background-color": "#000000",
        "scale": "1.1",
    });
});
$("button").mouseleave(function () {
    $(this).css({
        "color": "#000000",
        "background-color": "#fff",
        "scale": "1",
    });
});
$("button").click(function () {
    $(this).css({
        "scale": "1"
    });
});
$(window).resize(function() {
    if (window.matchMedia('(max-width: 1024px)').matches) {
        $("#logo").click(function () {
            $(".hidden").toggle(500);
        });
    }
});




document.forms[0].onsubmit = function (e) {
    e.preventDefault();

    fetch('process.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.getElementById('user_name').value,
            time: document.getElementById('date_time').value,
            barber: document.getElementById('barbers').value
        })
    })
        .then(function (adatok) {
            return adatok.json()
        })
        .then(function (adatok) {

        })
}