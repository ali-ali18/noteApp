import styled from "styled-components"
import { CiCirclePlus } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

/* The code you provided is using styled-components library in React to create
styled components for a header in a React application. */
const HeaderEstilizado = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const LogoEstilizado = styled.img`
    width: 45px;
`
const LinkEstilizado = styled.a`
    color: black;
`
const BotaoEstilizado = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    border: 0;
`
// -----------------------------------------------------
/**
 * O componente 'Header' no JavaScript React renderiza um cabeçalho com um botão, logotipo, e um link para um perfil do GitHub.
 * @returns O componente 'Cabeçalho' está sendo retornado. Consiste em
 * elementos como um botão ('BotaoEstilizado'), um logotipo ('LogoEstilizado'), e um
 * link ('LinkEstilizado'). O botão tem um manipulador de eventos 'onClick' definido como o
 * Função 'aoClicar'. O logotipo é uma imagem com um caminho apontando para
 * "./imagens/logo.svg"
 */
const Header = ({aoClicar}) => {
    return(
        <HeaderEstilizado>
            <BotaoEstilizado onClick={aoClicar} > <CiCirclePlus size={40}/> </BotaoEstilizado>
            <LogoEstilizado src="./imagens/logo.svg" alt="Logo for app"/>
            <LinkEstilizado href="https://github.com/ali-ali18" >
                <FaGithub size={40} />
            </LinkEstilizado>
        </HeaderEstilizado>
    )
}


export default Header