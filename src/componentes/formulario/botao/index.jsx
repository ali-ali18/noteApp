import styled from "styled-components"

const BotaoEstilizado = styled.button`
    width: 40%;
    border:none;
    border-radius: 05px;
    padding: 10px 0;
    font-size: 18px;
    font-weight: 500;
    background-color: #181A1B;
    color: #92f1b8;
`

const Botao = ( {textBotao} ) => {
    return (
        <>
        <BotaoEstilizado>{textBotao}</BotaoEstilizado>
        </>
    ) 
}

export default Botao