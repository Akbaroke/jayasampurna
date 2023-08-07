import { useDisclosure } from '@mantine/hooks';
import { Burger, Menu } from '@mantine/core';

interface Props {
  scrollToHome: () => void;
  scrollToVisiMisi: () => void;
  scrollToBacaBuku: () => void;
  scrollToLokasi: () => void;
}

function HamburgerMenu({ scrollToHome, scrollToVisiMisi, scrollToBacaBuku, scrollToLokasi }: Props) {
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
          <Menu.Item onClick={scrollToBacaBuku}>Baca Buku</Menu.Item>
          <Menu.Item onClick={scrollToLokasi}>Lokasi</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export default HamburgerMenu;
