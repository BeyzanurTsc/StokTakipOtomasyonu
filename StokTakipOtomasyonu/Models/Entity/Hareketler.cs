using System.ComponentModel.DataAnnotations;

namespace StokTakip.Models.Entity
{
    public class Hareketler
    {
        [Key]
        public int HareketId { get; set; }
        public int UrunId { get; set; }
        public string KartId { get; set; }
        public DateTime HareketTarihi { get; set; }
        public int DepartmanId { get; set; }
        public int BirimId { get; set; }//birim İd
        public int PersonelId { get; set; }
        public int Miktar { get; set; }//miktar
    }
}
