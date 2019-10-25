var listItens= []
var obras;
var obra;
$(document).ready(function () {
    obras = [];
    requestList();
});

function requestList() {
    $.ajax('http://localhost/LXTec/Application/Controller/ObraList.php', {
        type: 'GET',
        success: function (data) {
            obras = JSON.parse(data);
            obrasToTable(obras);
        }
    });
}

function editObra(idObra) {

    window.location.replace('http://localhost/LXTec/Application/View/Obra/obraCreateView.php?idObra='+idObra);
}

function deleteObra(idObra) {

    obra = obras.find(function (obj) {
       if(obj.id == idObra) {return obj;}
    });

    $('#modal-Obra').append('<span>Tem Certeza que deseja excluir a Obra '+obra.nome+'</span>');
    $('#modalDelet').modal();
    $('#btn-confirm').click(function () {
        deleteObraRquest(idObra);
    });
}

function deleteObraRquest(idObra) {
    $.ajax('http://localhost/LXTec/Application/Controller/Obra/ObraDeleteController.php', {
        type: 'POST',
        data:{
            idObra: idObra
        },
        success: function (data) {
            if(data.success){
                $('#tbody-obras').remove();
                saveSuccess(' Excluido com Sucesso!')
                requestList();
            }
            else {
                mgsError("Erro ao deletar!")
            }
        }

    });
}

function obrasToTable(obras){

    $.each(obras, function (ind, obj) {
       $('#tbody-obras').append(
            '        <tr>'+
            '          <th scope="row">'+obj.id+'</th>'+
            '              <td>'+obj.nome+'</td>'+
            '              <td>'+obj.valor+'</td>'+
            '              <td>'+obj.descricao+'</td>'+
            '              <td>'+
            '                  <table>'+
            '                      <tbody>'+
            '                          <tr>'+
            '                              <td><i class="fa fa-trash" onclick="deleteObra('+obj.id+')"></i></td>'+
            '                              <td><i class="fa fa-edit" onclick="editObra('+obj.id+')"></i></td>'+
            '                          </tr>'+
            '                      </tbody>'+
            '                  </table>'+
            '              </td>'+
            '       </tr>');
    })
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


    // var obras = [
    //     {"id":"1","nome":"Condominio blah blah blao","valor":"454.55","descricao":"Reforna de banheiro"},
    //     {"id":"2","nome":"teste reques","valor":"23.56","descricao":"blah blah blah"},
    //     {"id":"3","nome":"Obra do jao","valor":"123.455","descricao":"Apenas uma parede"},
    //     {"id":"4","nome":"minha casa minha divida","valor":"123.65","descricao":"obra realizada no bairro lageado sobre o comando do mestre de obra fuilaninho de tal"},
    //     {"id":"5","nome":"Obra de Jesus","valor":"0","descricao":"As Palavras de DEus"}];
    // getItensFromObra(obras);

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
                    '      </tr>' +
                    '  </tbody>' +
                    ' <table>    '+
                    '    </td>' +
                    '</tr>'
        $("#datasObras").append(tr);
    });

    $('#exampleModal').modal()

}


