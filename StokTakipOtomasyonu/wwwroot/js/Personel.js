$(document).ready(function () {
    ShowData();
});

function ShowData() {
    debugger
    $.ajax({
        url: '/Home/PersonelGetir',
        type: 'Get',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8;',
        success: function (result, status, xhr) {
            var object = '';

            $.each(result, function (index, item) {
                var deleteBtn = '<a class="btn btn-outline-danger" onclick="Delete(' + item.personelId + ')"><i class="fa-solid fa-trash"></i></a>';
                var updateBtn = '<a class="btn btn-outline-success" id="update_Btn" onclick="GetTextBoxData(' + item.personelId + ')"><i class="fa-solid fa-pen-to-square"></i></a>';
                object += '<tr>';
                object += '<td>' + item.personelId + '</td>';
                object += '<td>' + item.personelAd + '</td>';
                object += '<td>' + item.personelSoyad + '</td>';
                object += '<td>' + item.personelGorevi + '</td>';
                object += '<td>' + item.personelTC + '</td>';
                object += '<td>' + item.personelGsm + '</td>';
                object += '<td>' + item.email + '</td>';
                object += '<td>' + item.sifre + '</td>';
                object += '<td>' + item.aciklama + '</td>';
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
    $('#AddPersonelMdl').modal('show');
})
$(".btn-close").click(function () {
    $(".modal").modal('hide');
    console.log("close");
})

function AddData() {
    debugger
    var objData = {
        PersonelAd: $('#add-personelAd').val(),
        PersonelSoyad: $('#add-personelSoyad').val(),
        PersonelGorevi: $('#add-personelGorev').val(),
        PersonelTC: $('#add-personelTc').val(),
        PersonelGsm: $('#add-personelGsm').val(),
        Email: $('#add-email').val(),
        Sifre: $('#add-sifre').val(),
        Aciklama: $('#add-personelDes').val()
    }
    console.log(objData);
    $.ajax({
        url: '/Home/PersonelEkle',
        type: 'Post',
        data: JSON.stringify(objData),
        contentType: 'application/json; charset=utf-8',
        dataType: 'JSON',
        success: function () {
            ShowData();
            $('#AddPersonelMdl').modal('hide');

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
            url: '/Home/PersonelSil?id=' + id,
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
        url: '/Home/PersonelVeriGetir?id=' + id,
        type: 'Get',
        contentType: 'application/json; charset=utf-8',
        dataType: 'JSON',
        success: function (response) {
            $('#UpdatePersonelMdl').modal('show');
            $('#upd-personelId').val(response.personelId),
                $('#upd-personelAd').val(response.personelAd),
                $('#upd-personelSoyad').val(response.personelSoyad),
                $('#upd-personelGorev').val(response.personelGorevi),
                $('#upd-personelTc').val(response.personelTC),
                $('#upd-personelGsm').val(response.personelGsm),
                $('#upd-email').val(response.email),
                $('#upd-sifre').val(response.sifre),
                $('#upd-personelDes').val(response.aciklama)
        },
        error: function () {
            alert('İşlem Başarısız');
        }
    })
}

function UpdateData() {
    debugger
    var obj = {
        PersonelId: $('#upd-personelId').val(),
        PersonelAd: $('#upd-personelAd').val(),
        PersonelSoyad: $('#upd-personelSoyad').val(),
        PersonelGorevi: $('#upd-personelGorev').val(),
        PersonelTC: $('#upd-personelTc').val(),
        PersonelGsm: $('#upd-personelGsm').val(),
        Email: $('#upd-email').val(),
        Sifre: $('#upd-sifre').val(),
        Aciklama: $('#upd-personelDes').val(),
    }
    $.ajax({
        url: '/Home/PersonelGüncelle',
        type: 'Post',
        data: JSON.stringify(obj),
        contentType: 'application/json; charset=utf-8',
        dataType: 'JSON',
        success: function () {
            ShowData();
            $('#UpdatePersonelMdl').modal('hide');

        },
        error: function () {
            alert('Ekleme işlemi başarısız');
        }
    })
}