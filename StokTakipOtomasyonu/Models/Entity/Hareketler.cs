using NuGet.Protocol.Core.Types;
using StokTakipOtomasyonu.Models.Entity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StokTakip.Models.Entity
{
    public class Hareketler
    {
        [Key]
        public int HareketId { get; set; }
        public int UrunId { get; set; }
        public int KartId { get; set; }
        public string HareketTarihi { get; set; }
        public int DepartmanId { get; set; }
        public int BirimId { get; set; }//birim İd
        public int PersonelId { get; set; }
        public int Miktar { get; set; }//miktar

        [ForeignKey("UrunId")]
        public Urunler Urunler { get; set; }

        [ForeignKey("KartId")]
        public KartTipi KartTipi { get; set; }

        [ForeignKey("DepartmanId")]
        public Departman Departman { get; set; }

        [ForeignKey("BirimId")]
        public Birimler Birimler { get; set; }

        [ForeignKey("PersonelId")]
        public Personel Personel { get; set; }
    }
}
