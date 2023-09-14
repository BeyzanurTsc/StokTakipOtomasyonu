﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using StokTakip.Models.Context;

#nullable disable

namespace StokTakipOtomasyonu.Migrations
{
    [DbContext(typeof(MyContext))]
    [Migration("20230817053230_stokTakip")]
    partial class stokTakip
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("StokTakip.Models.Entity.Departman", b =>
                {
                    b.Property<int>("DepartmanId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("DepartmanId"));

                    b.Property<string>("DepartmanAdi")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("DepartmanId");

                    b.ToTable("Departman");
                });

            modelBuilder.Entity("StokTakip.Models.Entity.Depo", b =>
                {
                    b.Property<int>("DepoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("DepoId"));

                    b.Property<string>("DepoAdi")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DepoSorumlusu")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("DepoId");

                    b.ToTable("Depo");
                });

            modelBuilder.Entity("StokTakip.Models.Entity.Hareketler", b =>
                {
                    b.Property<int>("HareketId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("HareketId"));

                    b.Property<int>("BirimId")
                        .HasColumnType("int");

                    b.Property<int>("DepartmanId")
                        .HasColumnType("int");

                    b.Property<string>("HareketTarihi")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("KartId")
                        .HasColumnType("int");

                    b.Property<int>("Miktar")
                        .HasColumnType("int");

                    b.Property<int>("PersonelId")
                        .HasColumnType("int");

                    b.Property<int>("UrunId")
                        .HasColumnType("int");

                    b.HasKey("HareketId");

                    b.HasIndex("BirimId");

                    b.HasIndex("DepartmanId");

                    b.HasIndex("KartId");

                    b.HasIndex("PersonelId");

                    b.HasIndex("UrunId");

                    b.ToTable("Hareketler");
                });

            modelBuilder.Entity("StokTakip.Models.Entity.KartTipi", b =>
                {
                    b.Property<int>("KartId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("KartId"));

                    b.Property<string>("KartTip")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Yon")
                        .HasColumnType("bit");

                    b.HasKey("KartId");

                    b.ToTable("KartTipi");
                });

            modelBuilder.Entity("StokTakip.Models.Entity.Kategori", b =>
                {
                    b.Property<int>("KategoriId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("KategoriId"));

                    b.Property<string>("Aciklama")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Icon")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("KategoriAd")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("KategoriId");

                    b.ToTable("Kategori");
                });

            modelBuilder.Entity("StokTakip.Models.Entity.Kullanicilar", b =>
                {
                    b.Property<int>("KullaniciId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("KullaniciId"));

                    b.Property<bool>("AktifMi")
                        .HasColumnType("bit");

                    b.Property<string>("KullaniciAd")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("KullaniciSoyad")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("KullaniciId");

                    b.ToTable("Kullanicilar");
                });

            modelBuilder.Entity("StokTakip.Models.Entity.Personel", b =>
                {
                    b.Property<int>("PersonelId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PersonelId"));

                    b.Property<string>("Aciklama")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PersonelAd")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PersonelGorevi")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PersonelGsm")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PersonelSoyad")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PersonelTC")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Sifre")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("PersonelId");

                    b.ToTable("Personel");
                });

            modelBuilder.Entity("StokTakip.Models.Entity.Urunler", b =>
                {
                    b.Property<int>("UrunId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UrunId"));

                    b.Property<string>("Aciklama")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CihazTip")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CikisTarihi")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("DepoId")
                        .HasColumnType("int");

                    b.Property<string>("EklenmeTarihi")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("KategoriId")
                        .HasColumnType("int");

                    b.Property<int>("KullaniciId")
                        .HasColumnType("int");

                    b.Property<string>("Marka")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Model")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SeriNo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("StokDurum")
                        .HasColumnType("bit");

                    b.Property<string>("UrunAdi")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UrunKod")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UrunId");

                    b.HasIndex("DepoId");

                    b.HasIndex("KategoriId");

                    b.HasIndex("KullaniciId");

                    b.ToTable("Urunler");
                });

            modelBuilder.Entity("StokTakipOtomasyonu.Models.Entity.Birimler", b =>
                {
                    b.Property<int>("BirimId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("BirimId"));

                    b.Property<string>("BirimAdi")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("BirimId");

                    b.ToTable("Birimler");
                });

            modelBuilder.Entity("StokTakip.Models.Entity.Hareketler", b =>
                {
                    b.HasOne("StokTakipOtomasyonu.Models.Entity.Birimler", "Birimler")
                        .WithMany()
                        .HasForeignKey("BirimId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("StokTakip.Models.Entity.Departman", "Departman")
                        .WithMany()
                        .HasForeignKey("DepartmanId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("StokTakip.Models.Entity.KartTipi", "KartTipi")
                        .WithMany()
                        .HasForeignKey("KartId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("StokTakip.Models.Entity.Personel", "Personel")
                        .WithMany()
                        .HasForeignKey("PersonelId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("StokTakip.Models.Entity.Urunler", "Urunler")
                        .WithMany()
                        .HasForeignKey("UrunId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Birimler");

                    b.Navigation("Departman");

                    b.Navigation("KartTipi");

                    b.Navigation("Personel");

                    b.Navigation("Urunler");
                });

            modelBuilder.Entity("StokTakip.Models.Entity.Urunler", b =>
                {
                    b.HasOne("StokTakip.Models.Entity.Depo", "Depo")
                        .WithMany()
                        .HasForeignKey("DepoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("StokTakip.Models.Entity.Kategori", "Kategori")
                        .WithMany()
                        .HasForeignKey("KategoriId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("StokTakip.Models.Entity.Kullanicilar", "Kullanicilar")
                        .WithMany()
                        .HasForeignKey("KullaniciId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Depo");

                    b.Navigation("Kategori");

                    b.Navigation("Kullanicilar");
                });
#pragma warning restore 612, 618
        }
    }
}