import { Colors } from '../../variables/colors';
import { UIFlex } from '../UI/Flex.styled';
import { Text } from '../UI/Text';
import * as Styled from './ExperienceItem.styled';

export function ExperienceItem({ data }) {
  return (
    <Styled.ItemContainer>
      <Styled.DateColumn>
        {data.startDate} — {data.endDate}
      </Styled.DateColumn>
      <div>
        <Text $bold color={Colors.GREY}>
          {data.position}
        </Text>
        <Text $bold color={Colors.MINT} size={14} mt={8}>
          {data.companyName}
        </Text>
        <Text size={14} color={Colors.GREY} mt={8}>
          {data.companyDescription}
        </Text>

        <Styled.DescriptionList>
          {data.descriptionItems.map((item, index) => (
            <li key={index}>
              <Text>{item.text}</Text>
            </li>
          ))}
        </Styled.DescriptionList>

        <UIFlex gap={8} fw='wrap' mt={16}>
          {data.techStack.map((item, index) => (
            <Styled.SkillTag key={index}>{item}</Styled.SkillTag>
          ))}
        </UIFlex>
      </div>
    </Styled.ItemContainer>
  );
}
