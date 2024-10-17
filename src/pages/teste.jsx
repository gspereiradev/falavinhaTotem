import imagem from '../assets/image/MinilogoBlack.png'
import Botoes from '../components/Botoes'
import HeaderApp from '../components/Header'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'


export default function teste() {

    const navigate = useNavigate();
    const Servicos = () => {
        navigate('/servicos')
    }


    return (
            <div className="teste" style={{ justifyContent: 'end', alignItems: 'start' }}>
                <HeaderApp >
                    <div>
                        <Botoes onClick={Servicos} className='btnVoltar'><IoArrowBackCircleOutline className='icon' /></Botoes>
                        <img src={imagem} style={{ height: '50vh', opacity: 0.1, position: 'absolute', right: -50 }} alt="" />
                    </div>
                </HeaderApp>
            </div>
    )
}