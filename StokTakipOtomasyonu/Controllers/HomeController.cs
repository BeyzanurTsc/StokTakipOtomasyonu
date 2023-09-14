using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StokTakip.Models.Context;
using StokTakip.Models.Entity;
using StokTakipOtomasyonu.Models;
using StokTakipOtomasyonu.Models.Entity;
using System.Diagnostics;

namespace StokTakipOtomasyonu.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly MyContext _myContext;
        private readonly IWebHostEnvironment enviroment;


        public HomeController(ILogger<HomeController> logger, MyContext context, IWebHostEnvironment environment)
        {
            _logger = logger;
            _myContext = context;
            enviroment = environment;
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult IndexUrunEkle(int kategoriId)
        {
            ViewBag.KategoriId = kategoriId; 
            return View();
        }
       
        #region Birimler


        public IActionResult BirimList()
        {
            return View();
        }

        public JsonResult BirimGetir()
        {
            var birim = _myContext.Birimler.ToList();
            return new JsonResult(birim);
        }
        [HttpPost]
        public JsonResult BirimEkle([FromBody] Birimler birimler)
        {
            var birim = new Birimler()
            {
                BirimAdi = birimler.BirimAdi
            };
            _myContext.Birimler.Add(birim);
            _myContext.SaveChanges();
            return new JsonResult("veri kaydedildi");
        }
        public JsonResult BirimSil(int id)
        {
            var deletedData = _myContext.Birimler.Where(x => x.BirimId == id).SingleOrDefault();
            _myContext.Birimler.Remove(deletedData);
            _myContext.SaveChanges();
            return new JsonResult("Veri silindi");
        }

        public JsonResult BirimVeriGetir(int id)
        {
            var data = _myContext.Birimler.Where(x => x.BirimId == id).SingleOrDefault();
            return new JsonResult(data);
        }
        [HttpPost]
        public JsonResult BirimGüncelle([FromBody] Birimler birimler)
        {

            _myContext.Birimler.Update(birimler);
            _myContext.SaveChanges();
            return new JsonResult("veri güncellendi");
        }
        #endregion

        #region Departman 

        public IActionResult DepartmanList()
        {
            return View();
        }

        public JsonResult DepartmanGetir()
        {
            var departman = _myContext.Departman.ToList();
            return new JsonResult(departman);
        }
        [HttpPost]
        public JsonResult DepartmanEkle([FromBody] Departman departman)
        {
            var dep = new Departman()
            {
                DepartmanAdi = departman.DepartmanAdi
            };
            _myContext.Departman.Add(dep);
            _myContext.SaveChanges();
            return new JsonResult("veri kaydedildi");
        }
        public JsonResult DepartmanSil(int id)
        {
            var deletedData = _myContext.Departman.Where(x => x.DepartmanId == id).SingleOrDefault();
            _myContext.Departman.Remove(deletedData);
            _myContext.SaveChanges();
            return new JsonResult("Veri silindi");
        }

        public JsonResult VeriGetir(int id)
        {
            var data = _myContext.Departman.Where(x => x.DepartmanId == id).SingleOrDefault();
            return new JsonResult(data);
        }
        [HttpPost]
        public JsonResult DepartmanGüncelle([FromBody] Departman departman)
        {

            _myContext.Departman.Update(departman);
            _myContext.SaveChanges();
            return new JsonResult("veri güncellendi");
        }

        #endregion

        #region Kart Tipi
        public IActionResult KartTipiList()
        {
            return View();
        }

        public JsonResult KartTipiGetir()
        {
            var kartTip = _myContext.KartTipi.ToList();
            return new JsonResult(kartTip);
        }
        [HttpPost]
        public JsonResult KartTipiEkle([FromBody] KartTipi kartTipi)
        {
            var kart = new KartTipi()
            {
                KartTip = kartTipi.KartTip,
                Yon = kartTipi.Yon
            };
            _myContext.KartTipi.Add(kart);
            _myContext.SaveChanges();
            return new JsonResult("veri kaydedildi");
        }
        public JsonResult KartTipiSil(int id)
        {
            var deletedData = _myContext.KartTipi.Where(x => x.KartId == id).SingleOrDefault();
            _myContext.KartTipi.Remove(deletedData);
            _myContext.SaveChanges();
            return new JsonResult("Veri silindi");
        }

        public JsonResult KartTipiVeriGetir(int id)
        {
            var data = _myContext.KartTipi.Where(x => x.KartId == id).SingleOrDefault();
            return new JsonResult(data);
        }
        [HttpPost]
        public JsonResult KartTipiGüncelle([FromBody] KartTipi kartTipi)
        {

            _myContext.KartTipi.Update(kartTipi);
            _myContext.SaveChanges();
            return new JsonResult("veri güncellendi");
        }

        #endregion

        #region Personel 


        public IActionResult PersonelList()
        {
            return View();
        }

        public JsonResult PersonelGetir()
        {
            var personel = _myContext.Personel.ToList();
            return new JsonResult(personel);
        }
        [HttpPost]
        public JsonResult PersonelEkle([FromBody] Personel personel)
        {
            var person = new Personel()
            {
                PersonelAd = personel.PersonelAd,
                PersonelSoyad = personel.PersonelSoyad,
                PersonelGorevi = personel.PersonelGorevi,
                PersonelGsm = personel.PersonelGsm,
                PersonelTC = personel.PersonelTC,
                Aciklama = personel.Aciklama,
                Email=personel.Email,
                Sifre=personel.Sifre
            };
            _myContext.Personel.Add(person);
            _myContext.SaveChanges();
            return new JsonResult("veri kaydedildi");
        }
        public JsonResult PersonelSil(int id)
        {
            var deletedData = _myContext.Personel.Where(x => x.PersonelId == id).SingleOrDefault();
            _myContext.Personel.Remove(deletedData);
            _myContext.SaveChanges();
            return new JsonResult("Veri silindi");
        }

        public JsonResult PersonelVeriGetir(int id)
        {
            var data = _myContext.Personel.Where(x => x.PersonelId == id).SingleOrDefault();
            return new JsonResult(data);
        }
        [HttpPost]
        public JsonResult PersonelGüncelle([FromBody] Personel personel)
        {

            _myContext.Personel.Update(personel);
            _myContext.SaveChanges();
            return new JsonResult("veri güncellendi");
        }
        #endregion

        #region Depo
        public IActionResult DepoList()
        {
            return View();
        }

        public JsonResult DepoGetir()
        {
            var depo = _myContext.Depo.ToList();
            return new JsonResult(depo);
        }
        [HttpPost]
        public JsonResult DepoEkle([FromBody] Depo depo)
        {
            var dp = new Depo()
            {
                DepoAdi = depo.DepoAdi,
                DepoSorumlusu = depo.DepoSorumlusu
            };
            _myContext.Depo.Add(dp);
            _myContext.SaveChanges();
            return new JsonResult("veri kaydedildi");
        }
        public JsonResult DepoSil(int id)
        {
            var deletedData = _myContext.Depo.Where(x => x.DepoId == id).SingleOrDefault();
            _myContext.Depo.Remove(deletedData);
            _myContext.SaveChanges();
            return new JsonResult("Veri silindi");
        }

        public JsonResult DepoVeriGetir(int id)
        {
            var data = _myContext.Depo.Where(x => x.DepoId == id).SingleOrDefault();
            return new JsonResult(data);
        }
        [HttpPost]
        public JsonResult DepoGüncelle([FromBody] Depo depo)
        {
            _myContext.Depo.Update(depo);
            _myContext.SaveChanges();
            return new JsonResult("veri güncellendi");
        }


        #endregion

        #region Kategori 

        public IActionResult KategoriList()
        {
            return View();
        }

        public JsonResult KategoriGetir()
        {
            var kategori = _myContext.Kategori.ToList();
            var kategoriBilgileri = kategori.Select(kategori => new
            {
                KategoriId = kategori.KategoriId,
                KategoriAd = kategori.KategoriAd,
                Aciklama = kategori.Aciklama,
                Icon = kategori.Icon,
                UrunSayisi = _myContext.Urunler.Count(ürün => ürün.KategoriId == kategori.KategoriId)
            });


            return new JsonResult(kategoriBilgileri);
        }
        [HttpPost]
        public JsonResult KategoriEkle([FromBody] Kategori kategori)
        {
            var ktgr = new Kategori()
            {
                KategoriAd = kategori.KategoriAd,
                Aciklama = kategori.Aciklama,
                Icon = kategori.Icon
            };
            _myContext.Kategori.Add(ktgr);
            _myContext.SaveChanges();
            return new JsonResult("veri kaydedildi");
        }
        public JsonResult KategoriSil(int id)
        {
            var deletedData = _myContext.Kategori.Where(x => x.KategoriId == id).SingleOrDefault();
            _myContext.Kategori.Remove(deletedData);
            _myContext.SaveChanges();
            return new JsonResult("Veri silindi");
        }

        public JsonResult KategoriVeriGetir(int id)
        {
            var data = _myContext.Kategori.Where(x => x.KategoriId == id).SingleOrDefault();
            return new JsonResult(data);
        }
        [HttpPost]
        public JsonResult KategoriGüncelle([FromBody] Kategori kategori)
        {

            _myContext.Kategori.Update(kategori);
            _myContext.SaveChanges();
            return new JsonResult("veri güncellendi");
        }
        #endregion

        #region Kullanıcılar
        public IActionResult KullaniciList()
        {
            return View();
        }

        public JsonResult KullaniciGetir()
        {
            var kullanicilar = _myContext.Kullanicilar.ToList();
            return new JsonResult(kullanicilar);
        }
        [HttpPost]
        public JsonResult KullaniciEkle([FromBody] Kullanicilar kullanicilar)
        {

            var kullanici = new Kullanicilar()
            {
                KullaniciAd = kullanicilar.KullaniciAd,
                KullaniciSoyad = kullanicilar.KullaniciSoyad,
                AktifMi = kullanicilar.AktifMi
            };
            _myContext.Kullanicilar.Add(kullanici);
            _myContext.SaveChanges();
            return new JsonResult("veri kaydedildi");
        }
        public JsonResult KullaniciSil(int id)
        {
            var deletedData = _myContext.Kullanicilar.Where(x => x.KullaniciId == id).SingleOrDefault();
            _myContext.Kullanicilar.Remove(deletedData);
            _myContext.SaveChanges();
            return new JsonResult("Veri silindi");
        }

        public JsonResult KullaniciVeriGetir(int id)
        {
            var data = _myContext.Kullanicilar.Where(x => x.KullaniciId == id).SingleOrDefault();
            return new JsonResult(data);
        }
        [HttpPost]
        public JsonResult KullaniciGüncelle([FromBody] Kullanicilar kullanicilar)
        {

            _myContext.Kullanicilar.Update(kullanicilar);
            _myContext.SaveChanges();
            return new JsonResult("veri güncellendi");
        }
        #endregion

        #region Ürünler 
        public IActionResult UrunList()
        {
            return View();
        }

        public JsonResult UrunGetir()
        {
            var urunList = _myContext.Urunler.Include(u => u.Kategori).Include(u => u.Kullanicilar).Include(u => u.Depo).ToList();
            return new JsonResult(urunList);
        }

        //public IActionResult UrunGetir()
        //{
        //    var urunler = _myContext.Urunler.Include(u => u.Kategori).ToList();

        //    var urunModelListesi = urunler.Select(urun => new
        //    {
        //        KategoriAdi = urun.Kategori?.KategoriAd, // Kategori adını buradan alıyoruz.
        //        UrunId = urun.UrunId,
        //        DepoId = urun.DepoId,
        //        UrunKod = urun.UrunKod,
        //        UrunAdi = urun.UrunAdi,
        //        Marka = urun.Marka,
        //        CihazTip = urun.CihazTip,
        //        Model = urun.Model,
        //        SeriNo = urun.SeriNo,
        //        Aciklama = urun.Aciklama,
        //        KullaniciId = urun.KullaniciId,
        //        KategoriId = urun.KategoriId,
        //        EklenmeTarihi = DateTime.Now.ToString("yyyy-MM-dd"),
        //        CikisTarihi = urun.CikisTarihi,
        //        StokDurum = urun.StokDurum 

        //    }).ToList();

        //    return Json(urunModelListesi);
        //}



        [HttpPost]
        public JsonResult UrunEkle([FromBody] Urunler urunler)
        {

            var urun = new Urunler()
            {
                DepoId = urunler.DepoId,
                UrunKod = urunler.UrunKod,
                UrunAdi = urunler.UrunAdi,
                Marka = urunler.Marka,
                CihazTip = urunler.CihazTip,
                Model = urunler.Model,
                SeriNo = urunler.SeriNo,
                Aciklama = urunler.Aciklama,
                KullaniciId = urunler.KullaniciId,
                KategoriId = urunler.KategoriId,
                EklenmeTarihi = DateTime.Now.ToString("yyyy-MM-dd"),
                CikisTarihi = urunler.CikisTarihi,
                StokDurum = urunler.StokDurum
            };
            _myContext.Urunler.Add(urun);
            _myContext.SaveChanges();
            return new JsonResult("veri kaydedildi");
        }



        public JsonResult UrunSil(int id)
        {
            var deletedData = _myContext.Urunler.Where(x => x.UrunId == id).SingleOrDefault();
            _myContext.Urunler.Remove(deletedData);
            _myContext.SaveChanges();
            return new JsonResult("Veri silindi");
        }

        public JsonResult UrunVeriGetir(int id)
        {
            var data = _myContext.Urunler.Where(x => x.UrunId == id).SingleOrDefault();
            return new JsonResult(data);
        }
        [HttpPost]
        public JsonResult UrunGüncelle([FromBody] Urunler urunler)
        {
            _myContext.Urunler.Update(urunler);
            _myContext.SaveChanges();
            return new JsonResult("veri güncellendi");
        }
        #endregion

        #region Hareketler 

        public IActionResult HareketTblList()
        {
            return View();
        }

        public JsonResult HareketTblGetir()
        {
            var hareketler = _myContext.Hareketler.Include(u => u.Urunler).Include(u => u.KartTipi).Include(u => u.Departman).Include(u => u.Birimler).Include(u => u.Personel).ToList();

            return new JsonResult(hareketler);
        }
        [HttpPost]
        public JsonResult HareketTblEkle([FromBody] Hareketler hareketler)
        {
            var hareket = new Hareketler()
            {
                HareketId = hareketler.HareketId,
                UrunId = hareketler.UrunId,
                KartId = hareketler.KartId,
                HareketTarihi = DateTime.Now.ToString("yyyy-MM-dd"),
                DepartmanId = hareketler.DepartmanId,
                BirimId = hareketler.BirimId,
                PersonelId = hareketler.PersonelId,
                Miktar = hareketler.Miktar,
            };
            _myContext.Hareketler.Add(hareket);
            _myContext.SaveChanges();
            return new JsonResult("veri kaydedildi");
        }
        public JsonResult HareketTblSil(int id)
        {
            var deletedData = _myContext.Hareketler.Where(x => x.HareketId == id).SingleOrDefault();
            _myContext.Hareketler.Remove(deletedData);
            _myContext.SaveChanges();
            return new JsonResult("Veri silindi");
        }

        public JsonResult HareketTblVeriGetir(int id)
        {
            var data = _myContext.Hareketler.Where(x => x.HareketId == id).SingleOrDefault();
            return new JsonResult(data);
        }
        [HttpPost]
        public JsonResult HareketTblGüncelle([FromBody] Hareketler hareketler)
        {

            _myContext.Hareketler.Update(hareketler);
            _myContext.SaveChanges();
            return new JsonResult("veri güncellendi");
        }
        #endregion


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}