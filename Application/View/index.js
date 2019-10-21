$(document).ready(function () {
    var url = '';

    $('.dropdown-toggle').dropdown();
    $('.toast').show();


    $('.option-menu').click(function () {
        var id = $(this).attr('id');
        $('.option-menu:not(#'+id+')').removeClass('active');
        $('#'+id).addClass('active');

        var page = id.substring(0, id.indexOf('-'));
        if(page == 'obra'|| page =='obraListView'|| page =='obraCreateView'){
            url = 'http://localhost/LXTec/Application/View/Obra/';
        }
        else if(page =='itemCreateView'|| page =='itemListView'){
            url = 'http://localhost/LXTec/Application/View/Item/';
        }
        else if(page =='home'){
            url = 'http://localhost/LXTec/Application/View/';
        }

        $('#iframe-main').attr('src',url+page+'.php')
    });

});

