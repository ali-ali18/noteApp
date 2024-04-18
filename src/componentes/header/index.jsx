import styled from "styled-components"
import { CiCirclePlus } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";




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