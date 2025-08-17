import React from 'react'
import LOGO from './assets/logo-kab-bekasi.svg'
import FOTO_HERO from './assets/foto-desa-hero.jpg'
import HIGIF from './assets/Hi.gif'
import Container from './components/Container'
import fiksiBooks from './data/fiksi.json'
import nonFiksiBooks from './data/non-fiksi.json'
import { Tabs, SimpleGrid, Accordion, Menu } from '@mantine/core'
import ButtonScrolltoTop from './components/ButtonScrolltoTop'
import { useDisclosure, useWindowScroll } from '@mantine/hooks'
import HamburgerMenu from './components/HamburgerMenu'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Card, { PropsCard } from './components/Card'
import FOTOKKN_UPB from './assets/foto-perpus-hero.png'
import GALERI_1 from './assets/1.jpg'
import GALERI_2 from './assets/2.jpg'
import GALERI_3 from './assets/3.jpg'
import GALERI_4 from './assets/4.jpg'
import PdfReader from './components/PdfReader'

const App: React.FC = () => {
  const [scroll, scrollTo] = useWindowScroll()
  const [, { toggle }] = useDisclosure(false)
  const visiMisiRef = React.useRef<HTMLDivElement | null>(null)
  const profilDesaRef = React.useRef<HTMLDivElement | null>(null)
  const galeriRef = React.useRef<HTMLDivElement | null>(null)
  const bukuFiksiRef = React.useRef<HTMLDivElement | null>(null)
  const bukuNonFiksiRef = React.useRef<HTMLDivElement | null>(null)
  const lokasiRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200
    })
  }, [])

  const scrollToHome = () => {
    if (visiMisiRef.current) {
      scrollTo({ y: 0 })
    }
  }
  const scrollToVisiMisi = () => {
    if (visiMisiRef.current) {
      const scrollY =
        visiMisiRef.current.getBoundingClientRect().top + window.scrollY - 50
      scrollTo({ y: scrollY })
    }
  }
  const scrollToProfilDesa = () => {
    if (profilDesaRef.current) {
      const scrollY =
        profilDesaRef.current.getBoundingClientRect().top + window.scrollY - 50
      scrollTo({ y: scrollY })
    }
  }
  const scrollToGaleri = () => {
    if (galeriRef.current) {
      const scrollY =
        galeriRef.current.getBoundingClientRect().top + window.scrollY - 50
      scrollTo({ y: scrollY })
    }
  }
  const scrollToBukuFiksi = () => {
    if (bukuFiksiRef.current) {
      const scrollY =
        bukuFiksiRef.current.getBoundingClientRect().top + window.scrollY - 100
      scrollTo({ y: scrollY })
    }
  }
  const scrollToBukuNonFiksi = () => {
    if (bukuNonFiksiRef.current) {
      const scrollY =
        bukuNonFiksiRef.current.getBoundingClientRect().top +
        window.scrollY -
        100
      scrollTo({ y: scrollY })
    }
  }
  const scrollToLokasi = () => {
    if (lokasiRef.current) {
      const scrollY =
        lokasiRef.current.getBoundingClientRect().top + window.scrollY - 50
      scrollTo({ y: scrollY })
    }
  }

  return (
    <>
      <nav className='py-5 px-5 sm:px-10 border-b fixed top-0 right-0 left-0 bg-white/70 backdrop-blur-md z-50'>
        <Container className='flex justify-between items-center'>
          <div
            className='flex items-center gap-3 cursor-pointer'
            onClick={() => location.reload()}
          >
            <img src={LOGO} alt='Logo Kabupaten Bekasi' width={45} />
            <div>
              <h1 className='font-semibold text-md sm:text-lg'>
                Desa Jayasampurna
              </h1>
              <h1 className='font-medium text-xs sm:text-sm italic'>
                Perpustakaan Digital
              </h1>
            </div>
          </div>
          <div className='sm:flex gap-10 text-[14px] [&>p]:cursor-pointer hidden'>
            <p onClick={scrollToHome}>Home</p>
            <p onClick={scrollToProfilDesa}>Profil Desa</p>
            <p onClick={scrollToVisiMisi}>Visi & Misi</p>
            <p onClick={scrollToGaleri}>Galeri</p>
            <div>
              <Menu shadow='md' width={200}>
                <Menu.Target>
                  <p onClick={toggle} className='cursor-pointer '>
                    Baca Buku
                  </p>
                </Menu.Target>
                <Menu.Dropdown onClick={toggle}>
                  <Menu.Label>Kategori Buku</Menu.Label>
                  <Menu.Item onClick={scrollToBukuFiksi}>• Fiksi</Menu.Item>
                  <Menu.Item onClick={scrollToBukuNonFiksi}>
                    • Non-FIksi
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>
            <p onClick={scrollToLokasi}>Lokasi</p>
          </div>
          <HamburgerMenu
            scrollToHome={scrollToHome}
            scrollToProfilDesa={scrollToProfilDesa}
            scrollToGaleri={scrollToGaleri}
            scrollToVisiMisi={scrollToVisiMisi}
            scrollToBukuFiksi={scrollToBukuFiksi}
            scrollToBukuNonFiksi={scrollToBukuNonFiksi}
            scrollToLokasi={scrollToLokasi}
          />
        </Container>
      </nav>
      <Container className='flex flex-col pt-10 mt-3 sm:mt-0'>
        <section className='py-10 px-6 sm:px-10 md:h-screen h-auto w-full flex justify-center sm:justify-between items-center flex-wrap-reverse gap-3'>
          <div className='max-w-sm'>
            <h2 className='text-xl font-semibold md:text-3xl md:leading-snug lg:text-4xl lg:leading-snug text-black/90'>
              Selamat Datang di{' '}
            </h2>
            <h1 className='text-2xl font-bold md:text-4xl md:leading-snug lg:text-5xl lg:leading-snug'>
              Perpustakaan Digital Desa Jayasampurna
            </h1>
            <p className='mt-7 sm:mt-10 leading-relaxed text-md text-gray-600 md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed'>
              Perpustakaan digital ini merupakan hasil program kerja mahasiswa
              KKN Universitas Pelita Bangsa tahun 2023 untuk mendukung
              perpustakaan dan taman baca yang sudah ada di desa Jayasampurna.
            </p>
          </div>
          <img
            src={FOTOKKN_UPB}
            alt='KKN Universitas Pelita Bangsa'
            title='KKN Universitas Pelita Bangsa'
            className='w-full sm:max-w-[500px]'
          />
        </section>
        <section
          className='py-12 px-6 sm:px-10 flex flex-col gap-5 mb-16'
          ref={visiMisiRef}
        >
          <div
            className='flex flex-col justify-start border-b-4 pb-2 w-max border-gray-200 '
            data-aos='fade-up'
          >
            <h1 className='text-lg font-bold md:text-xl lg:text-3xl text-center md:text-left '>
              Visi dan Misi Desa Jayasampurna
            </h1>
          </div>
          <img
            src={FOTO_HERO}
            alt='Foto Desa Jayasampurna'
            title='Foto Desa Jayasampurna'
            className='rounded-3xl xl:max-w-[800px] w-full m-auto '
          />
          <div className='flex flex-col gap-3' data-aos='fade-right'>
            <h1 className='font-semibold text-lg md:text-xl'>Visi</h1>
            <p className='leading-relaxed text-gray-600 md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed'>
              "Terwujudnya masyarakat desa jayasampurna yang berakhlak mulia,
              sehat, cerdas dan sejahtera."
            </p>
          </div>
          <div className='flex flex-col gap-3 mt-3' data-aos='fade-left'>
            <h1 className='font-semibold text-lg md:text-xl'>Misi</h1>
            <div className='pl-5'>
              <ul className='list-disc flex flex-col gap-3 leading-relaxed text-gray-600 md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed'>
                <li>
                  Meningkatkan kualitas kehidupan beragama dalam mewujudkan
                  masyarakat desa jayasampurna yang beriman dan bertaqwa melalui
                  penempatan agama sebagai sumber motivasi dan inspirasi
                </li>
                <li>
                  Meningkatkan profesionalisme perangkat desa sebagai pelayanan
                  masyarakat
                </li>
                <li>
                  Meningkatkan komunikasi dengan segenap komponen masyarakat
                </li>
                <li>
                  Meningkatkan pemberdayaan masyarakat dari seluruh kekuatan
                  ekonomi, sosial, budaya, pertahanan dan keamanan
                </li>
                <li>
                  Meningkatkan pelayanan kesehatan melalui sadar kebersihan,
                  cepat tanggap untuk berobat dan Peningkatan Pendidikan dengan
                  tuntas wajib belajar
                </li>
                <li>
                  Meningkatkan potensi pertanian sebaga sumber pendapatan utama
                  masyarakat
                </li>
                <li>
                  Meningkatkan pembangunan guna percepatan pertumbuhan ekonomi
                  melalui perbaikan sarana dan prasarana umum
                </li>
                <li>
                  Meningkatkan potensi pertanian, perkebunan, dan home industry
                  sebagai sumber pendapatan masyarakat
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section
          className='py-3 sm:py-12 px-6 sm:px-10 flex flex-col gap-5 mb-16'
          ref={profilDesaRef}
        >
          <div
            className='flex flex-col justify-start border-b-4 pb-2 w-max border-gray-200 '
            data-aos='fade-up'
          >
            <h1 className='text-lg font-bold md:text-xl lg:text-3xl text-center md:text-left '>
              Buku Profil Desa Jayasampurna
            </h1>
          </div>
          <div data-aos='fade-up'>
            <PdfReader fileUrl='./assets/buku-profil-desa.pdf' />
          </div>
        </section>
        <section
          className='py-12 px-6 sm:px-10 flex flex-col gap-3 mb-16'
          ref={galeriRef}
        >
          <div
            className='flex flex-col justify-start border-b-4 pb-2 w-max border-gray-200 '
            data-aos='fade-up'
          >
            <h1 className='text-lg font-bold md:text-xl lg:text-3xl text-center md:text-left '>
              Galeri Perpustakaan
            </h1>
          </div>
          <div data-aos='fade-up' className='sm:p-10 p-2'>
            <SimpleGrid
              breakpoints={[
                { minWidth: 0, cols: 2, spacing: 15, verticalSpacing: 15 },
                { minWidth: 'sm', cols: 2, spacing: 30, verticalSpacing: 30 }
              ]}
            >
              <a href={GALERI_1} target='_self'>
                <img
                  src={GALERI_1}
                  alt='perpustakaan desa jayasampurna'
                  className='w-full h-full object-fill rounded-tl-[30px] sm:rounded-tl-[50px] shadow-md hover:scale-105 transition-all duration-500 hover:rounded-lg hover:shadow-xl'
                />
              </a>
              <a href={GALERI_4} target='_self'>
                <img
                  src={GALERI_4}
                  alt='perpustakaan desa jayasampurna'
                  className='w-full h-full object-fill rounded-tr-[30px] sm:rounded-tr-[50px] shadow-md hover:scale-105 transition-all duration-500 hover:rounded-lg hover:shadow-xl'
                />
              </a>
              <a href={GALERI_2} target='_self'>
                <img
                  src={GALERI_2}
                  alt='perpustakaan desa jayasampurna'
                  className='w-full h-full object-fill rounded-bl-[30px] sm:rounded-bl-[50px] shadow-md hover:scale-105 transition-all duration-500 hover:rounded-lg hover:shadow-xl'
                />
              </a>
              <a href={GALERI_3} target='_self'>
                <img
                  src={GALERI_3}
                  alt='perpustakaan desa jayasampurna'
                  className='w-full h-full object-fill rounded-br-[30px] sm:rounded-br-[50px] shadow-md hover:scale-105 transition-all duration-500 hover:rounded-lg hover:shadow-xl'
                />
              </a>
            </SimpleGrid>
          </div>
        </section>
        <section className='py-12 px-6 sm:px-10 mb-16'>
          <div className='flex gap-5 items-center'>
            <h1 className='text-xl font-bold md:text-2xl md:leading-snug lg:text-3xl lg:leading-snug'>
              Ayo Membaca
            </h1>
            <img src={HIGIF} alt='jayasampurna' className='w-10' />
          </div>
          <div className='mt-10 flex flex-col gap-10'>
            <Tabs
              keepMounted={false}
              defaultValue='0'
              variant='pills'
              radius='md'
              color='gray'
              ref={bukuFiksiRef}
            >
              <div className='border rounded-lg'>
                <div className='p-5 border-b bg-gray-100'>
                  <h1 className='font-semibold capitalize text-lg'>Fiksi :</h1>
                </div>
                <Tabs.List className='p-2'>
                  {fiksiBooks.kategory.map((value, index) => (
                    <Tabs.Tab value={index.toString()} key={index}>
                      {value.nama}
                    </Tabs.Tab>
                  ))}
                </Tabs.List>
              </div>

              {fiksiBooks.kategory.map((values, index) => (
                <Tabs.Panel
                  value={index.toString()}
                  key={index}
                  className='mt-5'
                >
                  <SimpleGrid
                    breakpoints={[
                      { minWidth: 0, cols: 2, spacing: 'sm' },
                      { minWidth: 'sm', cols: 3, spacing: 'md' },
                      { minWidth: 'md', cols: 4, spacing: 'lg' },
                      { minWidth: 'lg', cols: 5, spacing: 'xl' }
                    ]}
                  >
                    {values.list.map(value => (
                      <Card
                        value={value as unknown as PropsCard}
                        key={value.id}
                      />
                    ))}
                  </SimpleGrid>
                </Tabs.Panel>
              ))}
            </Tabs>

            <Tabs
              keepMounted={false}
              defaultValue='0'
              variant='pills'
              radius='md'
              color='gray'
              ref={bukuNonFiksiRef}
            >
              <div className='border rounded-lg'>
                <div className='p-5 border-b bg-gray-100'>
                  <h1 className='font-semibold capitalize text-lg'>
                    Non-Fiksi :
                  </h1>
                </div>
                <Tabs.List className='p-2'>
                  {nonFiksiBooks.kategory.map((value, index) => (
                    <Tabs.Tab value={index.toString()} key={index}>
                      {value.nama}
                    </Tabs.Tab>
                  ))}
                </Tabs.List>
              </div>

              {nonFiksiBooks.kategory.map((values, index) => (
                <Tabs.Panel value={index.toString()} key={index}>
                  {values.nama === 'Kamus' ? (
                    <SimpleGrid
                      breakpoints={[
                        { minWidth: 0, cols: 2, spacing: 'sm' },
                        { minWidth: 'sm', cols: 3, spacing: 'md' },
                        { minWidth: 'md', cols: 4, spacing: 'lg' },
                        { minWidth: 'lg', cols: 5, spacing: 'xl' }
                      ]}
                      className='pt-4'
                    >
                      {values.list?.map(value => (
                        <Card
                          value={value as unknown as PropsCard}
                          key={value.id}
                        />
                      ))}
                    </SimpleGrid>
                  ) : values.nama === 'Pendidikan' ? (
                    <Accordion
                      variant='contained'
                      transitionDuration={700}
                      className='pt-4'
                      radius='md'
                      color='gray'
                    >
                      {values.sub?.map((value, index) => (
                        <Accordion.Item value={value.nama} key={index}>
                          <Accordion.Control>{value.nama}</Accordion.Control>
                          <Accordion.Panel>
                            <SimpleGrid
                              breakpoints={[
                                { minWidth: 0, cols: 2, spacing: 'sm' },
                                { minWidth: 'sm', cols: 3, spacing: 'md' },
                                { minWidth: 'md', cols: 4, spacing: 'lg' },
                                { minWidth: 'lg', cols: 5, spacing: 'xl' }
                              ]}
                            >
                              {value.list?.map(val => (
                                <Card
                                  value={val as unknown as PropsCard}
                                  key={val.id}
                                />
                              ))}
                            </SimpleGrid>
                            <div className='flex flex-col gap-8'>
                              {value.kategori?.map(val => (
                                <div key={index}>
                                  <h1 className='font-semibold px-6 py-1 mb-5 w-max inline-block bg-black text-white rounded-md text-[12px]'>
                                    {val.kelas}
                                  </h1>
                                  <SimpleGrid
                                    breakpoints={[
                                      { minWidth: 0, cols: 2, spacing: 'sm' },
                                      {
                                        minWidth: 'sm',
                                        cols: 3,
                                        spacing: 'md'
                                      },
                                      {
                                        minWidth: 'md',
                                        cols: 4,
                                        spacing: 'lg'
                                      },
                                      { minWidth: 'lg', cols: 5, spacing: 'xl' }
                                    ]}
                                  >
                                    {val.list?.map(v => (
                                      <Card
                                        value={v as unknown as PropsCard}
                                        key={v.id}
                                      />
                                    ))}
                                  </SimpleGrid>
                                </div>
                              ))}
                            </div>
                          </Accordion.Panel>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  ) : (
                    <Accordion
                      variant='contained'
                      transitionDuration={700}
                      className='pt-4'
                      radius='md'
                      color='gray'
                    >
                      {values.sub?.map((value, index) => (
                        <Accordion.Item value={value.nama} key={index}>
                          <Accordion.Control>{value.nama}</Accordion.Control>
                          <Accordion.Panel>
                            <SimpleGrid
                              breakpoints={[
                                { minWidth: 0, cols: 2, spacing: 'sm' },
                                { minWidth: 'sm', cols: 3, spacing: 'md' },
                                { minWidth: 'md', cols: 4, spacing: 'lg' },
                                { minWidth: 'lg', cols: 5, spacing: 'xl' }
                              ]}
                            >
                              {value.list?.map(val => (
                                <Card
                                  value={val as unknown as PropsCard}
                                  key={val.id}
                                />
                              ))}
                            </SimpleGrid>
                            <div className='flex flex-col gap-8'>
                              {value.kategori?.map(val => (
                                <div key={index}>
                                  <h1 className='font-semibold px-6 py-1 mb-5 w-max inline-block bg-black text-white rounded-md text-[12px]'>
                                    {val.kelas}
                                  </h1>
                                  <SimpleGrid
                                    breakpoints={[
                                      { minWidth: 0, cols: 2, spacing: 'sm' },
                                      {
                                        minWidth: 'sm',
                                        cols: 3,
                                        spacing: 'md'
                                      },
                                      {
                                        minWidth: 'md',
                                        cols: 4,
                                        spacing: 'lg'
                                      },
                                      { minWidth: 'lg', cols: 5, spacing: 'xl' }
                                    ]}
                                  >
                                    {val.list?.map(v => (
                                      <Card
                                        value={v as unknown as PropsCard}
                                        key={v.id}
                                      />
                                    ))}
                                  </SimpleGrid>
                                </div>
                              ))}
                            </div>
                          </Accordion.Panel>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  )}
                </Tabs.Panel>
              ))}
            </Tabs>
          </div>
        </section>
        <section
          className='py-12 px-6 sm:px-10 flex flex-col gap-10 mb-16'
          ref={lokasiRef}
        >
          <h1 className='text-2xl font-bold md:text-4xl md:leading-snug lg:text-5xl lg:leading-snug'>
            Lokasi
          </h1>
          <div>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0971968204817!2d107.08092429999999!3d-6.3814544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6997488b717bc3%3A0x4a36f9d2a9970898!2sKantor%20Desa%20Jaya%20Sampurna!5e0!3m2!1sid!2sid!4v1691332995624!5m2!1sid!2sid'
              className='w-full h-[400px] rounded-[50px]'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
        </section>
      </Container>
      <footer className='border-t bg-white/70 backdrop-blur-md mt-10'>
        <Container className='flex flex-wrap justify-between items-center gap-5 py-5 px-6 sm:px-10 '>
          <div className='flex items-center gap-2'>
            <img src={LOGO} alt='Logo Kabupaten Bekasi' width={40} />
            <h1 className='font-semibold text-xl'>Desa Jayasampurna</h1>
          </div>
        </Container>
        <Container className='pt-4 px-7 pb-7 sm:px-10 font-medium text-[12px] sm:text-[14px] flex gap-1 flex-wrap justify-center'>
          <p>&copy; 2023 Desa Jayasampurna.</p>
          <p>KKN Universitas Pelita Bangsa 2023</p>
        </Container>
      </footer>
      <ButtonScrolltoTop scrollTo={scrollTo} opacity={scroll.y > 100 ? 1 : 0} />
    </>
  )
}

export default App
