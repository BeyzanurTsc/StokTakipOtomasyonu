using System.ComponentModel.DataAnnotations;

namespace StokTakip.Models.Entity
{
    public class Personel
    {
        [Key]
        public int  PersonelId { get; set; }
        public string PersonelAd { get; set; }
        public string PersonelSoyad { get; set; }
        public string PersonelResim { get; set; }
        public string PersonelGorevi { get; set; } //Çalışanın görevi
        public string PersonelTC { get; set; }
        public string PersonelGsm { get; set; }
        public string Aciklama { get; set; }
    }
}
