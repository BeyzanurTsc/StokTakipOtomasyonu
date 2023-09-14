$(document).ready(function () {
    ShowData();
});

function ShowData() {
    debugger
    $.ajax({
        url: '/Home/DepartmanGetir',
        type: 'Get',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8;',
        success: function (result, status, xhr) {
            var object = '';
           
        $.each(result, function (index, item) {
            var deleteBtn = '<a class="btn btn-outline-danger" onclick="Delete(' + item.departmanId + ')"><i class="fa-solid fa-trash"></i></a>';
            var updateBtn = '<a class="btn btn-outline-success" id="update_Btn" onclick="GetTextBoxData(' + item.departmanId + ')"><i class="fa-solid fa-pen-to-square"></i></a>'; 
                object += '<tr>';
                object += '<td>' + item.departmanId + '</td>';
                object += '<td>' + item.departmanAdi + '</td>';
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


//--------------------------------------------------------->  Departman Ekle
 $('#addBtn').click(function () {
     $('#departmanMdl').modal('show');
 })
$(".btn-close").click(function () {
    $(".modal").modal('hide');
    console.log("close");
})

function AddData() {
    debugger
    var objData = {
        DepartmanAdi: $('#dName').val()
    }
    console.log(objData);
    $.ajax({
        url: '/Home/DepartmanEkle',
        type: 'Post',
        data: JSON.stringify(objData),
        contentType: 'application/json; charset=utf-8',
        dataType: 'JSON',
        success: function () {
            ShowData();
            $('#departmanMdl').modal('hide');

        },
        error: function () {
            alert('Ekleme işlemi başarısız');
        }
    })
}

//---------------------------------------------------------> Departman Sil

function Delete(id) {
    if (confirm("Bu departmanı silmek istediğinize emin misiniz?")) {
        debugger
        $.ajax({
            url: '/Home/DepartmanSil?id=' + id,
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
        url: '/Home/VeriGetir?id=' + id,
        type: 'Get',
        contentType: 'application/json; charset=utf-8',
        dataType: 'JSON',
        success: function (response) {
            $('#UpdateDepartmanMdl').modal('show');
            $('#d_Id').val(response.departmanId),
            $('#d_Name').val(response.departmanAdi)
        },
        error: function () {
            alert('İşlem Başarısız');
        }
    })
}

function UpdateData() {
    debugger
    var obj = {
        DepartmanId: $('#d_Id').val(),
        DepartmanAdi: $('#d_Name').val()
    }
    $.ajax({
        url: '/Home/DepartmanGüncelle',
        type: 'Post',
        data: JSON.stringify(obj),
        contentType: 'application/json; charset=utf-8',
        dataType: 'JSON',
        success: function () {
            ShowData();
            $('#UpdateDepartmanMdl').modal('hide');

        },
        error: function () {
            alert('Ekleme işlemi başarısız');
        }
    })
}