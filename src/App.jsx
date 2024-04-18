import styled from "styled-components"
import EstilosGlobais from './componentes/estilosGlobais';
import Header from './componentes/header';
import BannerPrincipal from "./componentes/bannerPrincipal";
import Formulario from "./componentes/formulario";
import Titulo from "./componentes/titulos";
import { useState } from "react";

const EspacamentoEstilizado = styled.div`
  width: 100%;
  margin-top: 10px;
`

const MainEstilizado = styled.main`
  width: 100%;
  margin: 0;
  padding: 0;
`



function App() {

  const [exibirForm, setExibirForm] = useState(false);

  const mostraForm = () => {
      setExibirForm(!exibirForm)
  }


  return (
    <EspacamentoEstilizado>
      <EstilosGlobais />
      <Header aoClicar={mostraForm}/>
      <MainEstilizado>
        <BannerPrincipal tituloDoBanner="Os seus lembretes rápido, fácil e prático" />
        {exibirForm && <Formulario/>}
        <Titulo tamanho="2rem" lado="left">Tarefas</Titulo>
      </MainEstilizado>
    </EspacamentoEstilizado>
  )
}

export default App;
