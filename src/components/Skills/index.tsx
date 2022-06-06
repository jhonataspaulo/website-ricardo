import {css} from '../../stitches.config';
import {Section} from '../Shared/Section';
import {Content, SkillsBox, Skill} from './styles';
import {Photoshop, Illustrator, CorelDraw} from '../Shared/Icons';

const back = css({
  backgroundColor: '$blue',
  padding: '8rem 0'
});

export function Skills() {
  return (
    <Section background={back} idSection="skills">
      <Content>
        <h1>Habilidades</h1>
        <h2>Ferramentas com as quais trabalho</h2>
        <SkillsBox>
          <Skill>
            <Photoshop color="black" sizeIcon="mobile" />
            <h2>Photoshop</h2>
            <p>
              Trabalho com photoshop há mais de 6 anos, com flyers para eventos,
              mockups, uniformes esportivos e muito mais
            </p>
          </Skill>
          <Skill>
            <Illustrator color="black" sizeIcon="mobile" />
            <h2>Illustrator</h2>
            <p>Edição de SVGs artes ilustratiivas, e muito mais</p>
          </Skill>
          <Skill>
            <CorelDraw color="black" sizeIcon="mobile" />
            <h2>CorelDRAW</h2>
            <p>
              Trabalhos como moldes de uniformes, banners, cartões de visita,
              flyer, entre outros...
            </p>
          </Skill>
        </SkillsBox>
      </Content>
    </Section>
  );
}
