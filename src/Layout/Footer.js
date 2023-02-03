import '../Assets/Styles/Footer.css';

function Footer(props) {
  return (
    <footer>
      <h3>{props.myName}</h3>
      <p>&copy;2023</p>
    </footer>
  );
};

export default Footer;