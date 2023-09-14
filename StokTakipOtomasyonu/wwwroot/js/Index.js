
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
            var renk = "";
            var object = '';
            $.each(result, function (index, item) {
                switch (index % 8) {
                    case 0: renk = "info"; break;
                    case 1: renk = "success"; break;
                    case 2: renk = "danger"; break;
                    case 3: renk = "secondary"; break;
                    case 4: renk = "secondary"; break;
                    case 5: renk = "danger"; break;
                    case 6: renk = "success"; break;
                    case 7: renk = "info"; break;
                }
                var kartRengi = 'small-box bg-' + renk + '';

                object += '<div class="col-lg-3 col-6">';
                object += '<div class="' + kartRengi + '">';
                object += '<div class="kategori-div">';
                object += '<div class="inner">';
                object += '<h3>' + item.urunSayisi + " ürün" + '</h3>';
                object += '<p>' + item.kategoriAd + '</p>';
                object += '</div>';
                object += '</div>';
                object += '<div class="icon">';
                object += '<i class="' + item.icon + '"></i>';
                object += '</div>';
                object += '<a href="/Home/IndexUrunEkle?kategoriId=' + item.kategoriId + '" class="small-box-footer"><i class="fas fa-arrow-circle-right"></i></a>';
                object += '</div>';
                object += '</div>';
            });
            $('#kategori-kart').html(object);

            //onclick=AddData(' + item.kategoriId + ')
        },
        error: function () {
            alert("Veri gösterilemiyor")
        }
    });
};

