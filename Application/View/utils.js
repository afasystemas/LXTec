function saveSuccess(mgs){
    $('.mgs-toast').text(mgs);
    $('.toast-mgs').show();
    setTimeout(function(){
        $('.toast-mgs').hide();
    }, 2000);
}

function mgsInfo(mgs){
    $('.mgs-toast').text(mgs);
    $('.toast-mgs').show();
    setTimeout(function(){
        $('.toast-mgs').hide();
    }, 2000);
}

function mgsError(mgs){
    $('#mgs-toast-alert').text(mgs);
    $('.toast-mgs-alert').show();
    setTimeout(function(){
        $('.toast-mgs-alert').hide();
    }, 2000);
}

function getResquest(objectRequest) {
    console.log(objectRequest);
    $.ajax(objectRequest.url, {
         type: 'GET',
         data: objectRequest.dataRequest,
         success: function (data) {
             var datasReturn = {
                 result: JSON.parse(data),
                 headColumns: objectRequest.dataHeadTable,
                 columnsRequest: objectRequest.datacolumnRequest
             }
            generateTable(datasReturn);
         }
     });
}


function buildModalSelect(objectRequest){

    var modal = '<div class="modal fade  bd-example-modal-lg" id="modal-select-subitens" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
    '               <div class="modal-dialog modal-lg" role="document">' +
    '                   <div class="modal-content">' +
    '                       <div class="modal-header">' +
    '                       <h5 class="modal-title" id="exampleModalLabel">SubItens</h5>' +
    '                       <button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
    '                           <span aria-hidden="true">&times;</span>' +
    '                       </button>' +
    '                   </div>' +
    '                   <div class="modal-body-subitens" id="modal-body-subitens">' +
    '                   <div class="form-group col-11 search-subitens"> '+
    '                     <div class="input-group">' +
    '                         <input type="text" id="search-subitens" class="form-control" placeholder="Busque pelo nome do Item">' +
    '                         <div class="input-group-append">' +
    '                             <button class="btn btn-secondary" type="button">' +
    '                                 <i class="fa fa-search"></i>' +
    '                             </button>' +
    '                         </div>' +
    '                     </div>' +
    '                   </div>'+
    '               </div>' +
    '             <div class="modal-footer">' +
    // '               <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
    '             </div>' +
    '           </div>' +
    '         </div>' +
    '     </div>';

    $('#modal-itens').append(modal);
    $('#modal-select-subitens').modal();

    $('#search-subitens').keyup(function(e) {
        var code = e.keyCode || e.which;
        if (code == 13) {
            objectRequest['dataRequest'].nameItem = $(this).val();
            getResquest(objectRequest);
        }
    });
}

function  generateTable(dataItens) {
    console.log(dataItens);
    var tableReqsult =  '<table class="table subitens" >' +
    '                      <thead id="head-subItens">' +
    '                      </thead>' +
    '                      <tbody id="body-subitens-modal">'
    '                        </tbody>' +
    '                  </table>' ;


    $.each(dataItens.headColumns, function (index,column) {
        $('#head-subItens').append(
            '<th>'+column+'</th>'
        )
    });



    $.each(dataItens.result, function (ind, obj) {
        $('#body-subitens-modal').append('<tr id="'+obj.id+'">' +
                                   '   <td>'+obj.nome+'</td>'+
                                   '</tr>'
        ).click(function () {
            console.log(obj.id + ' '+obj.nome);
        });


    });

    $('#modal-body-subitens').append(tableReqsult);
}

function urlRquest(url) {
    console.log(url);
    $('body #iframe-main').attr('src',url);

}

