using System.ComponentModel.DataAnnotations;

namespace StokTakip.Models.Entity
{
    public class Kategori
    {
        [Key]
        public int KategoriId { get; set; }
        public string KategoriAd { get; set; }
        public string Aciklama { get; set; }
        public string Icon { get; set; }

    }
}
