import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import fundo from "../assets/image/AssessoriaTributaria.png";
import Botoes from "../components/Botoes";
import { motion } from "framer-motion";
import FooterApp from "../components/Footer";
import routes from "../routes";
import textos from "../components/textos";

function Tributario() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="fundoGeral"
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
            <h1 className="title">{textos.tributario.Titulo}</h1>
            <h2 className="subtitulo">{textos.tributario.Subtitulo}</h2>
          </div>
          <div className="textoMain">
            <p>
              A{" "}
              <span
                style={{
                  color: "#C48322",
                  fontFamily: "Gilroy-bold",
                  fontSize: 24,
                }}
              >
                {textos.tributario.PalavraChave}
              </span>{" "}
              {textos.tributario.Texto}
            </p>
          </div>
          <div className="link">
            <Botoes
              onClick={() => navigate(routes.dashboardFinanceiro)}
              className="opcoes"
            >
              DASHBOARD BI TRIBUTÁRIO
            </Botoes>
            <Botoes
              onClick={() => navigate("/questionario")}
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
export default Tributario;
