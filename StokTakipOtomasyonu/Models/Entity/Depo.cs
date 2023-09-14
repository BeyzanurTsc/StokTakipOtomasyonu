using System.ComponentModel.DataAnnotations;

namespace StokTakip.Models.Entity
{
    public class Depo
    {
        [Key]
        public int DepoId { get; set; }
        public string DepoAdi { get; set; }
        public string DepoSorumlusu { get; set; }
    }
}
