import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderApp from '../components/Header';
import HeroApp from '../components/Hero';
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'
import Botoes from '../components/Botoes';
import FooterApp from '../components/Footer';
import imagem from '../assets/image/Servicos.png'
import routes from '../routes'

function SecondPage() {

  const navigate = useNavigate();
  
  return (
    <motion.div
      style={{backgroundImage: `url(${imagem})`}}
      className='fundoGeral'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
    >
      <HeaderApp>
        <Botoes onClick={() => navigate(routes.home)} className='btnVoltar'><IoArrowBackCircleOutline className='icon'/></Botoes>
      </HeaderApp>
      <HeroApp>
        <main className='hero'>
          <h1 className='title'>NOSSAS SOLUÇÕES</h1>
          {/* <span className='textoMain'>A Falavinha Next oferece uma ampla gama de serviços para otimizar a gestão de sua empresa. Entre eles estão: soluções contábeis, gestão financeira, consultoria tributária, consultoria em RH, além da criação de dashboards personalizados de Business Intelligence (BI). Somos parceiros da Cigam, proporcionando ainda mais integração e eficiência para o seu negócio.</span> */}
          <div className='link'>
            <Botoes onClick={() => navigate(routes.bi)} className='opcoes'>DASHBOARDS BI</Botoes>
            <Botoes onClick={() => navigate(routes.tributario)} className='opcoes'>TRIBUTÁRIO</Botoes>
            <Botoes onClick={() => navigate(routes.contabilidade)} className='opcoes'>CONTABILIDADE</Botoes>
            <Botoes onClick={() => navigate(routes.consultoriRh)} className='opcoes'>CONSULTORIA RH</Botoes>
            <Botoes onClick={() => navigate(routes.cigam)} className='opcoes'>CIGAM</Botoes>
            <Botoes onClick={() => navigate(routes.consultoriaEmpresarial)} className='opcoes'>CONSULTORIA EMPRESARIAL</Botoes>
            <Botoes onClick={() => navigate(routes.consultoriaEmpresarial)} className='opcoes'>CONSULTORIA EMPRESARIAL</Botoes>
            <Botoes onClick={() => navigate(routes.consultoriaEmpresarial)} className='opcoes'>CONSULTORIA EMPRESARIAL</Botoes>
          </div>
        </main>
        <FooterApp>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 50}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 10}}>
            <a href='https://falavinhanext.com.br/' border='0' style={{cursor: 'pointer', display: 'block'}}><img style={{height: 100, width: 100}} src='https://cdn.me-qr.com/qr/130261488.png?v=1729000579' alt='Create qr code for free'/></a>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <a href='https://www.instagram.com/' border='0' style={{cursor: 'pointer', display: 'block'}}><img style={{height: 100, width: 100}} src='https://cdn.me-qr.com/qr/130259779.png?v=1728999910' alt='Create qr code for free'/></a>
            </div>
          </div>
        </FooterApp>
      </HeroApp>
    </motion.div>
  );
}

export default SecondPage;
