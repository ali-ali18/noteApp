import styled from "styled-components"
import CampoTexto from "./campoTexto"
import Botao from "./botao"

const FormularioEstilizado = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:#05CC47;
    margin: 1rem 10px;
    padding: 2rem 0;
    border-radius: 10px;
    gap: 18px;
`

const Formulario = () => {
    return (
        <FormularioEstilizado>
            <CampoTexto
                label="Tarefa"
                nome="Tarefa"
                placeholder="De um nome a sua tarefa..."
                type="text"
                obrigatorio
            />
            <CampoTexto
                label="Descreva sua tarefa"
                nome="Descrição"
                placeholder="Uma breve descrição da tarefa..."
                type="text"
                obrigatorio
            />
            <CampoTexto
                label="Opcional"
                nome="Opicional"
                placeholder="Caso tenha um direcionamento"
                type="text"
                obrigatorio={false}
            />
            <Botao textBotao="Salvar"/>
        </FormularioEstilizado>
    )
}

export default Formulario