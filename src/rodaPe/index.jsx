import styled from "styled-components";

const FooterEstilizado = styled.footer`
    background-color: #05CC47;
    padding: 1.5rem;
    margin-top: 2rem;
`

const ParagrafoEstilizado = styled.p`
    font-size: 1.4rem;
    font-weight: 600;
    color: white;
    text-align: center;
    text-transform: uppercase;
`

const RodaPe = () => {
    return(
        <FooterEstilizado>
            <ParagrafoEstilizado>Projeto sem fins lucrativos</ParagrafoEstilizado>
        </FooterEstilizado>
    )
}

export default RodaPe