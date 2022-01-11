$(function() {
    $(".toggle").click(toggleMenu);
    $(".m_nav").on("click", "li", toggleMenu);
});

function toggleMenu(event) {
    $(".toggle").toggleClass("active");
    $(".m_nav").slideToggle();
}
function close_popup(v1){
    $(".popup." + v1).fadeOut(300);
}
function open_popup(v1){
    $(".popup." + v1).fadeIn(300);
}