import { useDisclosure } from '@mantine/hooks';
import { Anchor, Text, Burger } from '@mantine/core';
import { NavDrawer } from './drawer';
import ZayTanIcon from '@/fundanmentals/icons/zaytan-icon';
import { NavBar } from '../nav-bar';
import { DemoMenu } from '../desktop-nav/demo-menu';

export function MobileNav() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <NavDrawer opened={opened} close={close} />
      <NavBar>
        <NavBar.LeftSide>
          <div className="flex gap-1">
            <ZayTanIcon size={30} />
            <Text
              fz={20}
              italic={true}
              weight={550}
              sx={{ fontFamily: 'sans-serif' }}
            >
              ZAYTAN
            </Text>
          </div>
        </NavBar.LeftSide>
        <NavBar.RightSide>
          <Burger onClick={open} opened={opened} />
        </NavBar.RightSide>
      </NavBar>
    </>
  );
}