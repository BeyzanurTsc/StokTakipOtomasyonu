using System.Collections;
using System.ComponentModel.DataAnnotations;

namespace StokTakip.Models.Entity
{
    public class Kullanicilar
    {
        [Key]
        public int KullaniciId { get; set; }
        public string KullaniciAd { get; set; }
        public string KullaniciSoyad { get; set; }
        public bool AktifMi { get; set; }
    }
}
