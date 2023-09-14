$(document).ready(function () {
    ShowData();
});

function ShowData() {
    debugger
    $.ajax({
        url: '/Home/KullaniciGetir',
        type: 'Get',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8;',
        success: function (result, status, xhr) {
            var object = '';
            $.each(result, function (index, item) {
                var deleteBtn = '<a class="btn btn-outline-danger" onclick="Delete(' + item.kullaniciId + ')"><i class="fa-solid fa-trash"></i></a>';
                var updateBtn = '<a class="btn btn-outline-success" id="update_Btn" onclick="GetTextBoxData(' + item.kullaniciId + ')"><i class="fa-solid fa-pen-to-square"></i></a>';
               
                object += '<tr>';
                object += '<td>' + item.kullaniciId + '</td>';
                object += '<td>' + item.kullaniciAd + '</td>';
                object += '<td>' + item.kullaniciSoyad + '</td>';
                object += '<td>' + item.aktifMi + '</td>';
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
    
    var objData = {
        KullaniciAd: $('#add-KullaniciAd').val(),
        KullaniciSoyad: $('#add-KullaniciSoyad').val(),
       AktifMi: $('input[name="radioValue"]:checked').val() === 'true' // "true" veya "false" değeri alınır.


    }
    console.log(objData);
    $.ajax({
        url: '/Home/KullaniciEkle',
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
            url: '/Home/KullaniciSil?id=' + id,
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
        url: '/Home/KullaniciVeriGetir?id=' + id,
        type: 'Get',
        contentType: 'application/json; charset=utf-8',
        dataType: 'JSON',
        success: function (response) {
            $('#updateMdl').modal('show');
            $('#upd-kullaniciId').val(response.kullaniciId),
                $('#upd-kullaniciAd').val(response.kullaniciAd),
                $('#upd-kullaniciSoyad').val(response.kullaniciSoyad)
        },
        error: function () {
            alert('İşlem Başarısız');
        }
    })
}

function UpdateData() {
    debugger
    var obj = {
        KullaniciId: $('#upd-kullaniciId').val(),
        KullaniciAd: $('#upd-kullaniciAd').val(),
        KullaniciSoyad: $('#upd-kullaniciSoyad').val(),
        AktifMi: $('input[name="radioValue1"]:checked').val() === 'true'
    }
    $.ajax({
        url: '/Home/KullaniciGüncelle',
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