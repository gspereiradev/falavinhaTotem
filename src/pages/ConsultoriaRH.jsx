import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import fundo from "../assets/image/ConsultoriaRHTotem.png";
import Botoes from "../components/Botoes";
import { motion } from "framer-motion";
import FooterApp from "../components/Footer";
import routes from "../routes";
import textos from "../components/textos";

function ConsultoriaRH() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="fundoGeral"
      // style={{background: 'linear-gradient(to right top, #582b6f, #354e92, #006ba5, #0085a8, #009ca1)'}}
      style={{ backgroundImage: `url(${fundo})` }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
    >
      <HeaderApp>
        <Botoes onClick={() => navigate(-1)} className="btnVoltar">
          <IoArrowBackCircleOutline className="icon" />
        </Botoes>
      </HeaderApp>
      <HeroApp>
        <main className="hero">
          <div>
            <h1 className="title">{textos.consultoriaRh.Titulo}</h1>
            <h2 className="subtitulo">{textos.consultoriaRh.Subtitulo}</h2>
          </div>
          <div className="textoMain">
            <p>
              A{" "}
              <span
                style={{
                  color: "#582B6F",
                  fontSize: 24,
                  fontFamily: "Gilroy-bold",
                }}
              >
                {textos.consultoriaRh.PalavraChave}
              </span>{" "}
              {textos.consultoriaRh.Texto}
            </p>
          </div>
          <div className="link">
            <Botoes
              onClick={() => navigate(routes.dashboardFinanceiro)}
              className="opcoes"
            >
              DASHBOARD BI CONSULTORIA RH
            </Botoes>
            <Botoes
              onClick={() => navigate(routes.powerapps)}
              className="opcoes"
            >
              FAÇA UMA SIMULAÇÃO
            </Botoes>
          </div>
        </main>
      </HeroApp>
      <FooterApp></FooterApp>
    </motion.div>
  );
}
export default ConsultoriaRH;
