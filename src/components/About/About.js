import { UIFlex } from '../UI/Flex.styled';
import { Text } from '../UI/Text';

export function About() {
  return (
    <UIFlex direction='column' gap={8} id='about'>
      <Text>Hi, I'm Denis, an experienced front end developer.</Text>
      <Text>
        I have 10+ years of experience in commercial development. I'm proficient with JS frameworks
        and specialize in crafting complex and dynamic web applications that bring ideas to life.
      </Text>
      <Text>
        I am always interested in learning and applying the latest industry trends and best
        practices in my job.
      </Text>
      <Text>Currently I'm based in Serbia, Novi Sad </Text>
    </UIFlex>
  );
}
