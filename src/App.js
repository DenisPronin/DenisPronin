import { About } from './components/About/About';
import { LeftColumn } from './components/Layout/LeftColumn/LeftColumn';
import { RightColumn } from './components/Layout/RightColumn/RightColumn';
import { Summary } from './components/Summary/Summary';
import { TableOfContents } from './components/TableOfContents/TableOfContents';

function App() {
  return (
    <div className='App'>
      <LeftColumn>
        <Summary />
        <TableOfContents />
      </LeftColumn>

      <RightColumn>
        <About />
      </RightColumn>
    </div>
  );
}

export default App;
