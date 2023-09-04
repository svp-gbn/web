document.querySelector("#close").addEventListener("click", closing)
function closing () {
    document.querySelector("#reklama").style.display = "none";
}
$(".popis").hide();
function show () {
$(".nadpis").slideDown("slow");
};
function popis () {
    $(".popis").slideDown("slow");
}
show ();
setInterval(popis, 1500)
