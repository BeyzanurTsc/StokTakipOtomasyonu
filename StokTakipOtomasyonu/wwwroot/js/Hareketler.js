$(document).ready(function () {
    ShowData();
    $.ajax({
        url: '/Home/UrunGetir',
        type: 'GET',
        dataType: 'json',
        success: function (urunList) {
            var urunlerDropdown = $('#add-urunId');
            var urunlerDropdown_upd = $('#upd-urunId');
            urunList.forEach(function (urun) {
                urunlerDropdown.append($('<option>', {
                    value: urun.urunId,
                    text: urun.urunAdi
                }));
                urunlerDropdown_upd.append($('<option>', {
                    value: urun.urunId,
                    text: urun.urunAdi
                }));

            });
        }
    });
    $.ajax({
        url: '/Home/KartTipiGetir',
        type: 'GET',
        dataType: 'json',
        success: function (kartTip) {
            var kartTipDropdown = $('#add-kartId');
            var kartTipDropdown_upd = $('#upd-kartId');
            kartTip.forEach(function (kart) {
                kartTipDropdown.append($('<option>', {
                    value: kart.kartId,
                    text: kart.kartTip
                }));
                kartTipDropdown_upd.append($('<option>', {
                    value: kart.kartId,
                    text: kart.kartTip
                }));
            });
        }
    });
    $.ajax({
        url: '/Home/DepartmanGetir',
        type: 'GET',
        dataType: 'json',
        success: function (departman) {
            var departmanDropdown = $('#add-departmanId');
            var departmanDropdown_upd = $('#upd-departmanId');
            departman.forEach(function (dep) {
                departmanDropdown.append($('<option>', {
                    value: dep.departmanId,
                    text: dep.departmanAdi
                }));
                departmanDropdown_upd.append($('<option>', {
                    value: dep.departmanId,
                    text: dep.departmanAdi
                }));
            });
        }
    });
    $.ajax({
        url: '/Home/BirimGetir',
        type: 'GET',
        dataType: 'json',
        success: function (birim) {
            var birimDropdown = $('#add-birimId');
            var birimDropdown_upd = $('#upd-birimId');
            birim.forEach(function (bir) {
                birimDropdown.append($('<option>', {
                    value: bir.birimId,
                    text: bir.birimAdi
                }));
                birimDropdown_upd.append($('<option>', {
                    value: bir.birimId,
                    text: bir.birimAdi
                }));
            });
        }
    });
    $.ajax({
        url: '/Home/PersonelGetir',
        type: 'GET',
        dataType: 'json',
        success: function (personel) {
            var personelDropdown = $('#add-personelId');
            var personelDropdown_upd = $('#upd-personelId');
            personel.forEach(function (per) {
                personelDropdown.append($('<option>', {
                    value: per.personelId,
                    text: per.personelAd +" "+ per.personelSoyad
                }));
                personelDropdown_upd.append($('<option>', {
                    value: per.personelId,
                    text: per.personelAd + " " + per.personelSoyad
                }));
            });
        }
    });
    
});

function ShowData() {
    debugger
    $.ajax({
        url: '/Home/HareketTblGetir',
        type: 'Get',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8;',
        success: function (result, status, xhr) {
            var object = '';

            $.each(result, function (index, item) {
                var deleteBtn = '<a class="btn btn-outline-danger" onclick="Delete(' + item.hareketId + ')"><i class="fa-solid fa-trash"></i></a>';
                var updateBtn = '<a class="btn btn-outline-success" id="update_Btn" onclick="GetTextBoxData(' + item.hareketId + ')"><i class="fa-solid fa-pen-to-square"></i></a>';
                object += '<tr>';
                object += '<td>' + item.hareketId + '</td>';
                object += '<td>' + item.personel.personelAd + " " + item.personel.personelSoyad + '</td>';
                object += '<td>' + item.hareketTarihi + '</td>';
                object += '<td>' + item.urunler.urunKod + '</td>';
                object += '<td>' + item.kartTipi.kartTip + '</td>';
                object += '<td>' + item.departman.departmanAdi + '</td>';
                object += '<td>' + item.miktar + '</td>';
                object += '<td>' + item.birimler.birimAdi + '</td>';
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
        HareketId: $('#add-hareketId').val(),
        UrunId: $('#add-urunId').val(),
        KartId: $('#add-kartId').val(),
        HareketTarihi: $('#add-hareketTarihi').val(),
        DepartmanId: $('#add-departmanId').val(),
        BirimId: $('#add-birimId').val(),
        PersonelId: $('#add-personelId').val(),
        Miktar: $('#add-miktar').val(),


    }
    console.log(objData);
    $.ajax({
        url: '/Home/HareketTblEkle',
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
            url: '/Home/HareketTblSil?id=' + id,
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
    debugger
    $.ajax({
        url: '/Home/HareketTblVeriGetir?id=' + id,
        type: 'Get',
        contentType: 'application/json; charset=utf-8',
        dataType: 'JSON',
        success: function (response) {
            $('#updateMdl').modal('show');
            
            $('#upd-hareketId').val(response.hareketId),
                $('#upd-urunId').val(response.urunId),
                $('#upd-kartId').val(response.kartId),
                $('#upd-hareketTarihi').val(response.hareketTarihi),
                $('#upd-departmanId').val(response.departmanId),
                $('#upd-birimId').val(response.birimId),
                $('#upd-personelId').val(response.personelId),
                $('#upd-miktar').val(response.miktar)

        },
        error: function () {
            alert('İşlem Başarısız');
        }
    })
}
function UpdateData() {
    debugger
    var obj = {
        HareketId: $('#upd-hareketId').val(),
        UrunId: $('#upd-urunId').val(),
        KartId: $('#upd-kartId').val(),
        HareketTarihi: $('#upd-hareketTarihi').val(),
        DepartmanId: $('#upd-departmanId').val(),
        BirimId: $('#upd-birimId').val(),
        PersonelId: $('#upd-personelId').val(),
        Miktar: $('#upd-miktar').val(),


   }
    $.ajax({
        url: '/Home/HareketTblGüncelle',
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