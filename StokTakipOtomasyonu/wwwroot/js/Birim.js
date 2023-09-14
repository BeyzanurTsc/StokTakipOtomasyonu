$(document).ready(function () {
    ShowData();
});

function ShowData() {
    debugger
    $.ajax({
        url: '/Home/BirimGetir',
        type: 'Get',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8;',
        success: function (result, status, xhr) {
            var object = '';

            $.each(result, function (index, item) {
                var deleteBtn = '<a class="btn btn-outline-danger" onclick="Delete(' + item.birimId + ')"><i class="fa-solid fa-trash"></i></a>';
                var updateBtn = '<a class="btn btn-outline-success" id="update_Btn" onclick="GetTextBoxData(' + item.birimId + ')"><i class="fa-solid fa-pen-to-square"></i></a>';
                object += '<tr>';
                object += '<td>' + item.birimId + '</td>';
                object += '<td>' + item.birimAdi + '</td>';
                object += '<td>' + deleteBtn + '  ' + updateBtn + '</td>';
                object += '</tr>';
            });
            $('#tableData').html(object);
        },
        error: function () {
            alert("Veri gösterilemiyor")
        }
    });
};


$('#addBtn').click(function () {
    $('#birimMdl').modal('show');
})
$(".btn-close").click(function () {
    $(".modal").modal('hide');
    console.log("close");
})


function AddData() {
    debugger
    var objData = {
        BirimAdi: $('#bName').val()
    }
    console.log(objData);
    $.ajax({
        url: '/Home/BirimEkle',
        type: 'Post',
        data: JSON.stringify(objData),
        contentType: 'application/json; charset=utf-8',
        dataType: 'JSON',
        success: function () {
            ShowData();
            $('#birimMdl').modal('hide');

        },
        error: function () {
            alert('Ekleme işlemi başarısız');
        }
    })
}

//--------------------------------------------------------->  Sil

function Delete(id) {
    if (confirm("Bu birimi silmek istediğinize emin misiniz?")) {
        debugger
        $.ajax({
            url: '/Home/BirimSil?id=' + id,
            success: function () {
                ShowData();
            },
            error: function () {
                alert('İşlem başarısız');
            }

        })
    }
}

//--------------------------------------------------------->  Güncelle

function GetTextBoxData(id) {
    $.ajax({
        url: '/Home/BirimVeriGetir?id=' + id,
        type: 'Get',
        contentType: 'application/json; charset=utf-8',
        dataType: 'JSON',
        success: function (response) {
            $('#UpdateBirimMdl').modal('show');
            $('#b_Id').val(response.birimId),
                $('#b_Name').val(response.birimAdi)
        },
        error: function () {
            alert('İşlem Başarısız');
        }
    })
}

function UpdateData() {
    debugger
    var obj = {
        BirimId: $('#b_Id').val(),
        BirimAdi: $('#b_Name').val()
    }
    $.ajax({
        url: '/Home/BirimGüncelle',
        type: 'Post',
        data: JSON.stringify(obj),
        contentType: 'application/json; charset=utf-8',
        dataType: 'JSON',
        success: function () {
            ShowData();
            $('#UpdateBirimMdl').modal('hide');

        },
        error: function () {
            alert('Ekleme işlemi başarısız');
        }
    })
}