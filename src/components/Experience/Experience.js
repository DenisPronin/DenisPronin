import { Colors } from '../../variables/colors';
import { UIBox } from '../UI/Box.styled';
import { UIFlex } from '../UI/Flex.styled';
import { UIText } from '../UI/Text.styled';
import { ExperienceItem } from './ExperienceItem';

const experienceData = [
  {
    id: '0',
    position: 'Senior Front End Developer',
    companyName: 'Velvetech',
    companyDescription: 'Software development company from Chicago, USA',
    startDate: '2023',
    endDate: 'PRESENT',
    descriptionItems: [
      {
        text: "Developed a healthcare web application for the care of Alzheimer's patients",
      },
      {
        text: (
          <div>
            Developed a{' '}
            <a href='https://countysports.zone/' target='_blank' rel='noreferrer'>
              web application
            </a>{' '}
            for American schools sports league.
          </div>
        ),
      },
      {
        text: 'Developed web application for return orders from shopify and walmart',
      },
    ],
    techStack: ['React', 'Redux', 'MaterialUI', 'MobX', 'Shopify', 'SCSS'],
  },
  {
    id: '1',
    position: 'Senior Front End Developer',
    companyName: 'Letmespeak.org',
    startDate: '2022',
    endDate: '2023',
    companyDescription: 'The first English learning platform with financial motivation.',
    descriptionItems: [
      {
        text: (
          <div>
            Developed company{' '}
            <a href='https://letmespeak.org/' target='_blank' rel='noreferrer'>
              website
            </a>
          </div>
        ),
      },
      {
        text: (
          <div>
            Maintained and developed new features in{' '}
            <a href='https://letmespeak.org/' target='_blank' rel='noreferrer'>
              web3 marketplace
            </a>{' '}
            for NFTs
          </div>
        ),
      },
      {
        text: (
          <div>
            Developed an English learning{' '}
            <a href='https://web.letmespeak.org' target='_blank' rel='noreferrer'>
              web application
            </a>
          </div>
        ),
      },
      {
        text: 'Developed mechanism for web deep links for  Phantom Wallet (solana)',
      },
      {
        text: 'Enhance user retention and simplify user experience',
      },
      {
        text: 'Refactored complex legacy code to improve performance and readability',
      },
    ],
    techStack: ['React', 'Redux', 'Ant Design', 'Styled components', 'Web3', 'Solana'],
  },
  {
    id: '2',
    position: 'Front End Team Lead',
    companyName: 'Sibers',
    startDate: '2014',
    endDate: '2021',
    companyDescription: 'An experienced agile software development firm',
    descriptionItems: [
      {
        text: 'Improved company tech stack to modern standards, transitioning from jQuery to frameworks like React, Angular, and Vue.js',
      },
      {
        text: 'Integrated build systems (Webpack)',
      },
      {
        text: 'Experience working on both new projects from their inception and projects with existing legacy code.',
      },
      {
        text: 'Provided project estimates and maintained communication with clients',
      },
      {
        text: 'Assembled a front-end team comprising more than 10 members',
      },
      {
        text: 'Provided mentorship to junior developers',
      },
    ],
    techStack: ['React', 'Redux', 'Vue.js', 'Angular', 'Webpack', 'jQuery', 'SCSS'],
  },
];

export function Experience() {
  return (
    <UIBox mt={48} id='experience'>
      <UIText mb={16} $bold color={Colors.GREY}>
        EXPERIENCE
      </UIText>

      <UIFlex direction='column' gap={32}>
        {experienceData.map((experience) => {
          return <ExperienceItem data={experience} key={experience.id} />;
        })}
      </UIFlex>
    </UIBox>
  );
}
