var colors = [
    { clicks: 0, color: "RED"  },
    { clicks: 0, color:  "GREEN" },
    { clicks: 0, color:  "BLUE" }
];

divs = [];

window.onload = function() {
    for (var i = 0; i < colors.length; i++) {
        var elem = document.createElement("div");
        elem.innerHTML = colors[i].clicks;
        elem.style.cssText =
            "height: 100px;width: 200px;border-radius: 10px;font-size: 18px;line-height: 90px;vertical-align: middle;text-align:center;color: white;background-color:" + colors[i].color + ";";
        elem.addEventListener("click", function() {
            addOne(this);
        });
        document.body.appendChild(elem);
        divs.push(elem);
    }
};

function addOne(elem) {
    var newNum = parseInt(elem.textContent) + 1;
    elem.innerHTML = newNum;
}