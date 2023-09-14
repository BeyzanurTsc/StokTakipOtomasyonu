using System.ComponentModel.DataAnnotations;

namespace StokTakip.Models.Entity
{
    public class Departman
    {
        [Key]
        public int DepartmanId { get; set; }

        [Required(ErrorMessage ="Bu alanı boş geçmeyiniz")]
        public string DepartmanAdi { get; set;}
    }
}
