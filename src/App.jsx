import styled from "styled-components"
import EstilosGlobais from './componentes/estilosGlobais';
import Header from './componentes/header';
import BannerPrincipal from "./componentes/bannerPrincipal";
import Formulario from "./componentes/formulario";
import Titulo from "./componentes/titulos";
import { useState } from "react";
import CardTarefa from "./componentes/card";
import RodaPe from "./rodaPe";

const EspacamentoEstilizado = styled.div`
  width: 100%;
  margin-top: 10px;
`

const MainEstilizado = styled.main`
  width: 100%;
  margin: 0;
  padding: 0;
`
const SectionEstilzado = styled.section`
  display: flex;
  flex-direction: column;
  gap: 17px;
`
const MensagemDaTarefa = styled.p`
  color:#181A1B ;
  font-size: 2rem;
  text-align: center;
`

function App() {

  const [exibirForm, setExibirForm] = useState(false);
  const [tarefas, setTarefas] = useState([])

  const mostraForm = () => {
    setExibirForm(!exibirForm)
  }

  const novaTarefa = (tarefa) => {
    setTarefas([...tarefas, tarefa])
    setExibirForm(!exibirForm)
  }

  const deletar = (tarefa) => {
    const novasTarefas = tarefas.filter(item => item !== tarefa)
    setTarefas(novasTarefas)
  }

  return (
    <EspacamentoEstilizado>
      <EstilosGlobais />
      <Header aoClicar={mostraForm} />
      <MainEstilizado>
        <BannerPrincipal tituloDoBanner="Os seus lembretes rápido, fácil e prático" />
        {exibirForm && <Formulario tarefaCadastrada={(tarefa) => novaTarefa(tarefa)} />}
        <Titulo tamanho="2rem" lado="left">Tarefas</Titulo>

        <SectionEstilzado>
          {tarefas.length === 0 ? <MensagemDaTarefa> Não há tarefas a fazer 😔</MensagemDaTarefa> : (
            tarefas.map(tarefa => <CardTarefa titulo={tarefa.titulo} opcional={tarefa.opcional} paragrafo={tarefa.descricao} key={tarefa.titulo} aoDeletar={() => deletar(tarefa)} />) 
          )}
        </SectionEstilzado>
      </MainEstilizado>
      <RodaPe />
    </EspacamentoEstilizado>
  )
}

export default App;
