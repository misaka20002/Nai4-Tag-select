
function sendApiRequest(e) {
    var n = document.getElementById("tagselect").value, t = document.getElementById("max_results").value, s = new URLSearchParams({
        query: n
    }); t && s.append("max_results", t), fetch("search/" + e + "?" + s, {
        method: "GET"
    }).then(e => e.json()).then(e => {
        for (var n = document.getElementById("insertion-point"); n.nextSibling;)n.parentNode.removeChild(n.nextSibling); e.forEach((e, t) => {
            var s = Object.keys(e)[0], a = e[s], r = generateRandomString(6), i = document.createElement("div"); i.className = "tagbutton", i.id = "butsearch" + t + "_" + r, i.innerHTML = `\n                <div class="minus" style="display: none;">-</div>\n                <div class="plus" style="display: none;">+</div>\n                <div class="buttext">\n                    <span class="english">${s}</span>\n                    <span class="chinese">${a}</span>\n                </div>\n            `, n.parentNode.insertBefore(i, n.nextSibling)
        })
    }).catch(e => {
        console.error("Error:", e)
    })
}
function generateRandomString(e) {
    for (var n = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", s = t.length, a = 0; a < e; a++)n += t.charAt(Math.floor(Math.random() * s)); return n
}
function regular_expression() {
    sendApiRequest("regular_expression")
}
function fuzzy_search() {
    sendApiRequest("fuzzy_search")
}
function exact_search() {
    sendApiRequest("exact_search")
}
