import styled from "styled-components"

const TituloEstilizado = styled.h3`
    font-size: ${(props) => props.$size || "2rem" };
    color: #05CC47;
    text-align:${(props) => props.$alinhamento || 'right' };
    padding: 0;
    margin: 10px;
`

const Titulo = ({children, lado, tamanho}) => {
    return(
        <TituloEstilizado $size={tamanho} $alinhamento={lado}>{children}</TituloEstilizado>
    )
}

export default Titulo