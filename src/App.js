import './App.css';
import Paragraph from './components/paragraph/uppercase-paragraph.js';
import Button from './components/button/button.js';

function App() {
  return (
    <>
      <h1>Desafio 1</h1>

      <Paragraph color='darkviolet'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Paragraph>;

      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Paragraph>

      <h1>Desafio 2</h1>

      <Button label='Botão 1'/>
      <Button label='Botão 2'/>

    </>
  )
}

export default App;
