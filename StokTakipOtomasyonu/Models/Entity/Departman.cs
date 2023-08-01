using System.ComponentModel.DataAnnotations;

namespace StokTakip.Models.Entity
{
    public class Departman
    {
        [Key]
        public int DepartmanId { get; set; }
        public string DepatmanAdi { get; set;}
    }
}
