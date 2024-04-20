import styled from "styled-components"
import CampoTexto from "./campoTexto"
import Botao from "./botao"
import { useState } from "react"

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



const Formulario = ( {tarefaCadastrada} ) => {

    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [opcional, setOpcional] = useState("")

    const aoSalvar = (e) => {
        e.preventDefault();
        tarefaCadastrada({
            titulo,
            descricao,
            opcional
        })
        setTitulo("")
        setDescricao("")
        setOpcional("")
    }

    return (
        <FormularioEstilizado onSubmit={aoSalvar}>
            <CampoTexto
                label="Tarefa"
                nome="Tarefa"
                placeholder="De um nome a sua tarefa..."
                type="text"
                obrigatorio
                valor={titulo}
                aoReceber={valor => setTitulo(valor)}
            />
            <CampoTexto
                label="Descreva sua tarefa"
                nome="Descrição"
                placeholder="Uma breve descrição da tarefa..."
                type="text"
                obrigatorio
                valor={descricao}
                aoReceber={valor => setDescricao(valor)}
            />
            <CampoTexto
                label="Opcional"
                nome="Opicional"
                placeholder="Caso tenha um direcionamento"
                type="text"
                obrigatorio={false}
                valor={opcional}
                aoReceber={valor => setOpcional(valor)}
            />
            <Botao textBotao="Salvar" />
        </FormularioEstilizado>
    )
}

export default Formulario