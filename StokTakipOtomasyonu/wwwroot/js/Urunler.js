$(document).ready(function () {
    debugger
    ShowData();
    // Kategori Listesi Çekme
    $.ajax({
        url: '/Home/KategoriGetir',
        type: 'GET',
        dataType: 'json',
        success: function (kategoriBilgileri) {
            var kategoriDropdown = $('#add-kategoriId');
            var kategoriDropdown_upd = $('#upd-kategoriId');
            kategoriBilgileri.forEach(function (kategori) {
                kategoriDropdown.append($('<option>', {
                    value: kategori.kategoriId,
                    text: kategori.kategoriAd
                }));
                kategoriDropdown_upd.append($('<option>', {
                    value: kategori.kategoriId,
                    text: kategori.kategoriAd
                }));
            });
        }
    });

    // Depo Listesi Çekme
    $.ajax({
        url: '/Home/DepoGetir',
        type: 'GET',
        dataType: 'json',
        success: function (depo) {
            var depoDropdown = $('#add-depoId');
            var depoDropdown_upd = $('#upd-depoId');
            depo.forEach(function (depo) {
                depoDropdown.append($('<option>', {
                    value: depo.depoId,
                    text: depo.depoAdi
                }));
                depoDropdown_upd.append($('<option>', {
                    value: depo.depoId,
                    text: depo.depoAdi
                }));
            });
        }
    });

    // Kullanıcı Listesi Çekme
    $.ajax({
        url: '/Home/KullaniciGetir',
        type: 'GET',
        dataType: 'json',
        success: function (kullanicilar) {
            var kullaniciDropdown = $('#add-kullaniciId');
            var kullaniciDropdown_upd = $('#upd-kullaniciId');
            kullanicilar.forEach(function (kullanici) {
                kullaniciDropdown.append($('<option>', {
                    value: kullanici.kullaniciId,
                    text: kullanici.kullaniciAd + ' ' + kullanici.kullaniciSoyad
                }));
                kullaniciDropdown_upd.append($('<option>', {
                    value: kullanici.kullaniciId,
                    text: kullanici.kullaniciAd + ' ' + kullanici.kullaniciSoyad
                }));
            });
        }
    });
});

