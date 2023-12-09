import { Colors } from '../../variables/colors';
import { UIBox } from '../UI/Box.styled';
import { UIFlex } from '../UI/Flex.styled';
import { UIText } from '../UI/Text.styled';
import ImgLms from '../../assets/img/lms.png';
import ImgLMSMarket from '../../assets/img/lms-market.png';
import ImgLmsWeb from '../../assets/img/lms-web2.png';
import ImgCSZ from '../../assets/img/csz.png';
import * as Styled from './Projects.styled';

const projects = [
  {
    id: '0',
    title: 'LetMeSpeak',
    link: 'https://letmespeak.org/',
    description: 'The first English learning platform with financial motivation.',
    img: ImgLms,
  },
  {
    id: '1',
    title: 'LetMeSpeak Web Application',
    link: 'https://web.letmespeak.org/',
    description: 'LetMeSpeak web game for learning English.',
    img: ImgLmsWeb,
  },
  {
    id: '2',
    title: 'LetMeSpeak Marketplace',
    link: 'https://market.letmespeak.org/',
    description: 'LetMeSpeak web3 (Solana) characters marketplace.',
    img: ImgLMSMarket,
  },
  {
    id: '3',
    title: 'County Sports Zone',
    link: 'https://countysports.zone/',
    description: 'Application for American schools sports league.',
    img: ImgCSZ,
  },
];

export function Projects() {
  return (
    <UIBox mt={48} id='experience'>
      <UIText mb={16} $bold color={Colors.GREY}>
        PROJECTS
      </UIText>

      <UIFlex direction='column' gap={32}>
        {projects.map((project) => {
          return (
            <UIFlex key={project.id} gap={16}>
              <Styled.Img src={project.img} alt='' />

              <UIFlex direction='column' gap={8}>
                <a href={project.link} target='_blank' rel='noreferrer'>
                  <UIText $bold color={Colors.MINT}>
                    {project.title}
                  </UIText>
                </a>
                <UIText color={Colors.GREY2}>{project.description}</UIText>
              </UIFlex>
            </UIFlex>
          );
        })}
      </UIFlex>
    </UIBox>
  );
}
