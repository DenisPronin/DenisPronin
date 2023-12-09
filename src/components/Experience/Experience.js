import { Colors } from '../../variables/colors';
import { UIBox } from '../UI/Box.styled';
import { UIFlex } from '../UI/Flex.styled';
import { UIText } from '../UI/Text.styled';
import { ExperienceItem } from './ExperienceItem';

const experienceData = [
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
];

export function Experience() {
  return (
    <UIBox mt={48}>
      <UIText mb={16} $bold color={Colors.GREY}>
        EXPERIENCE
      </UIText>

      <UIFlex direction='column' gap={16}>
        {experienceData.map((experience) => {
          return <ExperienceItem data={experience} key={experience.id} />;
        })}
      </UIFlex>
    </UIBox>
  );
}
