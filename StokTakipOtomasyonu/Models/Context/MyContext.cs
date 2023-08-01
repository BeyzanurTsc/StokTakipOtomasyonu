using Microsoft.EntityFrameworkCore;
using StokTakip.Models.Entity;

namespace StokTakip.Models.Context
{
    public class MyContext:DbContext
    {
        public MyContext(DbContextOptions options) : base(options) { }

        public DbSet<Hareketler> Hareketler { get; set; }
        public DbSet<KartTipi> KartTipi { get; set; }
        public DbSet<Kategori> Kategori { get; set; }
        public DbSet<Departman> Departman { get; set; }
        public DbSet<Personel> Personel { get; set; }
        public DbSet<Birimler> Birimler { get; set; }
        public DbSet<Urunler> Urunler { get; set; }
        public DbSet<Grup> Grup { get; set; }
        public DbSet<Kullanicilar> Kullanicilar { get; set; }
      
    }  
      
}
