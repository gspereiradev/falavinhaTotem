import { motion } from "framer-motion";
import HeaderApp from "../components/Header";
import Main from "../components/Main";
import FooterApp from "../components/Footer";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Botoes from "../components/Botoes";


// Link ao dashboard BI Gestor 2.0
const biContent = `https://app.powerbi.com/view?r=eyJrIjoiMGM5Y2VhYTUtMTdhMS00MmM0LWFmOTMtYTY4Njc2ZjMwYz
QwIiwidCI6Ijk2ZjUxYjBhLTMwNDAtNDgzZi04Yjc2LTExODQ4YmZkZTRmYiJ9&navContentPaneEnabled=false`;



function DashContabilidade() {
    const motionStyle = {
        backgroundColor: "#009499",
    };

    const navigate = useNavigate();

    return (
        <motion.div className="motion-element" style={motionStyle}>
            <HeaderApp>
                <Botoes onClick={() => navigate(-1)} className='btnVoltar'><IoArrowBackCircleOutline className='icon' /></Botoes>
            </HeaderApp>

            <Main>
                <h1 className="title">DASHBOARD BI</h1>
                <h2 className="subtitulo">Gestor 2.0 | Contabilidade</h2>
                <div className="iframeDash">
                    <iframe
                        className="iframe-content"
                        title="Gestor 2.0 (Revitalizado) - Copia"
                        src={biContent}
                        frameBorder="0"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                    <span className="iframe-border"></span>
                </div>
            </Main>
            <FooterApp></FooterApp>
        </motion.div>
    );
}

export default DashContabilidade