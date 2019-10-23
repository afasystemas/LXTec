var list= [];
var currentPage;
$(document).ready(function () {
    currentPage= 2;

    requestListItens();


    // $('#itens-select').change(function(){
    //     console.log($(this).val());
    //
    // });
});

function requestListItens() {

    $.ajax('http://localhost/LXTec/Application/Controller/Item/item_list.php', {
        type: 'GET',
        data:{
            page: currentPage
        },
        success: function (data) {
            list =JSON.parse(data);
            listItens(JSON.parse(data));
        }

    });
}

function listItens(itens) {

    $.each(itens,function (ind, obj) {
        var tr = '<tr>' +
            '<th scope="row">'+obj.id+'</th>' +
            '    <td>'+obj.nome+'</td>' +
            '    <td>'+obj.quantidade+'</td>\n' +
            '    <td>'+obj.valorUnitario+'</td>\n' +
            '    <td>' +
            '    <table>' +
            '    <tbody>' +
            '    <tr>' +
            '    <td><i class="fa fa-trash" onclick="deletItem('+obj.id+',\''+obj.nome+' \')"></i></td>' +
            '<td><i class="fa fa-edit"></i></td>' +
            '<td>' +
            '<i class="fa fa-eye itens" onclick="openModal(\'.$item->getId().\')" ></i>' +
            '    </td>' +
            '    </tr>' +
            '    </tbody>' +
            '    </table>' +
            '    </td>' +
            '    </tr>';
        $("#table-itens").append(tr);
    });

}


function deletItem(idDelet, nome) {
console.log(idDelet, nome);
    $('#mgs-modal').text("Confirme a exclusao do Item "+nome);
    $('#modal-delet').modal();
    $('#btn-delet-confirm').click(function () {
        $.ajax('http://localhost/LXTec/Application/Controller/Item/item_delete.php', {
            type: 'POST',
            data:{
                id_remove: idDelet
            },
            success: function (data) {
                var success = JSON.parse(data);
                console.log(success);
                $('#modal-delet').modal('hide');
                requestListItens();
            }

        });



    });
}


// function cleanDatas() {
//     $('#nameItem').val('');
//     $('#valorItem').val('');
//     $('#descricaoItem').val('');
//     saveSuccess('Salvo Com Sucesso!');
//
// }
//
// function saveSuccess(mgs){
//     $('.mgs-toast').text(mgs);
//     $('.toast-mgs').show();
//     setTimeout(function(){
//         $('.toast-mgs').hide();
//         }, 2000);
// }
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
//
// function listItens(itens) {
//     var table = ' <table class="table">' +
//         '                         <thead>' +
//         '                            <tr>' +
//         '                              <th scope="col">#</th>' +
//         '                              <th scope="col">Nome</th>' +
//         '                              <th scope="col">Valor</th>' +
//         '                              <th scope="col">Descrição</th>' +
//         '                              <th scope="col">Ação</th>' +
//         '                            </tr>' +
//         '                          </thead>' +
//         '                          <tbody id="datasItems">' +
//         '                           </tbody>' +
//         '                        </table> ';
//
//     $('#modal-itens').append(table);
//     $.each(Itens,function (ind, obj) {
//         var tr = '<tr>' +
//             '<td>'+obj.id+'</td>' +
//             '<td>'+obj.nome+'</td>' +
//             '<td>'+obj.descricao+'</td>' +
//             '<td>' +
//             ' <table>' +
//             '  <tbody>' +
//             '      <tr>' +
//             '          <td><i class="fa fa-trash"></i></td>' +
//             '          <td><i class="fa fa-edit"></i></td>' +
//             // '          <td>' +
//             // '              <button type="button" class="btn btn-info"><i class="fa fa-eye itens"></i> Itens</button>' +
//             // '          </td> ' +
//             '      </tr>' +
//             '  </tbody>' +
//             ' <table>    '+
//             '    </td>' +
//             '</tr>'
//         $("#datasItems").append(tr);
//     });
//
//     $('#exampleModal').modal()
// }


