using System.Collections;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StokTakip.Models.Entity
{
    public class Urunler
    {
        [Key]
        public int UrunId { get; set; } 
        public string UrunKod { get; set; }
        public string UrunAdi { get; set; }
        public string Aciklama { get; set; }
        public string Marka { get; set; }
        public string CihazTip { get; set; }
        public string Model { get; set; }
        public string SeriNo { get; set; }
        public int DepoId { get; set; }
        public int KullaniciId { get; set; }
        public int KategoriId { get; set; }
        public string EklenmeTarihi { get; set; }
        public string CikisTarihi { get; set; }
        public bool StokDurum { get; set; }

        [ForeignKey("KategoriId")] // Bu ilişkiyi belirtir.
        public Kategori Kategori { get; set; }

        [ForeignKey("DepoId")]
        public Depo Depo { get; set; }

        [ForeignKey("KullaniciId")]
        public Kullanicilar Kullanicilar { get; set; }

    }
}