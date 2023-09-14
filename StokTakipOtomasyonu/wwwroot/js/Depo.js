$(document).ready(function () {
    ShowData();
});

function ShowData() {
    debugger
    $.ajax({
        url: '/Home/DepoGetir',
        type: 'Get',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8;',
        success: function (result, status, xhr) {
            var object = '';

            $.each(result, function (index, item) {
                var deleteBtn = '<a class="btn btn-outline-danger" onclick="Delete(' + item.depoId + ')"><i class="fa-solid fa-trash"></i></a>';
                var updateBtn = '<a class="btn btn-outline-success" id="update_Btn" onclick="GetTextBoxData(' + item.depoId + ')"><i class="fa-solid fa-pen-to-square"></i></a>';
                object += '<tr>';
                object += '<td>' + item.depoId + '</td>';
                object += '<td>' + item.depoAdi + '</td>';
                object += '<td>' + item.depoSorumlusu + '</td>';
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
    $('#AddDepoMdl').modal('show');
})
$(".btn-close").click(function () {
    $(".modal").modal('hide');
    console.log("close");
})

function AddData() {
    debugger
    var objData = {
        DepoAdi: $('#dName').val(),
        DepoSorumlusu: $('#dSorumlu').val()
    }
    console.log(objData);
    $.ajax({
        url: '/Home/DepoEkle',
        type: 'Post',
        data: JSON.stringify(objData),
        contentType: 'application/json; charset=utf-8',
        dataType: 'JSON',
        success: function () {
            ShowData();
            $('#AddDepoMdl').modal('hide');

        },
        error: function () {
            alert('Ekleme işlemi başarısız');
        }
    })
}


function Delete(id) {
    if (confirm("Bu depoyu silmek istediğinize emin misiniz?")) {
        debugger
        $.ajax({
            url: '/Home/DepoSil?id=' + id,
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
        url: '/Home/DepoVeriGetir?id=' + id,
        type: 'Get',
        contentType: 'application/json; charset=utf-8',
        dataType: 'JSON',
        success: function (response) {
            $('#UpdateDepoMdl').modal('show');
            $('#d_Id').val(response.depoId),
                $('#d_Name').val(response.depoAdi),
                $('#d_Sorumlu').val(response.depoSorumlusu)
        },
        error: function () {
            alert('İşlem Başarısız');
        }
    })
}

function UpdateData() {
    debugger
    var obj = {
        DepoId: $('#d_Id').val(),
        DepoAdi: $('#d_Name').val(),
        DepoSorumlusu: $('#d_Sorumlu').val()
    }
    $.ajax({
        url: '/Home/DepoGüncelle',
        type: 'Post',
        data: JSON.stringify(obj),
        contentType: 'application/json; charset=utf-8',
        dataType: 'JSON',
        success: function () {
            ShowData();
            $('#UpdateDepoMdl').modal('hide');

        },
        error: function () {
            alert('Ekleme işlemi başarısız');
        }
    })
}