function ShowData() {
    debugger
    $.ajax({
        url: '/Home/UrunGetir',
        type: 'Get',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8;',
        success: function (result, status, xhr) {
            var object = '';

            $.each(result, function (index, item) {
                var deleteBtn = '<a class="btn btn-outline-danger" onclick="Delete(' + item.urunId + ')"><i class="fa-solid fa-trash"></i></a>';
                var updateBtn = '<a class="btn btn-outline-success" id="update_Btn" onclick="GetTextBoxData(' + item.urunId + ')"><i class="fa-solid fa-pen-to-square"></i></a>';

                if (item.stokDurum == true) {
                    stokDurumString = "Stokta Var";
                } else {
                    stokDurumString = "Stokta Yok";
                }

                if (item.cikisTarihi === "") {
                    cikisTarihiString = " - ";
                }
                else {
                    cikisTarihiString = item.cikisTarihi;
                }
                object += '<tr>';
                object += '<td>' + item.urunId + '</td>';
                object += '<td>' + item.urunKod + '</td>';
                object += '<td>' + item.kategori.kategoriAd + '</td>';
                object += '<td>' + item.depo.depoAdi + '</td>';
                object += '<td>' + item.kullanicilar.kullaniciAd + " " + item.kullanicilar.kullaniciSoyad + '</td>';
                object += '<td>' + item.urunAdi + '</td>';
                object += '<td>' + item.aciklama + '</td>';
                object += '<td>' + item.cihazTip + '</td>';
                object += '<td>' + item.marka + '</td>';
                object += '<td>' + item.model + '</td>';
                object += '<td>' + item.seriNo + '</td>';
                object += '<td>' + item.eklenmeTarihi + '</td>';
                object += '<td>' + cikisTarihiString + '</td>';
                object += '<td>' + stokDurumString + '</td>';
                object += '<td class="islemler">' + deleteBtn + '  ' + updateBtn + '</td>';
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
    $('#addMdl').modal('show');
})
$(".btn-close").click(function () {
    $(".modal").modal('hide');
    console.log("close");
})

function AddData() {
    debugger
    var objData = {
        DepoId: $('#add-depoId').val(),
        UrunKod: $('#add-urunKod').val(),
        UrunAdi: $('#add-urunAdi').val(),
        Aciklama: $('#add-aciklama').val(),
        CihazTip: $('#add-cihazTip').val(),
        Marka: $('#add-marka').val(),
        Model: $('#add-model').val(),
        SeriNo: $('#add-seriNo').val(),
        KullaniciId: $('#add-kullaniciId').val(),
        KategoriId: $('#add-kategoriId').val(),
        EklenmeTarihi: $('#add-eklenmeTarihi').val(),
        CikisTarihi: $('#add-cikisTarihi').val(),
        StokDurum: $('input[name="radioValue"]:checked').val() === 'true'

    }

    console.log("Ekle " + JSON.stringify(objData));

    $.ajax({
        url: '/Home/UrunEkle',
        type: 'POST',
        data: JSON.stringify(objData),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function () {
            ShowData();
            $('#addMdl').modal('hide');
        },
        error: function () {
            alert('Ekleme işlemi başarısız');
        }
    });
}

function Delete(id) {
    if (confirm("Bu depoyu silmek istediğinize emin misiniz?")) {
        debugger
        $.ajax({
            url: '/Home/UrunSil?id=' + id,
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
        url: '/Home/UrunVeriGetir?id=' + id,
        type: 'Get',
        contentType: 'application/json; charset=utf-8',
        dataType: 'JSON',
        success: function (response) {
            $('#updateMdl').modal('show');

            $('#upd-urunId').val(response.urunId),
                $('#upd-depoId').val(response.depoId),
                $('#upd-urunKod').val(response.urunKod),
                $('#upd-urunAdi').val(response.urunAdi),
                $('#upd-aciklama').val(response.aciklama),
                $('#upd-cihazTip').val(response.cihazTip),
                $('#upd-marka').val(response.marka),
                $('#upd-model').val(response.model),
                $('#upd-seriNo').val(response.seriNo),
                $('#upd-kullaniciId').val(response.kullaniciId),
                $('#upd-kategoriId').val(response.kategoriId),
                $('#upd-eklenmeTarihi').val(response.eklenmeTarihi),
                $('#upd-cikisTarihi').val(response.cikisTarihi)

        },
        error: function () {
            alert('İşlem Başarısız');
        }
    })
}

function UpdateData() {
    var objData = {
        UrunId: $('#upd-urunId').val(),
        DepoId: $('#upd-depoId').val(),
        UrunKod: $('#upd-urunKod').val(),
        UrunAdi: $('#upd-urunAdi').val(),
        Aciklama: $('#upd-aciklama').val(),
        CihazTip: $('#upd-cihazTip').val(),
        Marka: $('#upd-marka').val(),
        Model: $('#upd-model').val(),
        SeriNo: $('#upd-seriNo').val(),
        KullaniciId: $('#upd-kullaniciId').val(),
        KategoriId: $('#upd-kategoriId').val(),
        CikisTarihi: $('#upd-cikisTarihi').val(),
        EklenmeTarihi: $('#upd-eklenmeTarihi').val(),

        StokDurum: $('input[name="radioValue1"]:checked').val() === 'true'
    };

    console.log("Update " + JSON.stringify(objData));

    $.ajax({
        url: '/Home/UrunGüncelle',
        type: 'POST',
        data: JSON.stringify(objData),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function () {
            ShowData();
            $('#updateMdl').modal('hide');
        },
        error: function () {
            alert('Güncelleme işlemi başarısız');
        }
    });
}

