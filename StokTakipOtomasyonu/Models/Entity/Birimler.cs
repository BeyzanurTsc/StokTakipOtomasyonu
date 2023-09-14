using System.ComponentModel.DataAnnotations;

namespace StokTakipOtomasyonu.Models.Entity
{
    public class Birimler
    {
        [Key]
        public int BirimId { get; set; }
        [Required(ErrorMessage ="Bu alanı boş geçmeyiniz!")]
        public string BirimAdi { get; set; }
    }
}
