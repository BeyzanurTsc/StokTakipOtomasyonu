using System.Collections;
using System.ComponentModel.DataAnnotations;

namespace StokTakip.Models.Entity
{
    public class Urunler
    {
        [Key]
        public int UrunId { get; set; }
        public int GrupId { get; set; }
        public string UrunKod { get; set; }
        public byte UrunResim { get; set; }
        public string UrunAdi { get; set; }
        public string Aciklama { get; set; }
        public int KullaniciId { get; set; }
        public int KategoriId { get; set; }
        public DateTime EklenmeTarihi { get; set; }
        public string IpAdresi { get; set; }
        public bool AktifMi { get; set; }
    }
}