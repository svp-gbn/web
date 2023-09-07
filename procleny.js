var stanovySlided = false;
$(".stanovy-dropdown").click(function () {
    if (stanovySlided === false) {
        $(".stanovy-dropdown").attr("src", "dropup.svg")
    $(".stanovy-schovany").slideDown();
    stanovySlided = true;
    } else {
        $(".stanovy-dropdown").attr("src", "dropdown.svg")
    $(".stanovy-schovany").slideUp();
     stanovySlided = false;
    } 
}
    )

    var formSlided = false;
$(".form-dropdown").click(function () {
    if (formSlided === false) {
        $(".form-dropdown").attr("src", "dropup.svg")
    $(".form-schovany").slideDown();
    formSlided = true;
    } else {
        $(".form-dropdown").attr("src", "dropdown.svg")
    $(".form-schovany").slideUp();
     formSlided = false;
    } 
}
    )
