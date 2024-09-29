function loadTags(keyName) {
    fetch("/api_tag/get_tags/" + keyName).then(_0x2268f0 => _0x2268f0.json()).then(json => {
        var tagsContainer = document.getElementById(keyName);
        if (tagsContainer) {
            if ("r18" === keyName) tagsContainer.innerHTML += formatForR17_9(json); else {
                if ("Illustrator" === keyName) for (let englishTag in json) {
                    {
                        let htmlStr = "<p>" + englishTag + "</p><form class=\"layui-form\" style=\"display: flex; flex-wrap: wrap;\">",
                            chineseTag = json[englishTag];
                        Object.entries(chineseTag).forEach(([_0x48784a, _0x58f74e], _0x175528) => {
                            let _0x579066 = "but" + keyName + englishTag + _0x175528,
                                _0x2303fb = _0x58f74e.replace("artist:", "");
                            htmlStr += "\n                    <div style=\"display: flex; flex-direction: column; align-items: center; margin-right: 10px; margin-bottom: 10px;\">\n                        <img src=\"" + ("/static/images/artist_preview/" + (_0x48784a + "_" + _0x2303fb + ".webp")) + "\" alt=\"" + _0x58f74e + "\" class=\"illustrator-image\"> <!-- 添加图像 -->\n                        <div class=\"tagbutton\" id=\"" + _0x579066 + "\">\n                            <div class=\"buttext\">\n                                <span class=\"english\">" + _0x58f74e + "</span>\n                                <span class=\"chinese\">" + _0x48784a + "</span>\n                            </div>\n                        </div>\n                    </div>";
                        });
                        htmlStr += "</form><hr>";
                        tagsContainer.innerHTML += htmlStr;
                    }
                } else for (let tagKey in json) {
                    {
                        let classFormName = "<p>" + tagKey + "</p><form class=\"layui-form\">",
                            tag = json[tagKey];
                        Object.entries(tag).forEach(([_0x3de2a2, _0x3db2b9], _0x1b3be2) => {
                            classFormName += "\n                        <div class=\"tagbutton\" id=\"" + ("but" + keyName + tagKey + _0x1b3be2) + "\">\n                            <div class=\"minus\" style=\"display: none;\">-</div>\n                            <div class=\"plus\" style=\"display: none;\">+</div>\n                            <div class=\"buttext\">\n                                <span class=\"english\">" + _0x3db2b9 + "</span>\n                                <span class=\"chinese\">" + _0x3de2a2 + "</span>\n                            </div>\n                        </div>";
                        });
                        classFormName += "</form><hr>";
                        tagsContainer.innerHTML += classFormName;
                    }
                }
            }
        } else console.error("Container for category " + keyName + " not found");
    }).catch(_0xaf1ce1 => console.error("Error:", _0xaf1ce1));
}
function formatForR17_9(tagsGroup) {
    let _0x23aca9 = "<form class=\"layui-form r18\">";
    for (let _0x104763 in tagsGroup) {
        {
            let _0x2a3ed0 = tagsGroup[_0x104763];
            _0x23aca9 += "<p>" + _0x104763 + "</p>";
            Object.entries(_0x2a3ed0).forEach(([_0x197e44, _0x5ba8fd], _0x5df075) => {
                let _0x2a6faf = "butr18" + _0x5df075 + Math.random().toString(36).substring(2, 18);
                _0x23aca9 += "\n                <div class=\"tagbutton\" id=\"" + _0x2a6faf + "\">\n                    <div class=\"minus\" style=\"display: none;\">-</div>\n                    <div class=\"plus\" style=\"display: none;\">+</div>\n                    <div class=\"buttext\">\n                        <span class=\"english\">" + _0x197e44 + "</span>\n                        <span class=\"chinese\">" + _0x5ba8fd + "</span>\n                    </div>\n                </div>";
            });
        }
    }
    return _0x23aca9 += "</form>";
}
var flagminus = "none",
    flagenglish = "inline-block",
    flagchinese = "inline-block",
    flagplus = "none",
    flagdel = "none",
    flagweightl = "{",
    flagweightr = "}";
