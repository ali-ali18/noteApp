import styled from "styled-components"
import CampoTexto from "./campoTexto"
import Botao from "./botao"
import { useState } from "react"
/* The code snippet you provided is using styled-components library in React to
create a styled form component called `FormularioEstilizado`. */
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
/* O trecho de código fornecido é um componente funcional do React chamado 'Formulario'
que define três variáveis de estado usando o gancho 'useState': 'titulo',
'descrição' e 'opcional'. Essas variáveis de estado são usadas para armazenar os valores
de campos de entrada em um formulário. */
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

/* A instrução 'return' no componente 'Formulario' está renderizando elementos JSX
que compõem uma forma. */
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