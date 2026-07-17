// 3 seconds baad popup page par redirect
window.addEventListener("load", function () {
    setTimeout(function () {
        window.location.href = "pop.html";
    }, 6000); // 3 seconds
});

window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("warningPopup").classList.add("show");
    }, 3000);
});
