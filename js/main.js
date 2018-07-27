$("#btnaddmenu").click(function () {
    if ($("#addmenu").hasClass("viewmenu")) {
        $("#addmenu").removeClass("viewmenu");
        $("#addmenu").addClass("hidemenu");
    } else {
        $("#addmenu").removeClass("hidemenu");
        $("#addmenu").addClass("viewmenu");
    }
});
let obj;
let styleavto = "СТАНДАРТ++";
let markavto = 'mercedes';
let classmark;
$('.changepic').hover(function () {

    $('#selectStart').removeClass("selectedItem");

    $(obj).removeClass("selectedItem");
    obj = $(this);
    $(obj).addClass("selectedItem");
    styleavto = $(this)[0].innerText;
    styleavto = styleavto.substring(3);

    chgcar();
    // console.dir($(this)[0].innerText);
});
$(".markavto").click(function () {
    if (classmark) classmark.removeClass("chgcar");
    markavto = $(this)[0].id;
    $(this).addClass("chgcar");
    classmark = $(this);
    chgcar();
});
function chgcar() {
    $('#maincar').attr('src', 'img/' + markavto + '/' + styleavto.toLowerCase() + '.jpg');
    let price = 0;
    let iconview = []

    switch (markavto) {
        case 'citroen':
            price += 5000
            break;
        case 'mazda':
            price += 10000
            break;
        case 'mercedes':
            price += 15000
            break;
    }
    switch (styleavto) {
        case 'МИНИМАЛЬНЫЙ':
            { price += 9000; iconview = ['оптика', 'зеркало', 'пороги', 'ручки']; }
            break;
        case 'СТАНДАРТ':
            { price += 10000; iconview = ['оптика', 'зеркало', 'пбампер', 'ручки', 'полкапот', 'полкрыло']; }
            break;
        case 'СТАНДАРТ+':
            { price += 11000; iconview = ['оптика', 'зеркало', 'пбампер', 'ручки', 'капот', 'полкрыло']; }
            break;
        case 'СТАНДАРТ++':
            { price += 12000; iconview = ['оптика', 'зеркало', 'пбампер', 'ручки', 'капот', 'крыло']; }
            break;
        case 'СТАНДАРТ+++':
            { price += 13000; iconview = ['оптика', 'зеркало', 'пбампер', 'ручки', 'капот', 'крыло', 'збампер']; }
            break;
        case 'ЦЕЛИКОМ':
            { price += 14000; iconview = ['оптика', 'зеркало', 'пбампер', 'ручки', 'капот', 'крыло', 'збампер', 'двери', 'пороги']; }
            break;
        case 'ОПТИКА':
            { price += 8000; iconview = ['оптика']; }
            break;
        case 'ПОРОГИ ВНУТРЕННИЕ':
            { price += 7000; iconview = ['пороги']; }
            break;
        case 'ПОРОГИ НАРУЖНИЕ':
            { price += 6000; iconview = ['пороги']; }
            break;
        case 'ДВЕРИ (4ШТ)':
            { price += 5000; iconview = ['двери']; }
            break;
        case 'ЗАДНИЕ КРЫЛЬЯ':
            { price += 4000; iconview = ['крыло']; }
            break;
        case 'КАПОТ':
            { price += 3000; iconview = ['капот']; }
            break;
        case 'ПЕРЕДНИЙ БАМПЕР':
            { price += 2000; iconview = ['пбампер']; }
            break;
        case 'ЗАДНИЙ БАМПЕР':
            { price += 1000; iconview = ['збампер']; }
            break;
    }
    $("#prices")[0].innerHTML = price + ' грн';
    $('#addico').empty();
    for (i = 0; i < iconview.length; i++) {
        $('#addico').append('<img src="img/ico/' + iconview[i] + '.png" alt="car" style="width: 10%;">')
    }
   
}


