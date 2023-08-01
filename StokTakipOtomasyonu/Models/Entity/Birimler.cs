using System.ComponentModel.DataAnnotations;

namespace StokTakip.Models.Entity
{
    public class Birimler
    {
        [Key]
        public int BirimId { get; set; }
        public string BirimAdi { get; set; }

    }
}
