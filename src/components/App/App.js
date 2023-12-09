import { About } from '../About/About';
import { Experience } from '../Experience/Experience';
import { LeftColumn } from '../Layout/LeftColumn/LeftColumn';
import { RightColumn } from '../Layout/RightColumn/RightColumn';
import { Skills } from '../Skills/Skills';
import { SocialNetworks } from '../SocialNetworks/SocialNetworks';
import { Summary } from '../Summary/Summary';
import * as Styled from './App.styled';

function App() {
  return (
    <Styled.AppContainer>
      <Styled.Main>
        <LeftColumn>
          <Summary />
          <SocialNetworks />
        </LeftColumn>

        <RightColumn>
          <About />
          <Skills />
          <Experience />
        </RightColumn>
      </Styled.Main>
    </Styled.AppContainer>
  );
}

export default App;
