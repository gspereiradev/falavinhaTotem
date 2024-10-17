import { useContext, useEffect } from "react";
import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import FooterApp from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const questions = [
  {
    id: 1,
    text: `Você já está familiarizado com os conceitos de turnover e rotatividade, 
    mas sabe como a análise preditiva pode ajudar a reduzir essas taxas em até 30% em grandes empresas?`,
    options: [
      { value: 4, label: "Sim, usamos análise preditiva com sucesso." },
      {
        value: 3,
        label: "Estamos implementando, mas ainda não atingimos a meta. ",
      },
      { value: 2, label: "Estamos explorando, mas sem aplicação prática." },
      { value: 1, label: "Conhecemos o conceito, mas não aplicamos." },
      { value: 0, label: "Não estamos familiarizados com isso. " },
    ],
  },
  {
    id: 2,
    text: ` Você sabe como a inteligência artificial está sendo usada para otimizar processos de 
    recrutamento e seleção em empresas de ponta atualmente?
    `,
    options: [
      { value: 4, label: "Sim, usamos IA amplamente com bons resultados. " },
      { value: 3, label: "Usamos IA em algumas áreas. " },
      { value: 2, label: "Estamos testando ou começando a implementar." },
      { value: 1, label: "Conhecemos a IA, mas não a usamos. " },
      { value: 0, label: "Não estamos cientes do uso de IA." },
    ],
  },
  {
    id: 3,
    text: `Você já aplicou a análise de pessoas (people analytics) 
    para prever a retenção de talentos, ou ainda está usando métodos 
    tradicionais para tomar essas decisões?`,
    options: [
      { value: 4, label: "Sim, usamos people analytics com sucesso. " },
      { value: 3, label: "Estamos começando a usar com alguns resultados. " },
      { value: 2, label: "Estamos considerando o uso. " },
      {
        value: 1,
        label: "Dependemos de métodos tradicionais, mas conhecemos o conceito.",
      },
      { value: 0, label: "Não usamos nem estamos cientes dis" },
    ],
  },
  {
    id: 4,
    text: `Como você tem ajustado sua estratégia de gestão de talentos com 
    base no conceito de employee experience?`,
    options: [
      {
        value: 4,
        label:
          "a)	Sim, ajustamos regularmente com base no employee experience. ",
      },
      { value: 3, label: "b)	Fazemos ajustes ocasionais. " },
      { value: 2, label: "c)	Estamos começando a considerar isso. " },
      { value: 1, label: "d)	Conhecemos o conceito, mas não aplicamos. " },
      { value: 0, label: "e)	Não consideramos isso em nossa estratégia. " },
    ],
  },
  {
    id: 5,
    text: `Você já enfrentou dificuldades para integrar novas tecnologias no 
    processo de avaliação de desempenho dos colaboradores?`,
    options: [
      { value: 4, label: "Sim, integramos com sucesso novas tecnologias. " },
      { value: 3, label: "Estamos em processo de integração." },
      { value: 2, label: "Enfrentamos dificuldades, mas estamos tentando." },
      { value: 1, label: "Conhecemos as tecnologias, mas não as integramos. " },
      { value: 0, label: "Não usamos novas tecnologias." },
    ],
  },
  {
    id: 6,
    text: `Com as recentes mudanças na legislação trabalhista, como você está garantindo 
    que os processos de recrutamento e demissão estejam 100% em conformidade?`,
    options: [
      { value: 4, label: "Sim, garantimos total conformidade. " },
      {
        value: 3,
        label:
          "Quase totalmente em conformidade, com pequenos ajustes necessários. ",
      },
      { value: 2, label: "Estamos trabalhando para alcançar a conformidade. " },
      {
        value: 1,
        label:
          "Conhecemos as mudanças, mas ainda não estamos em conformidade. ",
      },
      { value: 0, label: "Não estamos em conformidade. " },
    ],
  },
];

export default function Questionario() {
  const { answers, setAnswers } = useContext(GlobalContext);

  const navigate = useNavigate();

  useEffect(() => {
    setAnswers({});
  }, [setAnswers]);

  const handleChange = (questionId, answerValue) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answerValue,
    }));
  };

  function isAllQuestionsAnswered() {
    return Object.keys(answers).length === questions.length;
  }

  const labelWrapper = {
    display: "flex",
    flexFlow: "column",
    alignItems: "flex-start",
    gap: "5px",
    marginBottom: "30px",
  };

  return (
    <>
      <HeaderApp>
        {/* <Botoes onClick={() => navigate(-1)} className="btnVoltar">
          <IoArrowBackCircleOutline className="icon" />
        </Botoes> */}
      </HeaderApp>
      <HeroApp>
        <div className="base_container">
          <h1 style={{ marginBottom: "30px" }}>
            Faça um pesquisa sobre sua empresa
          </h1>
          {questions.map((question) => (
            <div
              style={{
                width: "100%",
                marginBottom: "30px",
              }}
              key={question.id}
            >
              <p>{question.question}</p>
              <div style={labelWrapper}>
                {question.options.map((option) => (
                  <label key={option.value}>
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option.value}
                      checked={answers[question.id] === option.value}
                      onChange={() => handleChange(question.id, option.value)}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>
          ))}

          {isAllQuestionsAnswered() && (
            <button
              onClick={() => navigate("/resposta-questionario")}
              style={{
                padding: "10px 20px",
                backgroundColor: "blue",
                color: "#fff",
                border: "none",
                outline: "none",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              Ver resultado
            </button>
          )}
        </div>
      </HeroApp>

      <FooterApp />
    </>
  );
}
