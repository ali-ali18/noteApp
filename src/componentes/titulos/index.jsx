/* Este trecho de código está usando a biblioteca de styled-components em JavaScript com o React.
Ele define um componente estilizado chamado 'TituloEstilizado' que é um 'h3' estilizado
elemento. Os estilos aplicados a esse componente incluem a definição do tamanho da fonte
com base no suporte '' passado para ele (padrão para "2rem" se não fornecido),
definindo a cor como '#05CC47', definindo o alinhamento do texto com base no
'' prop passado para ele (padrão para 'direito' se não fornecido), e
definição de valores de preenchimento e margem. 
*/
import styled from "styled-components"

const TituloEstilizado = styled.h2`
    font-size: ${(props) => props.$size || "2rem" };
    color: #05CC47;
    text-align:${(props) => props.$alinhamento || 'right' };
    padding: 0;
    margin: 10px;
`

/**
 * O componente Titulo no JavaScript React usa filhos, lado e tamanho como adereços
 * e os renderiza dentro de um componente estilizado.
 * @returns Um componente estilizado '<TituloEstilizado>' está sendo retornado com adereços
 * '' definido como 'tamanho' e '' definido como 'lado', e as crianças
 * passou para ele.
 */
const Titulo = ({children, lado, tamanho}) => {
    return(
        <TituloEstilizado $size={tamanho} $alinhamento={lado}>{children}</TituloEstilizado>
    )
}

export default Titulo