using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using NuGet.Protocol;
using StokTakip.Models.Context;
using StokTakip.Models.Entity;
using StokTakipOtomasyonu.Models;
using System.Diagnostics;

namespace StokTakipOtomasyonu.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly MyContext _myContext;

        public HomeController(ILogger<HomeController> logger,MyContext context)
        {
            _logger = logger;
            _myContext = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        public JsonResult BirimGetir()
        {
            var birimler = _myContext.Birimler.ToList();
            return Json(birimler);
        }
        public JsonResult BirimSil(int id)
        {
            var deletedData = _myContext.Birimler.Where(x => x.BirimId == id).SingleOrDefault();
            _myContext.Birimler.Remove(deletedData);
            _myContext.SaveChanges();
            return Json(deletedData);
        }

        [HttpPost]
        public JsonResult BirimEkle(Birimler birimler)
        {
            var birimdata = new Birimler()
            {
                //BirimId=birimler.BirimId,
                BirimAdi=birimler.BirimAdi
            };
            _myContext.Birimler.Add(birimdata);
            _myContext.SaveChanges();
           
            return new JsonResult(birimdata);
        }

        public JsonResult GetTextBoxData(int id) //Textbox a id ye göre veri getirme
        {
            var data = _myContext.Birimler.Where(x => x.BirimId == id).SingleOrDefault();
            return new JsonResult(data);
        }

        [HttpPost]
        public JsonResult BirimGüncelle(Birimler birimler)
        {
            _myContext.Birimler.Update(birimler);
            _myContext.SaveChanges();
            return new JsonResult("Veri Güncellendi!");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}