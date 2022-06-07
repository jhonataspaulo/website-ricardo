import {css} from '../../stitches.config';
import {Section} from '../Shared/Section';
import {Button} from '../Shared/Button';
import {
  WhatsApp,
  Facebook,
  Twitter,
  Instagram,
  Behance,
  MenuOpen,
  MenuClose
} from '../Shared/Icons';
import backgroundUrl from '../../assets/background.png';

import {
  HeaderContainer,
  Info,
  Profile,
  SocialLinks,
  MenuMobile,
  Navigation,
  BtnToggleMenu
} from './styles';

const back = css({
  minHeight: '100vh',
  padding: '2rem',

  background: `url(${backgroundUrl.src})`,
  backgroundPosition: '40% 0',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',

  '@bp1': {
    backgroundPosition: '35% 0'
  }
});

export function Header() {
  function toggleMenu() {
    const menu = document.querySelector('#menu-mobile');
    menu?.classList.toggle('active');
  }

  return (
    <Section background={back} idSection="home">
      <HeaderContainer>
        <h1>Ricardo</h1>
        <Navigation>
          <a href="#about">Sobre mim</a>
          <a href="#classes">Aulas</a>
          <a href="#skills">Habilidades</a>
          <a href="#contact">Contato</a>
        </Navigation>
        <BtnToggleMenu onClick={() => toggleMenu()}>
          <MenuOpen color="black" sizeIcon="mobile" />
        </BtnToggleMenu>
        <MenuMobile id="menu-mobile" className="">
          <BtnToggleMenu onClick={() => toggleMenu()}>
            <MenuClose color="white" sizeIcon="default" />
          </BtnToggleMenu>
          <nav>
            <a href="#about" onClick={() => toggleMenu()}>Sobre mim</a>
            <a href="#classes" onClick={() => toggleMenu()}>Aulas</a>
            <a href="#skills" onClick={() => toggleMenu()}>Habilidades</a>
            <a href="#contact" onClick={() => toggleMenu()}>Contato</a>
          </nav>
        </MenuMobile>
      </HeaderContainer>
      <Info>
        <Profile>
          <h1>
            Ricardo <br /> Albertini
          </h1>
          <h2>Designer Gráfico</h2>
        </Profile>
        <a href="https://api.whatsapp.com/send?phone=5599991947529">
          <Button colorButton="gradientBlue">
            <WhatsApp sizeIcon="small" /> WhatsApp
          </Button>
        </a>
        <SocialLinks>
          <a href="https://www.facebook.com/ricardodk25">
            <Facebook color="black" sizeIcon="mobile" colorHover="#1B76F2" />
          </a>
          <a href="https://twitter.com/Ricardo_ra_10">
            <Twitter color="black" sizeIcon="mobile" colorHover="#00acee" />
          </a>
          <a href="https://www.instagram.com/ricardoalbertini_rd/">
            <Instagram color="black" sizeIcon="mobile" colorHover="#F66041" />
          </a>
          <a href="https://www.behance.net/dk25ra7c10">
            <Behance color="black" sizeIcon="mobile" colorHover="#1664F2" />
          </a>
        </SocialLinks>
      </Info>
    </Section>
  );
}
