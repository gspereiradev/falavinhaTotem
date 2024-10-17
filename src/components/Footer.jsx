export default function FooterApp(props) {
  return (
    <footer>
      <div className={props.className}>
        {props.children}
      </div>
    </footer>
  );
}
