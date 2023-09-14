$(document).ready(function () {
    ShowData();
});

function ShowData() {
    debugger
    $.ajax({
        url: '/Home/KartTipiGetir',
        type: 'Get',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8;',
        success: function (result, status, xhr) {
            var object = '';
            var yon = '';
           
            $.each(result, function (index, item) {
                if (item.yon == true) {
                    yon = "+";
                } else {
                    yon = "-";
                }
                var deleteBtn = '<a class="btn btn-outline-danger" onclick="Delete(' + item.kartId + ')"><i class="fa-solid fa-trash"></i></a>';
                var updateBtn = '<a class="btn btn-outline-success" id="update_Btn" onclick="GetTextBoxData(' + item.kartId + ')"><i class="fa-solid fa-pen-to-square"></i></a>';
                object += '<tr>';
                object += '<td>' + item.kartId + '</td>';
                object += '<td>' + item.kartTip + '</td>';
                object += '<td>' + yon + '</td>';
                object += '<td>' + deleteBtn + '  ' + updateBtn + '</td>';
                object += '</tr>';
            });
            $('#tableData').html(object);
            console.log(object);

        },
        error: function () {
            alert("Veri gösterilemiyor")
        }
    });
};

$('#addBtn').click(function () {
    $('#addMdl').modal('show');
})
$(".btn-close").click(function () {
    $(".modal").modal('hide');
    console.log("close");
})

function AddData() {
    debugger
    var objData = {
        KartTip: $('#add-KartTipi').val(),
        Yon:$('input[name="radioValue"]:checked').val()==='true' // "true" veya "false" değeri alınır.


    }
    console.log(objData);
    $.ajax({
        url: '/Home/KartTipiEkle',
        type: 'Post',
        data: JSON.stringify(objData),
        contentType: 'application/json; charset=utf-8',
        dataType: 'JSON',
        success: function () {
            ShowData();
            $('#addMdl').modal('hide');

        },
        error: function () {
            alert('Ekleme işlemi başarısız');
        }
    })
}


function Delete(id) {
    if (confirm("Bu grubu silmek istediğinize emin misiniz?")) {
        debugger
        $.ajax({
            url: '/Home/KartTipiSil?id=' + id,
            success: function () {
                ShowData();
            },
            error: function () {
                alert('İşlem başarısız');
            }

        })
    }
}


function GetTextBoxData(id) {
    $.ajax({
        url: '/Home/KartTipiVeriGetir?id=' + id,
        type: 'Get',
        contentType: 'application/json; charset=utf-8',
        dataType: 'JSON',
        success: function (response) {
            $('#updateMdl').modal('show');
            $('#upd-kartId').val(response.kartId),
                $('#upd-kartTipi').val(response.kartTip)
        },
        error: function () {
            alert('İşlem Başarısız');
        }
    })
}

function UpdateData() {
    debugger
    var obj = {
        KartId: $('#upd-kartId').val(),
        KartTip:$('#upd-kartTipi').val(),
        Yon: $('input[name="radioValue1"]:checked').val() === 'true' 
    }
    $.ajax({
        url: '/Home/KartTipiGüncelle',
        type: 'Post',
        data: JSON.stringify(obj),
        contentType: 'application/json; charset=utf-8',
        dataType: 'JSON',
        success: function () {
            ShowData();
            $('#updateMdl').modal('hide');

        },
        error: function () {
            alert('Ekleme işlemi başarısız');
        }
    })
}