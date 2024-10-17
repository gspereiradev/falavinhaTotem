import logo from '../assets/image/LogoFalavinha.png'

export default function HeaderApp(props) {
  return (
    <header className="header">
      <img src={logo} alt="Logo Falavinha" />
      <div>
        {props.children}
      </div>
    </header>
  );
}
