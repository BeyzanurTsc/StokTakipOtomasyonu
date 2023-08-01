using System.Collections;
using System.ComponentModel.DataAnnotations;

namespace StokTakip.Models.Entity
{
    public class KartTipi
    {
        [Key]
        public int KartId { get; set; }
        public string KartTip { get; set; }
        public bool Yon { get; set; }
    }
}
