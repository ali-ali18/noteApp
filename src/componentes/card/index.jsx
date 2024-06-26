import { CiCircleCheck } from "react-icons/ci";
import styled from "styled-components";
/* The code you provided is using styled-components library in React to create
styled components. Each constant defined with `styled.` followed by an HTML
element (e.g., `styled.div`, `styled.h3`, `styled.p`, `styled.span`,
`styled.button`) is creating a styled version of that HTML element with specific
CSS styles applied to it. */
const DivEstilizada = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid #05cc47;
    margin: 0 1rem;
    padding: 1.3rem 0.85rem;
    border-radius: 10px;
    box-shadow: 5px 5px 6px rgba(0,0,0,0.1);
    position: relative;
`
const H3Estilizado = styled.h3`
    margin: 0;
    padding: 0;
    font-size: 1.8rem;
    color: #05cc47;
    font-weight: 500;
`
const ParagrafoEstilizado = styled.p`
    margin: 8px 0;
    padding: 0;
    font-size: 1.1rem;
    color: #181a1b;
`
const SpanEstilizado = styled.span`
    font-size: .875rem;
    font-weight: 300;
`
const DivIcon = styled.div`
    position: absolute;
    top: -18px;
    right: -15px;
`
const ButaoEstilizado = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
`

/* O componente 'CardTarefa' é um componente funcional no React que inclui
adereços 'titulo', 'paragrafo', 'opcional', 'aoDeletar' e 'tarefa'. Dentro do
, ele retorna uma estrutura de cartão estilizada usando os componentes estilizados
definido anteriormente no código. */
const CardTarefa = ({ titulo, paragrafo, opcional, aoDeletar,tarefa }) => {
    return (
        <DivEstilizada>
            <>
                <H3Estilizado>{titulo}</H3Estilizado>
                <ParagrafoEstilizado>{paragrafo}</ParagrafoEstilizado>
                {opcional ? <SpanEstilizado>@{opcional}</SpanEstilizado> : null}
            </>
            <DivIcon>
                <ButaoEstilizado onClick={() => aoDeletar(tarefa)}>
                    <CiCircleCheck size={35} />
                </ButaoEstilizado>
            </DivIcon>
        </DivEstilizada>
    )
}

export default CardTarefa