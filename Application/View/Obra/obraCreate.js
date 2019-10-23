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

    $('#saveObra').click(function () {
        $.ajax('http://localhost/LXTec/Application/Controller/ObraCreate.php', {
            type: 'POST',
            data: {
                nome: "DEus",
                valor: 1.45,
                descricao: "Me ajuda",
                itens: itensSelecteds
            },
            success: function (data) {
                console.log(data)
                // cleanDatas();
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

    $('#search-itens').keyup(function(e){
        var code = e.keyCode || e.which;
        if(code == 13) { //Enter keycode

            if($(this).val().length >= 3){
                // var obras = [
                //     {"id":"3","nome":"Obra do jao"},
                //     {"id":"5","nome":"Obra de Jesus"}];
                // $('#itens-select').empty();
                // addItensSelect(obras);
                // $('#itens-select').show();
                requestListItensByName($(this).val());
            }
            else{
                mgsInfo('Informe pelo menos 3 letras');
            }
        }

    });

    $('#table-list-itens').change(function () {
        console.log('mudou');
    });
    // $('#itens-select').show();




});
function addItensSelect(list) {
    var options ='';
    $.each(list, function (ind,obj) {
        options += '<span class="itens-data-search" onclick="addItem('+obj.id+',\''+obj.nome+'\')"> '+obj.nome+'</span>'
    });

    $('#itens-select').append(options);
    $('#itens-select').show();


}

function requestListItensByName(nameItem) { console.log(nameItem);
    $.ajax('http://localhost/LXTec/Application/Controller/Item/item_findByName.php', {
        type: 'GET',
        data:{
            nameItem: nameItem
        },
        success: function (data) {
            // console.log(JSON.stringify(data));
            list = JSON.parse(data);
            console.log(list);
            addItensSelect(JSON.parse(data));
        }

    });
}

function addItem(idItem, nomeItem){
    console.log(idItem);

    $('#itens-select').hide();
    var item = {
        id: idItem,
        qtd: 0
    }
    itensSelecteds.push(item);
    var arrowItem = itensSelecteds.length;

    $('#search-itens').val('');
    $('#list-itens-selected').append(
        '<tr id="item-'+itensSelecteds.length+'" style="border-bottom-color: black">' +
        '   <td>'+itensSelecteds.length+'</td>'+
        '   <td>'+nomeItem+'</td>'+
        '   <td>' +
        '       <input placeholder="quantidade" type="number" class="form-control" >' +
        '   </td>   '+
        '   <td><i class="fa fa-trash" onclick="deletItem('+idItem+')"></i></td>'+
        '   <td><i class="fa fa-plus-circle" onclick="addSubItem('+idItem+','+arrowItem+' )"></i></td>'+
        '</tr>'
    );
    $('.table-list-itens').show();
    $('#itens-select').empty();
}

function deletItem(id) {
    console.log(id);
    $('#item-'+id).remove();
    itensSelecteds = itensSelecteds.filter(function(item) {
        return item !== id
    });

    if(listenerListItens()){
        $('.table-list-itens').hide();
    }
}

function addSubItem(idSubIten, index) {
    if(itensSelecteds[index-1].subitems == undefined){
        itensSelecteds[index-1].subitems = [];
    }
    var item = {
        id: idSubIten,
        qtd: 0
    };
    itensSelecteds[index-1].subitems.push(item);

    if(itensSelecteds[index-1].subitems.length == 1){

        // console.log($('#item-'+index+' '));

        var subitem =   ' <tr style="border:none ">' +
            '                <td style="border:none "><img src="../../../assets/arrow-itens.png" style="height: 35px"></td>' +
            '                <td style="border:none " colspan="4">' +
            '                  <table class="table subitens" >' +
            '                      <thead>' +
            '                          <th>Item</th>' +
            '                          <th>Quantidade</th>' +
            '                          <th>Excluir</th>' +
            '                          <th>Adicionar</th>' +
            '                      </thead>' +
            '                      <tbody id="tbody-list-subitens-'+index+'-'+(index+1)+'">' +
            '                      </tbody>' +
            '                  </table>' +
            '                </td' +
            '            </tr>';

        console.log('#item-'+index);
        $('#list-itens-selected #item-'+index).after(subitem);
    }


    var trSubItem = '<tr id="item-'+index+'-'+(index+1)+'" style="border-bottom-color: black">' +
                    '   <td>'+index+'.'+(index+1)+'</td>'+
                    '   <td>outro subItems</td>'+
                    '   <td>' +
                    '       <input placeholder="quantidade" type="number" class="form-control" >' +
                    '   </td>   '+
                    '   <td><i class="fa fa-trash" onclick="deletItem('+idSubIten+')"></i></td>'+
                    '   <td><i class="fa fa-plus-circle" onclick="addSubItem('+idSubIten+',itensSelecteds.length )"></i></td>'+
                    '</tr>';
    console.log('#tbody-list-subitens-'+index+'.'+(index+1));
    $('#tbody-list-subitens-'+index+'-'+(index+1)).append(trSubItem);


}


function cleanDatas() {
    $('#nameObra').val('');
    $('#valorObra').val('');
    $('#descricaoObra').val('');
    saveSuccess('Salvo Com Sucesso!');

}

function saveSuccess(mgs){
    $('.mgs-toast').text(mgs);
    $('.toast-mgs').show();
    setTimeout(function(){
        $('.toast-mgs').hide();
    }, 2000);
}
function openModal(idObra) {

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


    var obras = [
        {"id":"1","nome":"Condominio blah blah blao","valor":"454.55","descricao":"Reforna de banheiro"},
        {"id":"2","nome":"teste reques","valor":"23.56","descricao":"blah blah blah"},
        {"id":"3","nome":"Obra do jao","valor":"123.455","descricao":"Apenas uma parede"},
        {"id":"4","nome":"minha casa minha divida","valor":"123.65","descricao":"obra realizada no bairro lageado sobre o comando do mestre de obra fuilaninho de tal"},
        {"id":"5","nome":"Obra de Jesus","valor":"0","descricao":"As Palavras de DEus"}];
    getItensFromObra(obras);

}

function getItensFromObra(obras) {
    console.log('aki');
    console.log(obras);
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
        '                          <tbody id="datasObras">' +
        '                           </tbody>' +
        '                        </table> ';

    $('#modal-itens').append(table);
    $.each(obras,function (ind, obj) {
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
        $("#datasObras").append(tr);
    });

    $('#exampleModal').modal()


}
function listenerListItens() {
    return !itensSelecteds.length > 0;
}

function addItensObra() {

    $('#itens-selected').appendTo(
        '<spa></spa>'
    );

}