$(document).ready(function () {
    ShowData();
});

function ShowData() {
    debugger
    $.ajax({
        url: '/Home/KategoriGetir',
        type: 'Get',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8;',
        success: function (result, status, xhr) {
            var object = '';

            $.each(result, function (index, item) {
                var deleteBtn = '<a class="btn btn-outline-danger" onclick="Delete(' + item.kategoriId + ')"><i class="fa-solid fa-trash"></i></a>';
                var updateBtn = '<a class="btn btn-outline-success" id="update_Btn" onclick="GetTextBoxData(' + item.kategoriId + ')"><i class="fa-solid fa-pen-to-square"></i></a>';
                object += '<tr>';
                object += '<td>' + item.kategoriId + '</td>';
                object += '<td>' + item.kategoriAd + '</td>';
                object += '<td>' + item.aciklama + '</td>';
                object += '<td>' + deleteBtn + '  ' + updateBtn + '</td>';
                object += '<td><i class="' + item.icon + '"></i></td>';
                object += '</tr>';
            });
            $('#tableData').html(object);
        },
        error: function () {
            alert("Veri gösterilemiyor")
        }
    });
};


$('#upd-showIcon').click(function () {
    $('#ornekler-upd').toggle();
});

$('#showIcon').click(function () {
    $('#ornekler').toggle();
});

$('#addBtn').click(function () {
    $('#addKategoriMdl').modal('show');
});
$(".btn-close").click(function () {
    $(".modal").modal('hide');
    console.log("close");
})



function AddData() {
    debugger
    var objData = {
        KategoriAd: $('#kName').val(),
        Aciklama: $('#AddDescription').val(),
        Icon: $('#add-Icon').val()
    }
    console.log(objData);
    $.ajax({
        url: '/Home/KategoriEkle',
        type: 'Post',
        data: JSON.stringify(objData),
        contentType: 'application/json; charset=utf-8',
        dataType: 'JSON',
        success: function () {
            ShowData();
            $('#addKategoriMdl').modal('hide');

        },
        error: function () {
            alert('Ekleme işlemi başarısız');
        }
    })
}


function Delete(id) {
    if (confirm("Bu birimi silmek istediğinize emin misiniz?")) {
        debugger
        $.ajax({
            url: '/Home/KategoriSil?id=' + id,
            success: function () {
                ShowData();
            },
            error: function () {
                alert('İşlem başarısız');
            }

        })
    }
}

//---------------------------------------------------------> Departman Güncelle

function GetTextBoxData(id) {
    $.ajax({
        url: '/Home/KategoriVeriGetir?id=' + id,
        type: 'Get',
        contentType: 'application/json; charset=utf-8',
        dataType: 'JSON',
        success: function (response) {
            $('#UpdateKategoriMdl').modal('show');
            $('#k_Id').val(response.kategoriId),
                $('#k_Name').val(response.kategoriAd),
                $('#updt_description').val(response.aciklama),
                $('#upd-Icon').val(response.icon)
        },
        error: function () {
            alert('İşlem Başarısız');
        }
    })
}

function UpdateData() {
    debugger
    var obj = {
        KategoriId: $('#k_Id').val(),
        KategoriAd: $('#k_Name').val(),
        Aciklama: $('#updt_description').val(),
        Icon: $('#upd-Icon').val()
    }
    $.ajax({
        url: '/Home/KategoriGüncelle',
        type: 'Post',
        data: JSON.stringify(obj),
        contentType: 'application/json; charset=utf-8',
        dataType: 'JSON',
        success: function () {
            ShowData();
            $('#UpdateKategoriMdl').modal('hide');

        },
        error: function () {
            alert('Ekleme işlemi başarısız');
        }
    })
}