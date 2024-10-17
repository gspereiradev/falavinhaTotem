import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderApp from '../components/Header';
import HeroApp from '../components/Hero';
import {IoArrowBackCircleOutline} from 'react-icons/io5';
import fundo from '../assets/image/Cigam.png';
import Botoes from '../components/Botoes';
import {motion} from 'framer-motion';
import FooterApp from '../components/Footer';
import routes from '../routes';
import textos from '../components/textos';


const Cigam = () => {
  
  const navigate = useNavigate();

  return (
    <motion.div 
        className='fundoGeral'
        style={{backgroundImage: `url(${fundo})`}}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
    >
      <HeaderApp>
        <Botoes onClick={()=> navigate(-1)} className='btnVoltar'><IoArrowBackCircleOutline className='icon'/></Botoes>
      </HeaderApp>
      <HeroApp>
        <main className='hero'>
            <div>
                <h1 className='title'>{textos.cigam.Titulo}</h1>
                <h2 className='subtitulo'>{textos.cigam.Subtitulo} <span style={{color: '#FE710E', fontFamily: 'Gilroy-bold', fontSize: 14}}>completamente integrado!</span></h2>
            </div>
            <div className='textoMain'>
                <p>{textos.cigam.texto}</p>
            </div>
            <div className='link'>
                <Botoes onClick={() => navigate(routes.dashboardGestor)} className= 'opcoes'>DASHBOARD BI CIGAM</Botoes>
                <Botoes onClick={() => navigate(routes.powerapps)} className= 'opcoes'>FAÇA UMA SIMULAÇÃO</Botoes>
            </div>
        </main>
      </HeroApp>
      <FooterApp></FooterApp>
    </motion.div>
  );
}
export default Cigam
