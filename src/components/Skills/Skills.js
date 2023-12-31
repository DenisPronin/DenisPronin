import { Colors } from '../../variables/colors';
import { UIBox } from '../UI/Box.styled';
import { UIFlex } from '../UI/Flex.styled';
import { Text } from '../UI/Text';
import { UIText } from '../UI/Text.styled';
import * as Styled from './Skills.styled';

export function Skills() {
  return (
    <UIBox mt={48} id='skills'>
      <UIText mb={16} $bold color={Colors.GREY}>
        TECH STACK
      </UIText>

      <UIFlex direction='column' gap={16}>
        <Styled.Skill>
          <Text $bold>Languages:</Text>
          <Text>Typescript, Javascript, HTML5, CSS</Text>
        </Styled.Skill>

        <Styled.Skill>
          <Text $bold>Frameworks:</Text>
          <Text>React, Vue.js, Angular</Text>
        </Styled.Skill>

        <Styled.Skill>
          <Text $bold>Libraries:</Text>
          <Text>Redux, Mobx, Material IU, Ant, Chakra UI</Text>
        </Styled.Skill>

        <Styled.Skill>
          <Text $bold>Tools:</Text>
          <Text>Git, Webpack, Vite</Text>
        </Styled.Skill>
      </UIFlex>
    </UIBox>
  );
}
