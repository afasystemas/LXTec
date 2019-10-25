var listItens= [];
var itensSelecteds = [];


$(document).ready(function () {

    var obra = {
        id: 0
    }

    $('#saveObra').click(function () {
        console.log(obra);

        $.ajax('http://localhost/LXTec/Application/Controller/ObraCreate.php', {
            type: 'POST',
            data: {
                id: obra.id,
                nome: obra.nome,
                valor: obra.valor,
                descricao: obra.descricao,
                itens: itensSelecteds
                // itens: itensSelecteds
            },
            success: function (data) {
                console.log(data);
                cleanDatas();
            }
        });
    });

    if(idObra > 0){
        $.ajax('http://localhost/LXTec/Application/Controller/Obra_findById.php', {
            type: 'GET',
            data:{
                idObra: idObra
            },
            success: function (data) {
                var data   = JSON.parse(data);
                obra = data.obra;
                editObra(data.obra);
            }
        });

    }



    // $.ajax('http://localhost/LXTec/Application/Controller/Item/item_list.php', {
    //     type: 'GET',
    //     success: function (data) {
    //         console.log(data);
    //         // var objs = JSON.parse(data);
    //         // addItensSelect(objs);
    //
    //     }
    // });

    $('#itemObra').change(function(e){

        if($(this).val()!= 0){ console.log('aki');
            itensSelecteds.push( parseInt($(this).val()));
            var item = {
                id: parseInt($(this).val()),
                nome: $('option:selected').text()
            };
            addItensSelect(item);
            $(this).val(0);

        }
    });

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
    $('#nameObra').change(function () {
        obra.nome = $(this).val();
    });
     $('#valorObra').change(function () {
         obra.valor = $(this).val();
     });
     $('#descricaoObra').change(function () {
         obra.descricao = $(this).val();
     });



});

function editObra(obj) {
    $('#nameObra').val(obj.nome);
    $('#valorObra').val(obj.valor);
    $('#descricaoObra').val(obj.descricao);
}

function addItensSelect(item) {

    var options = '<span class="itens-data-search" id="item-'+item.id+'"> '+item.nome+' <i class="fa fa-close" onclick="deletItem('+item.id+',\''+item.nome+'\')"></i></span>'

    $('#itens-selected-list').append(options);
    // $('#itens-select').append(options);

console.log(itensSelecteds);

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
            // console.log(list);
            addItensSelect(JSON.parse(data));
        }

    });
}

function addItem(idItem, nomeItem){
    // console.log(idItem);

    $('#itens-select').hide();
    var arrowItem = itensSelecteds.length;

    var item = {
        id :  idItem,
        idView :  arrowItem,
        nome : nomeItem,
        qtd : 0,
        subitens: []
    };

    itensSelecteds.push(item);

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
    $('#item-'+id).remove();
    var index = itensSelecteds.indexOf(id);
    itensSelecteds.splice(index, 1);
    // if(listenerListItens()){
    //     $('.table-list-itens').hide();
    // }
}

function addSubItem(idIten, index) {
    var objectRequest = {
        url: 'http://localhost/LXTec/Application/Controller/Item/item_findByName.php',
        dataRequest:{},
        dataHeadTable: ['item', 'quantidade'],
        datacolumnRequest: ['id', 'nome']
    };
    buildModalSelect(objectRequest);

    // console.log(index);
    // console.log(itensSelecteds);
    // var idView = 1;
    // if(itensSelecteds[index-1].subitens != undefined){
    //     var totalSuiten = itensSelecteds[index-1].subitens.length;
    //
    //     for(var i = 0 ; i < totalSuiten; i++){
    //
    //     }
    //
    // }
    // var subitem = {
    //     id :  0,
    //     idView :  arrowItem +'.'+idView,
    //     nome : nomeItem,
    //     qtd : 0,
    //     subitens: []
    // };
    //
    //
    // itensSelecteds[index-1].subitens.push(item);
    //
    // if(itensSelecteds[index-1].subitems.length == 1){
    //
    //     // console.log($('#item-'+index+' '));
    //
    //     var subitem =   ' <tr style="border:none ">' +
    //         '                <td style="border:none "><img src="../../../assets/arrow-itens.png" style="height: 35px"></td>' +
    //         '                <td style="border:none " colspan="4">' +
    //         '                  <table class="table subitens" >' +
    //         '                      <thead>' +
    //         '                          <th>Item</th>' +
    //         '                          <th>Quantidade</th>' +
    //         '                          <th>Excluir</th>' +
    //         '                          <th>Adicionar</th>' +
    //         '                      </thead>' +
    //         '                      <tbody id="tbody-list-subitens-'+index+'-'+(index+1)+'">' +
    //         '                      </tbody>' +
    //         '                  </table>' +
    //         '                </td' +
    //         '            </tr>';
    //
    //     console.log('#item-'+index);
    //     $('#list-itens-selected #item-'+index).after(subitem);
    // }
    //
    //
    // var trSubItem = '<tr id="item-'+index+'-'+(index+1)+'" style="border-bottom-color: black">' +
    //                 '   <td>'+index+'.'+(index+1)+'</td>'+
    //                 '   <td>outro subItems</td>'+
    //                 '   <td>' +
    //                 '       <input placeholder="quantidade" type="number" class="form-control" >' +
    //                 '   </td>   '+
    //                 '   <td><i class="fa fa-trash" onclick="deletItem('+idSubIten+')"></i></td>'+
    //                 '   <td><i class="fa fa-plus-circle" onclick="addSubItem('+idSubIten+',itensSelecteds.length )"></i></td>'+
    //                 '</tr>';
    // console.log('#tbody-list-subitens-'+index+'.'+(index+1));
    // $('#tbody-list-subitens-'+index+'-'+(index+1)).append(trSubItem);
    // console.log(itensSelecteds);

}


function cleanDatas() {
    $('#nameObra').val('');
    $('#valorObra').val('');
    $('#descricaoObra').val('');
    itensSelecteds = [];
    $('#itens-selected-list').empty();
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



