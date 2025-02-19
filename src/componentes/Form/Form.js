import Button from '../Button/Button';
import Lista from '../Lista/Lista';
import TextCamp from '../TextCamp/TextCamp';
import './Form.css';
import { useState } from 'react';

const Form = (props) => {



const [nome, setNome] = useState('')
const [cargo, setCargo] = useState('')
const [imagem, setImagem] = useState('')
const [time, setTime] = useState('')
 
const Submit = (evento) => {
    evento.preventDefault()
    props.FuncionarioCadastrado({
        nome: nome,
        cargo: cargo,
        imagem: imagem,
        time: time
    })

    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
}
        
 
    return (
        <section className='Form'>
            <form onSubmit={Submit}>
                <h2>Preencha os dados para adicionar o funcionário na escala de trabalho!</h2>


                <TextCamp obg={true} 
                label="Nome" 
                placeholder="Digite seu Nome" 
                valor = {nome}
                Alterado = {valor => setNome(valor)}

                />


                <TextCamp obg={true} 
                label="Cargo" 
                placeholder="Digite seu Cargo" 
                valor = {cargo}
                Alterado = {valor => setCargo(valor)}

                />


                <TextCamp label="Imagem" 
                placeholder="Digite o endereço da imagem" 
                valor = {imagem}
                Alterado = {valor => setImagem(valor)}

                />

                
                <Lista    
                obg={true} 
                label='Time' 
                itens={props.times}
                valor = {time}
                Alterado = {valor => setTime(valor)}
                
                />

                <Button texto="Adicionar Funcionário"/>
            </form>
        </section>

    )

}

export default Form