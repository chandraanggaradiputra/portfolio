import Image from "next/image";
import Section from "./components/Section";
import Container from "./components/Container";
import Card from "./components/Card";
import Button from "./ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Section id="home" direction="column">
        <Container direction="column" style={{ gap: "gap-6" }}>
          <div className="flex flex-col gap-6 w-full">
            <h1 className="font-bold text-4xl sm:text-left text-center text-balance tracking-wider">
              Perkenalkan, Nama saya Chandra Anggara Diputra
            </h1>
            <p className="opacity-80 text-lg sm:text-left text-center tracking-wide">
              Web Developer | Content Creator | Pebisnis | Freelancer
            </p>
            <ul className="flex flex-row justify-center sm:justify-start gap-6">
              <li>
                <Button
                  href="https://wa.me/6282298148474"
                  target="_blank"
                  rel="noopener noreferrer"
                  logo="/svg/logo-whatsapp.svg"
                  CTA="Rekrut Saya"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <Image
              src="/chandra-anggara-diputra.webp"
              alt="Chandra Anggara Diputra"
              width={350}
              height={350}
              priority
              loading="eager"
              className="flex-1 justify-center items-center mx-auto rounded-full"
            />
          </div>
        </Container>
      </Section>
      <Section id="kegiatan" direction="column">
        <Container direction="row" style={{ gap: "gap-6" }}>
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center text-balance tracking-wider">
            Kegiatan Saya Sehari Hari
          </h2>
          <ul className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <Card
              title="Menerima Project Pembuatan Website"
              description="Membuat website dengan berbagai macam framework dan bahasa pemrograman seperti WordPress, React, Next.js, dan lainnya."
              imageSrc="/image/jasa-pembuatan-website.webp"
              linkHref="https://chandraanggaradiputra.com/layanan/jasa-pembuatan-website/"
              rel="noopener noreferrer"
              target="_blank"
              CTA="Buatkan Saya Website"
            />
            <Card
              title="Jualan Madu Akasia"
              description="Sambil menjalankan bisnis, saya juga menjual madu akasia yang berkualitas tinggi dan alami."
              imageSrc="/image/madu-akasia.jpeg"
              linkHref="https://wa.me/6282298148474/?text=Halo%20Chandra,%20saya%20tertarik%20untuk%20membeli%20madu%20akasia."
              rel="noopener noreferrer"
              target="_blank"
              CTA="Order Sekarang"
            />
            <Card
              title="Mengikuti Kajian Sunnah di Kota Serang"
              description="Setiap pekan saya mengikuti kajian sunnah di Kota Serang untuk menambah ilmu agama dan memperkuat iman."
              imageSrc="/image/jadwal-kajian-sunnah-kota-serang.webp"
              linkHref="https://wa.me/6282298148474"
              rel="noopener noreferrer"
              target="_blank"
              CTA="Save WhatsApp Saya"
            />
          </ul>
        </Container>
      </Section>
      <Section id="portfolio" direction="column">
        <Container direction="column" style={{ gap: "gap-6" }}>
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center text-balance tracking-wider">
            Portfolio Saya
          </h2>
          <p className="text-gray-600 text-center">
            Berikut adalah beberapa project yang telah saya kerjakan:
          </p>
          <ul className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
            <Card
              title="Chim GTO"
              description="Biolink yang saya buat untuk Chim GTO, sebuah brand Bisnis Fried Chicken di Kota Serang, Banten."
              imageSrc="/image/ayam-geprek-chim-gto.jpg"
              linkHref="https://instan.click/chimgto"
              rel="noopener noreferrer"
              target="_blank"
              CTA="Kunjungi Biolink"
            />
            <Card
              title="Yuk Talk"
              description="Website Berita Lokal sekaligus Komunitas milik Dipa Yustia, seorang lawyer sekaligus Anggota Dewan DPRD di Kota Semarang, Jawa Tengah."
              imageSrc="/image/yuk-talk.webp"
              linkHref="https://yuktalk.id"
              rel="noopener noreferrer"
              target="_blank"
              CTA="Kunjungi Website"
            />
          </ul>
        </Container>
      </Section>
      <Section id="kontak" direction="column">
        <Container direction="column" style={{ gap: "gap-6" }}>
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center text-balance tracking-wider">
            Kontak Saya
          </h2>
          <p className="text-gray-600 text-center">
            Jika Anda memiliki pertanyaan atau ingin bekerja sama, jangan ragu
            untuk menghubungi saya!
          </p>
          <ul className="flex flex-row gap-6">
            <li className="flex flex-col items-center gap-2">
              <Link
                href="https://facebook.com/maschandigital10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/svg/logo-facebook.svg"
                  alt="Facebook"
                  width={40}
                  height={40}
                />
              </Link>
            </li>
            <li className="flex flex-col items-center gap-2">
              <Link
                href="https://www.instagram.com/chandraanggaradiputra10/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/svg/logo-instagram.svg"
                  alt="Instagram"
                  width={40}
                  height={40}
                />
              </Link>
            </li>
            <li className="flex flex-col items-center gap-2">
              <Link
                href="https://tiktok.com/@maschandigital"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/svg/logo-tiktok.svg"
                  alt="TikTok"
                  width={40}
                  height={40}
                />
              </Link>
            </li>
            <li className="flex flex-col items-center gap-2">
              <Link
                href="https://www.youtube.com/@chandraanggaradiputra"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/svg/logo-youtube.svg"
                  alt="YouTube"
                  width={40}
                  height={40}
                />
              </Link>
            </li>
            <li className="flex flex-col items-center gap-2">
              <Link
                href="https://t.me/s/maschandigital"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/svg/telegram-svgrepo-com.svg"
                  alt="Telegram"
                  width={40}
                  height={40}
                />
              </Link>
            </li>
            <li className="flex flex-col items-center gap-2">
              <Link
                href="https://www.threads.com/@chandraanggaradiputra10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/svg/threads-brands-solid-full.svg"
                  alt="Threads"
                  width={40}
                  height={40}
                />
              </Link>
            </li>
          </ul>
          <Button
            href="https://wa.me/6282298148474"
            target="_blank"
            rel="noopener noreferrer"
            logo="/svg/logo-whatsapp.svg"
            CTA="Hubungi Saya"
          ></Button>
        </Container>
      </Section>
    </>
  );
}
