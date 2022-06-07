import {css} from '../../stitches.config';
import {Button} from '../Shared/Button';
import {Section} from '../Shared/Section';
import {Content} from './styles';

const back = css({
  backgroundColor: '$lightBlue',
  padding: '8rem 0'
});

export function Classes() {
  return (
    <Section background={back} idSection="classes">
      <Content>
        <h1>Aulas</h1>
        <h2>Presencial ou online</h2>
        <p>
          Treine sua equipe de designers hoje mesmo a dominar os fundamentos de
          artes para uniformes esportivos, manuseio de máquinas de impressão,
          moldes, mockups e muito mais, entre em contato comigo agora mesmo, e
          agende seu treinamento.
        </p>
        <div>
          <a href="https://api.whatsapp.com/send?phone=5599991947529">
            <Button colorButton="black">Entrar em contato</Button>
          </a>
        </div>
      </Content>
    </Section>
  );
}
