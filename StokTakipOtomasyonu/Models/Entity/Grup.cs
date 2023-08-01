using System.ComponentModel.DataAnnotations;

namespace StokTakip.Models.Entity
{
    public class Grup
    {
        [Key]
        public int Id { get; set; }
        public string GrupAdi { get; set; }
    }
}
