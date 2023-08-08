import { useDisclosure } from '@mantine/hooks';
import { Burger, Menu } from '@mantine/core';

interface Props {
  scrollToHome: () => void;
  scrollToVisiMisi: () => void;
  scrollToBukuFiksi: () => void;
  scrollToBukuNonFiksi: () => void;
  scrollToLokasi: () => void;
}

function HamburgerMenu({ scrollToHome, scrollToVisiMisi, scrollToBukuFiksi, scrollToBukuNonFiksi, scrollToLokasi }: Props) {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <div className="sm:hidden">
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Burger opened={opened} onClick={toggle} />
        </Menu.Target>

        <Menu.Dropdown onClick={toggle}>
          <Menu.Item onClick={scrollToHome}>Home</Menu.Item>
          <Menu.Item onClick={scrollToVisiMisi}>Visi & Misi</Menu.Item>

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
