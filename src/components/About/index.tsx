import Image from 'next/image';
import {css} from '../../stitches.config';
import {Section} from '../Shared/Section';
import {Bio, Content, BoxImage} from './styles';
import profile from '../../assets/profile.png';

const back = css({
  padding: '8rem 0'
});

export function About() {
  return (
    <Section background={back} idSection="about">
      <Bio>
        <BoxImage>
          <Image
            src={profile}
            alt="imagem do perfil de usuário"
            objectFit="contain"
          />
        </BoxImage>
        <Content>
          <h1>Sobre mim</h1>
          <h2>Um pouco sobre minha carreira</h2>
          <p>
            Meu nome é Ricardo Albertini, tenho 29 anos, trabalho com design há
            mais de 7 anos. já trabalhei pra algumas empresas, prestei serviços,
            tenho amplo conhecimento artes para mídias sociais entre outros,
            espero que possamos nos falar, e fecharmos um trabalho.
          </p>
        </Content>
      </Bio>
    </Section>
  );
}
