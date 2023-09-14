using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using StokTakip.Models.Context;
using StokTakip.Models.Entity;
using System.Security.Claims;

namespace StokTakipOtomasyonu.Controllers
{
    public class LogIn : Controller
    {
        MyContext db;
        public LogIn(MyContext context)
        {
            db = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(Personel personel)
        {
            // Veritabanında kullanıcıyı bulmaya çalış
            var user = db.Personel.FirstOrDefault(x => x.Email == personel.Email && x.Sifre == personel.Sifre);

            if (user != null)
            {
                // Kimlik bilgilerini oluştur
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.PersonelAd + " " + user.PersonelSoyad),
                    // İhtiyaca göre daha fazla kimlik bilgisi ekleyebilirsiniz
                };

                var identity = new ClaimsIdentity(claims, "login");
                var principal = new ClaimsPrincipal(identity);
                var props = new AuthenticationProperties();

                // Kimlik bilgilerini kullanarak oturum aç ve anasayfaya yönlendir
                HttpContext.SignInAsync(principal, props).Wait();

                return RedirectToAction("Index", "Home");
            }
            else
            {
                // Kullanıcı bulunamadıysa hata mesajı göster ve giriş sayfasını tekrar göster
                ViewBag.AlertMessage = "Email veya şifre hatalı!";
                return View();
            }
        }

        public IActionResult Logout()
        {
            // Oturumu kapat ve kimlik bilgilerini temizle
            HttpContext.SignOutAsync().Wait();
            return RedirectToAction("Index", "LogIn"); // Giriş sayfasına yönlendir
        }
    }
}
