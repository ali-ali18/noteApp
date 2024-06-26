/* This code snippet is using the `styled-components` library in JavaScript with
React. It is creating styled components for an input field, label, and a div
container. */
import styled from "styled-components"
const InputEstilizado = styled.input`
    border: none;
    padding: 14px 10px;
    border-radius: 10px;
    outline-color: #181A1B;
`
const LabelEstilizado = styled.label`
    font-size: 18px;
    margin-bottom: 4px;
    font-weight: 500;
`
const DivEstilizada = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: px;
`
// --------------------------------------------------------

const CampoTexto = ({nome, label, type="text", placeholder, obrigatorio, valor,aoReceber }) => {
/**
 * A função 'aoValorDigitado' toma um objeto de evento como entrada e chama a função 'aoReceber' com o valor do destino do evento.
 */
    const aoValorDigitado = (e) => {
        aoReceber(e.target.value)
    } 
// -------------------------------------------------------------------

    return (
        <DivEstilizada>
            <LabelEstilizado htmlFor={nome}>{label}</LabelEstilizado>
            <InputEstilizado 
            type={type} 
            placeholder={placeholder} 
            name={nome} 
            required={obrigatorio} 
            onChange={aoValorDigitado} 
            value={valor}/>
        </DivEstilizada>
    )
}

export default CampoTexto