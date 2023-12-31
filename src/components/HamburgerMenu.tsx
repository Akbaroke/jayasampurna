import { useClickOutside, useDisclosure } from '@mantine/hooks';
import { Burger, Menu } from '@mantine/core';

interface Props {
  scrollToHome: () => void;
  scrollToVisiMisi: () => void;
  scrollToProfilDesa: () => void;
  scrollToGaleri: () => void;
  scrollToBukuFiksi: () => void;
  scrollToBukuNonFiksi: () => void;
  scrollToLokasi: () => void;
}

function HamburgerMenu({ scrollToHome, scrollToGaleri, scrollToVisiMisi, scrollToProfilDesa, scrollToBukuFiksi, scrollToBukuNonFiksi, scrollToLokasi }: Props) {
  const [opened, { toggle }] = useDisclosure(false);
  const ref = useClickOutside(() => {
    opened && toggle();
  });

  return (
    <div className="sm:hidden" ref={ref}>
      <Menu shadow="md" width={200} opened={opened}>
        <Menu.Target>
          <Burger opened={opened} onClick={toggle} />
        </Menu.Target>

        <Menu.Dropdown onClick={toggle}>
          <Menu.Item onClick={scrollToHome}>Home</Menu.Item>
          <Menu.Item onClick={scrollToVisiMisi}>Visi & Misi</Menu.Item>
          <Menu.Item onClick={scrollToProfilDesa}>Profil Desa</Menu.Item>
          <Menu.Item onClick={scrollToGaleri}>Galeri</Menu.Item>

          <Menu.Divider />
          <Menu.Label>Baca Buku</Menu.Label>
          <Menu.Item onClick={scrollToBukuFiksi}>• Fiksi</Menu.Item>
          <Menu.Item onClick={scrollToBukuNonFiksi}>• Non-FIksi</Menu.Item>
          <Menu.Divider />

          <Menu.Item onClick={scrollToLokasi}>Lokasi</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export default HamburgerMenu;
