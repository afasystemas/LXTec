var listItens= [];
$(document).ready(function () {

   // $('#saveObra').click(function () {
   //      $.ajax('http://localhost/LXTec/Application/Controller/ObraCreate.php', {
   //          type: 'POST',
   //          data: {
   //              nome: $('#nameObra').val(),
   //              valor: $('#valorObra').val(),
   //              descricao: $('#descricaoObra').val(),
   //          },
   //          success: function (data) {
   //              cleanDatas();
   //          }
   //      });
   //  });

    $.ajax('http://localhost/LXTec/Application/Controller/ObraList.php', {
        type: 'GET',
        success: function (data) {
            console.log('resultado aki ');
            console.log(data);
        }

    });

    // $('#itens-select').change(function(){
    //     console.log($(this).val());
    //
    // });
});

// function cleanDatas() {
//     $('#nameObra').val('');
//     $('#valorObra').val('');
//     $('#descricaoObra').val('');
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
