import './App.css';
import { HeaderNav } from './components/molecules/HeaderNav';
import { Container,Heading} from '@yamada-ui/react';
import { Cards } from './components/molecules/Card';
import { UIProvider } from '@yamada-ui/react';
import { customTheme } from './theme/index';
import { recipes } from './dummy/dummyDate';

function App() {
  const onChange = (value: string) => {
    console.log(value);
  }
  const onClick = () => {
    console.log("click");
  }
  const onSelect = (value: string) => {
    console.log(value);
  }


  return (
    <UIProvider theme={customTheme} >
    <HeaderNav onChange={onChange} onClick={onClick} onSelect={onSelect}  />
    <Container marginTop="xxs">
      <Heading size="md">記事一覧</Heading>
      <Cards recipes={recipes} />
    </Container>
    </UIProvider>
  );
}

export default App;
