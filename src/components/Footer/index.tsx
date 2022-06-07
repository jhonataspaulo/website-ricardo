import {css} from '../../stitches.config';
import {Behance, Facebook, Instagram, Twitter, WhatsApp} from '../Shared/Icons';
import {Section} from '../Shared/Section';
import {
  Content,
  Profile,
  SocialLinks,
  PhoneNumber,
  WhatsAppBox,
  Copy
} from './styles';

const back = css({
  backgroundColor: '$black',
  padding: '8rem 0'
});

export function Footer() {
  return (
    <Section background={back} idSection="contact">
      <Content>
        <Profile>
          <div>
            <h1>Ricardo Albertini</h1>
            <h2>Designer Gráfico</h2>
          </div>
          <SocialLinks>
            <a href="https://www.facebook.com/ricardodk25">
              <Facebook sizeIcon="mobile" colorHover="#1B76F2" />
            </a>
            <a href="https://twitter.com/Ricardo_ra_10">
              <Twitter sizeIcon="mobile" colorHover="#00acee" />
            </a>
            <a href="https://www.instagram.com/ricardoalbertini_rd/">
              <Instagram sizeIcon="mobile" colorHover="#F66041" />
            </a>
            <a href="https://www.behance.net/dk25ra7c10">
              <Behance sizeIcon="mobile" colorHover="#1664F2" />
            </a>
          </SocialLinks>
        </Profile>
        <WhatsAppBox>
          <WhatsApp sizeIcon="default" color="green" />
          WhatsApp
        </WhatsAppBox>
        <PhoneNumber>(99) 99194-7529</PhoneNumber>
        <Copy>
          <p>
            Copyright 2022 © <span>ricardoalbertini</span>. todos os direitos
            reservados
          </p>
          <p>
            Site criado por{' '}
            <a href="https://github.com/jhonataspaulo">Jhonatas Paulo</a>
          </p>
        </Copy>
      </Content>
    </Section>
  );
}
