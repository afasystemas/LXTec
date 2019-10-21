var listItens= [];
var itensSelecteds = [];
$(document).ready(function () {

    // itenSelct ={
    //     id: 1,
    //     qtd: 3
    // };
    // itenSelct2 ={
    //     id: 5,
    //     qtd: 2
    // };
    // itenSelct3 ={
    //     id: 4,
    //     qtd:8
    // };
    // itensSelecteds.push(itenSelct);
    // itensSelecteds.push(itenSelct2);
    // itensSelecteds.push(itenSelct3);

    $('#saveItem').click(function () {
        $.ajax('http://localhost/LXTec/Application/Controller/Item/create_item.php', {
            type: 'POST',
            data: {
                nome: $('#nameItem').val(),
                qtd: $('#quantidadeItem').val(),
                valorUnit: $('#valorItem').val(),
                // itens: itensSelecteds
            },
            success: function (data) {
                console.log(data);
                cleanDatas();
            }
        });
    });


    // $.ajax('http://localhost/LXTec/Application/Controller/Item/item_list.php', {
    //     type: 'GET',
    //     success: function (data) {
    //         var objs =JSON.parse(data);
    //         addItensSelect(objs);
    //
    //     }
    // });

    $('#search-itens').keyup(function(){
        // console.log($(this).val().length >= 3);
        if($(this).val().length >= 3){
            var Items = [
                {"id":"3","nome":"Item do jao"},
                {"id":"5","nome":"Item de Jesus"}];
            $('#itens-select').empty();
            addItensSelect(Items);
            $('#itens-select').show();
        }

    });


    function addItensSelect(list) {
        var options ='';
        $.each(list, function (ind,obj) {
            options += '<span class="itens-data-search" onclick="addItem('+obj.id+',\''+obj.nome+'\')"> '+obj.nome+'</span>'
        });
        $('#itens-select').append(options);

    }

});

function addItem(id, nomeItem){
    console.log(id);
    itensSelecteds.push(id);

    $('#itens-select').hide();

    $('#search-itens').val('');
    $('#list-itens-selected').append(
        '<tr id="item-'+id+'">' +
        '   <td>'+nomeItem+'</span>'+
        '   <td>' +
        '       <input placeholder="quantidade" type="number" class="form-control" >' +
        '   </td>   '+
        '   <td><i class="fa fa-trash" onclick="deletItem('+id+')"></i></td>'+
        '</tr>'
    );
    $('.table-list-itens').show();
}

function deletItem(id) {
    console.log(id);
    $('#item-'+id).remove();
    itensSelecteds = itensSelecteds.filter(function(item) {
        return item !== id
    });
}


function cleanDatas() {
    $('#nameItem').val('');
    $('#valorItem').val('');
    $('#descricaoItem').val('');
    saveSuccess('Salvo Com Sucesso!');

}

function saveSuccess(mgs){
    $('.mgs-toast').text(mgs);
    $('.toast-mgs').show();
    setTimeout(function(){
        $('.toast-mgs').hide();
    }, 2000);
}
function openModal(idItem) {

    // $.ajax('http://localhost/LXTec/Application/Controller/Item/item_list.php', {
    //     type: 'GET',
    //     success: function (data) {
    //         console.log('resultado aki ');
    //         console.log(data);
    //
    //         $('#exampleModal').modal()
    //     }
    //
    // });


    var Items = [
        {"id":"1","nome":"Condominio blah blah blao","valor":"454.55","descricao":"Reforna de banheiro"},
        {"id":"2","nome":"teste reques","valor":"23.56","descricao":"blah blah blah"},
        {"id":"3","nome":"Item do jao","valor":"123.455","descricao":"Apenas uma parede"},
        {"id":"4","nome":"minha casa minha divida","valor":"123.65","descricao":"Item realizada no bairro lageado sobre o comando do mestre de Item fuilaninho de tal"},
        {"id":"5","nome":"Item de Jesus","valor":"0","descricao":"As Palavras de DEus"}];
    getItensFromItem(Items);

}

function getItensFromItem(Items) {
    console.log('aki');
    console.log(Items);
    var table = ' <table class="table">' +
        '                         <thead>' +
        '                            <tr>' +
        '                              <th scope="col">#</th>' +
        '                              <th scope="col">Nome</th>' +
        '                              <th scope="col">Valor</th>' +
        '                              <th scope="col">Descrição</th>' +
        '                              <th scope="col">Ação</th>' +
        '                            </tr>' +
        '                          </thead>' +
        '                          <tbody id="datasItems">' +
        '                           </tbody>' +
        '                        </table> ';

    $('#modal-itens').append(table);
    $.each(Items,function (ind, obj) {
        var tr = '<tr>' +
            '<td>'+obj.id+'</td>' +
            '<td>'+obj.nome+'</td>' +
            '<td>'+obj.descricao+'</td>' +
            '<td>' +
            ' <table>' +
            '  <tbody>' +
            '      <tr>' +
            '          <td><i class="fa fa-trash"></i></td>' +
            '          <td><i class="fa fa-edit"></i></td>' +
            // '          <td>' +
            // '              <button type="button" class="btn btn-info"><i class="fa fa-eye itens"></i> Itens</button>' +
            // '          </td> ' +
            '      </tr>' +
            '  </tbody>' +
            ' <table>    '+
            '    </td>' +
            '</tr>'
        $("#datasItems").append(tr);
    });

    $('#exampleModal').modal()


}

function addItensItem() {

    $('#itens-selected').appendTo(
        '<spa></spa>'
    );

}