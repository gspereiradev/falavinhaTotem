import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderApp from '../components/Header';
import HeroApp from '../components/Hero';
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import fundo from '../assets/image/BITotem.png'
import Botoes from '../components/Botoes';
import { motion } from 'framer-motion'
import FooterApp from '../components/Footer';
import routes from '../routes';
import textos from '../components/textos';


const Dashboard = () => {

  const navigate = useNavigate()
  const [lastInteraction, setLastInteraction] = useState(Date.now());

  useEffect(() => {
    // Tempo de inatividade (exemplo: 5 minutos = 300000 ms)
    const timeoutDuration = 300000;

    const handleActivity = () => {
      setLastInteraction(Date.now()); // Atualiza o tempo da última interação
    };

    const interval = setInterval(() => {
      if (Date.now() - lastInteraction > timeoutDuration) {
        navigate('/'); // Redireciona para a página inicial
      }
    }, 1000); // Verifica a cada 1 segundo

    // Ouve eventos de interação com a página
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keypress', handleActivity);

    // Limpa os listeners e o intervalo ao desmontar o componente
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keypress', handleActivity);
    };
  }, [lastInteraction, navigate]);

  return (
    <motion.div
      className='fundoGeral'
      style={{ backgroundImage: `url(${fundo})` }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
    >
      <HeaderApp>
        <Botoes onClick={() => navigate(-1)} className='btnVoltar'><IoArrowBackCircleOutline className='icon' /></Botoes>
      </HeaderApp>
      <HeroApp>
        <main className='hero'>
          <div>
            <h1 className='title'>{textos.Business.Titulo}</h1>
            <h2 className='subtitulo'>{textos.Business.Subtitulo}</h2>
          </div>
          <div className='textoMain'>
            <p>O <span style={{fontFamily: 'Gilroy-bold'}}>{textos.Business.PalavraChave}</span>{textos.Business.Texto}</p>
          </div>
          <div className='link'>
            <Botoes onClick={() => navigate(routes.dashboardGestor)} className='opcoes'>BI GESTOR 2.0</Botoes>
            <Botoes onClick={() => navigate(routes.dashboardFinanceiro)} className='opcoes'>BI FINANCEIRO</Botoes>
            <Botoes onClick={() => navigate(routes.dashboardGestor)} className='opcoes'>BI GESTÃO DE ESTOQUE</Botoes>
            <Botoes onClick={() => navigate(routes.powerapps)} className='opcoes'>BI RECURSOS HUMANOS</Botoes>
            <Botoes onClick={() => navigate(routes.powerapps)} className='opcoes'>BI TRIBUTÁRIO</Botoes>
            <Botoes onClick={() => navigate(routes.powerapps)} className='opcoes'>BI VENDAS</Botoes>
          </div>
        </main>
      </HeroApp>
      <FooterApp></FooterApp>
    </motion.div>
  );
}
export default Dashboard