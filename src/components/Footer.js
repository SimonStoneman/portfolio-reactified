import '../assets/styles/footer.css';

function Footer(props) {
  return (
    <footer>
      <h3>{props.name} Designs</h3>
      <p>&copy;2023</p>
      <p>Download CV</p>
    </footer>
  );
};

export default Footer;