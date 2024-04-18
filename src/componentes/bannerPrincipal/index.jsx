import styled from 'styled-components'


const ImagemEstilizada = styled.img`
    width: 100%;
`

const SectionEstilizada = styled.section`
    width: 100%;
    margin: 10px 0 0 0;
    position: relative;
    padding: 0;
    max-width: 100%;
`

const TituloEstilizado = styled.h2`
    font-size: 2rem;
    word-wrap: break-word;
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    margin: 0;
    padding: 0;
`

const DivEstilizada = styled.div`
    position: absolute;
    padding: 0;
    margin: 0;
    top: 50px;
`

const BannerPrincipal = ({ tituloDoBanner}) => {
    return (
        <SectionEstilizada>
            <ImagemEstilizada src="./imagens/bannerPrincipal.svg" alt="" />
            <DivEstilizada>
                <TituloEstilizado>{tituloDoBanner}</TituloEstilizado>
            </DivEstilizada>
        </SectionEstilizada>
    )
}

export default BannerPrincipal