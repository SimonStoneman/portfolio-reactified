import './footer.css';

function Footer(props) {
  return (
    <footer>
      <h3>{props.name} Designs</h3>
      <h3 id="copyright">&copy;2023</h3>
      <h3 id="cv">Download CV</h3>
    </footer>
  );
};

export default Footer;