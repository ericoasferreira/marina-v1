// $('#accordionFlushExample .collapse').on('show.bs.collapse', function (e) {
//     var actives = $('#accordionFlushExample').find('.in, .collapsing');
//     actives.each( function (index, element) {
//         $(element).collapse('hide');
//     })
// })

$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#accordionFlushExample").collapse("hide");
    });
});