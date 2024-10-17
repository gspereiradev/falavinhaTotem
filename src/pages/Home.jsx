import React from 'react';
import HeaderApp from '../components/Header';
import HeroApp from '../components/Hero';
import FooterApp from '../components/Footer';
import { motion } from 'framer-motion';
import {useNavigate} from 'react-router-dom';
import Botoes from '../components/Botoes';
import fundo from '../assets/video/GifVideoTotem.gif';
import routes from '../routes';

function HomePage() {
  
  const navigate = useNavigate();

  return (

    <motion.div
      // className='fundoInicial' -- Fundo com video
      style={{backgroundImage: `url(${fundo})`}}
      className='fundoGeral'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
    >
      <HeaderApp />
      <HeroApp />
      <FooterApp className="footerInicio">
          <Botoes onClick={() => navigate(routes.servicos)} className='opcoes'>CONHEÇA NOSSOS SERVIÇOS</Botoes>
      </FooterApp>

    </motion.div>
  );
}

export default HomePage;
