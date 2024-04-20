import styled from "styled-components"
import EstilosGlobais from './componentes/estilosGlobais';
import Header from './componentes/header';
import BannerPrincipal from "./componentes/bannerPrincipal";
import Formulario from "./componentes/formulario";
import Titulo from "./componentes/titulos";
import { useEffect, useState } from "react";
import CardTarefa from "./componentes/card";
import RodaPe from "./rodaPe";

/* Esses são componentes estilizados em um aplicativo React usando styled-components. */
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
// ---------------------------------------------------------------------------------

function App() {

  /* Essas linhas de código estão usando o hooks 'useState' do React para declarar dois
  Variáveis de estado em um componente funcional: */
  const [exibirForm, setExibirForm] = useState(false);
  const [tarefas, setTarefas] = useState([])
// -----------------------------------------------------------------------------------------

/**
 * O trecho de código mostra um hook useEffect do React que recupera tarefas do local
 * storage, uma função para adicionar uma nova tarefa à lista e armazená-la no armazenamento local,
 * e uma função para excluir uma tarefa da lista e atualizar o armazenamento local conformemente
 */
  useEffect(() => {
    const tarefasArmazenadas = localStorage.getItem("tarefas");
    if (tarefasArmazenadas) {
      const tarefasParaParse = JSON.parse(tarefasArmazenadas)
      setTarefas(tarefasParaParse);
    }
  }, []);

  const novaTarefa = (tarefa) => {
    const novasTarefas = [...tarefas, tarefa];
    setTarefas(novasTarefas);
    localStorage.setItem("tarefas", JSON.stringify(novasTarefas))
    setExibirForm(!exibirForm);
  }

  const deletarTarefa = (tarefa) => {
    const novasTarefas = tarefas.filter(item => item !== tarefa)
    setTarefas(novasTarefas)
    localStorage.setItem("tarefas", JSON.stringify(novasTarefas))
  }
// -------------------------------------------------------------------------------

/**
 * A função 'mostraForm' alterna a visibilidade de um formulário atualizando o estado variável 'exibirForm'.
 */
  const mostraForm = () => {
    setExibirForm(!exibirForm);
  }
// ----------------------------------------------------------------------------------

/* Esse trecho de código é o componente principal de um aplicativo React.*/
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
            tarefas.map(tarefa => <CardTarefa titulo={tarefa.titulo} opcional={tarefa.opcional} paragrafo={tarefa.descricao} key={tarefa.titulo} aoDeletar={() => deletarTarefa(tarefa)} />)
          )}
        </SectionEstilzado>
      </MainEstilizado>
      <RodaPe />
    </EspacamentoEstilizado>
  )
}

export default App;