function toast(_0x249fc8, _0x3311e0, _0x1983eb) {
    var _0x1c0748 = document.createElement("div");
    _0x1c0748.setAttribute("id", "toast");
    _0x1c0748.setAttribute("class", "toast_" + _0x3311e0 || "toast_info");
    document.getElementsByTagName("body")[0].append(_0x1c0748);
    $("#toast").text(_0x249fc8);
    $("#toast").fadeIn();
    setTimeout(function () {
        $("#toast").fadeOut();
    }, _0x1983eb);
}
function generate() {
    var _0x23096b = "";
    $("#elements-container .english").each(function () {
        _0x23096b += $(this).html() + ", ";
    });
    document.getElementById("tagarea").value = _0x23096b;
}
function copytag() {
    generate();
    document.getElementById("tagarea").select();
    document.execCommand("copy");
    toast("复制成功！", "success", "1000");
    submittag();
}
function cleartag() {
    $("#elements-container .tagtext").each(function () {
        console.log($(this).parent().attr("id"));
        var _0x224a3c = $(this).parent().attr("id");
        console.log(_0x224a3c);
        $("#" + _0x224a3c).remove();
        console.log(_0x224a3c);
        _0x224a3c = _0x224a3c.replace("tag", "but");
        console.log(_0x224a3c);
        $("#" + _0x224a3c).children(".buttext").removeClass("checked");
    });
    generate();
}
layui.use("form", function () {
    var form = layui.form;
    form.on("switch(switchr18)", function (data) {
        this.checked ? (console.log(this.checked), $(".r18").css("display", "block"), $(".nr18").css("display", "none")) : ($(".r18").css("display", "none"), $(".nr18").css("display", "block"));
    });
    form.on("switch(switchrDarkMode)", function (data) {
        if (this.checked) {
            var body = document.querySelector('body');
            body.classList.toggle('dark');
            let checkbox = document.querySelector('.dark-switch');
            checkbox.checked = 1;
        }
        else {
            var body = document.querySelector('body');
            body.classList.toggle('day');
            let checkbox = document.querySelector('.dark-switch');
            checkbox.checked = 0;
        }
    });
    form.on("switch(switchchinese)", function (data) {
        this.checked ? (console.log(this.checked), $(".chinese").css("display", "contents"), flagchinese = "inline-block") : (console.log(this.checked), $(".chinese").css("display", "none"), flagchinese = "none");
    });
    form.on("switch(switchenglish)", function (data) {
        this.checked ? ($(".english").css("display", "contents"), flagenglish = "none") : ($(".english").css("display", "none"), flagenglish = "none");
    });
    form.on("switch(switchminus)", function (data) {
        this.checked ? ($(".minus").css("display", "inline-block"), flagminus = "inline-block") : ($(".minus").css("display", "none"), flagminus = "none");
    });
    form.on("switch(switchplus)", function (data) {
        this.checked ? ($(".plus").css("display", "inline-block"), flagplus = "inline-block") : ($(".plus").css("display", "none"), flagplus = "none");
    });
    form.on("switch(switchdel)", function (data) {
        this.checked ? ($(".del").css("display", "inline-block"), flagdel = "inline-block") : ($(".del").css("display", "none"), flagdel = "none");
    });
    form.on("switch(switchicon)", function (data) {
        this.checked ? (console.log("yes"), $(".english").each(function () {
            {
                console.log($(this).html());
                var _0x40c303 = new RegExp("\\{", "g"),
                    _0x3ce1cc = new RegExp("\\}", "g");
                $(this).html($(this).html().replace(_0x40c303, "("));
                $(this).html($(this).html().replace(_0x3ce1cc, ")"));
            }
        }), flagweightl = "(", flagweightr = ")") : ($(".english").each(function () {
            console.log($(this).html());
            var _0x1163d2 = new RegExp("\\(", "g"),
                _0x574a69 = new RegExp("\\)", "g");
            $(this).html($(this).html().replace(_0x1163d2, "{"));
            $(this).html($(this).html().replace(_0x574a69, "}"));
        }), flagweightl = "{", flagweightr = "}");
        generate();
    });
    layui.form.render();
});
$(document).on("click", ".minus", function () {
    console.log("Minus-");
    var _0x5bca44 = $(this).parent().attr("id");
    if (_0x5bca44 = _0x5bca44.replace("tag", "but"), "{" == (_0x3b0068 = $("#" + _0x5bca44 + " .english").html()).substr(0, 1) || "(" == _0x3b0068.substr(0, 1)) _0x3b0068 = _0x3b0068.slice(1, _0x3b0068.length - 1), $("#" + _0x5bca44 + " .english").html(_0x3b0068), _0x5bca44 = _0x5bca44.replace("but", "tag"), $("#" + _0x5bca44 + " .english").html(_0x3b0068); else {
        var _0x3b0068 = "[" + $("#" + $(this).parent().attr("id") + " .english").html() + "]";
        $("#" + _0x5bca44 + " .english").html(_0x3b0068);
        _0x5bca44 = _0x5bca44.replace("but", "tag");
        $("#" + _0x5bca44 + " .english").html(_0x3b0068);
    }
    generate();
});
$(document).on("click", ".plus", function () {
    console.log("Plus-");
    var _0x5d25d1 = $(this).parent().attr("id");
    if (_0x5d25d1 = _0x5d25d1.replace("tag", "but"), "[" == (_0x3a0627 = $("#" + _0x5d25d1 + " .english").html()).substr(0, 1)) _0x3a0627 = _0x3a0627.slice(1, _0x3a0627.length - 1), $("#" + _0x5d25d1 + " .english").html(_0x3a0627), _0x5d25d1 = _0x5d25d1.replace("but", "tag"), $("#" + _0x5d25d1 + " .english").html(_0x3a0627); else {
        var _0x3a0627 = flagweightl + _0x3a0627 + flagweightr;
        $("#" + _0x5d25d1 + " .english").html(_0x3a0627);
        _0x5d25d1 = _0x5d25d1.replace("but", "tag");
        $("#" + _0x5d25d1 + " .english").html(_0x3a0627);
    }
    generate();
});
$(document).on("click", ".del", function () {
    var _0x58aa9a = $(this).parent().attr("id");
    $("#" + _0x58aa9a).remove();
    _0x58aa9a = _0x58aa9a.replace("tag", "but");
    $("#" + _0x58aa9a).children(".buttext").removeClass("checked");
    generate();
});
$(document).on("click", ".buttext", function () {
    var _0x4e54e1 = $(this).parent().attr("id");
    if (_0x4e54e1 = _0x4e54e1.replace("but", "tag"), $(this).is(".checked")) $(this).removeClass("checked"), $("#" + _0x4e54e1).remove(), generate(); else {
        $(this).children(".english").html();
        $(this).addClass("checked");
        var _0x119db7 = "<div class='draggable-element' id='" + _0x4e54e1 + "'><div class='minus' style='display:" + flagminus + "'>-</div><div class='plus' style='display:" + flagplus + "'>+</div><div class='tagtext'><span id='eng" + $(this).parent().attr("id") + "' class='english' style='display:" + flagenglish + "'>" + $(this).children(".english").html() + "</span><span class='chinese' style='display:" + flagchinese + "'>" + $(this).children(".chinese").html() + "</span></div><div class='del' style='display:" + flagdel + "'><i class='layui-icon'>&#xe640;</i></div></div>";
        $("#addtag").before(_0x119db7);
        $(function () {
            $(".draggable-element").arrangeable();
            $("div").arrangeable({
                "dragSelector": ".drag-area"
            });
        });
        generate();
    }
});
var verno = "5",
    jdno = "7";
localStorage.getItem("uid") == verno && localStorage.getItem("jd") != jdno && (document.getElementById("jd").style.display = "block", localStorage.setItem("jd", jdno));
localStorage.getItem("uid") != verno && (document.getElementById("hint").style.display = "block", localStorage.setItem("uid", verno));
document.getElementById("tagarea2").value = localStorage.getItem("tag2");
$(function () {
    $(".draggable-element").arrangeable();
    $("div").arrangeable({
        "dragSelector": ".drag-area"
    });
});