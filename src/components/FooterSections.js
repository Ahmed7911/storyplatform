
import "./FooterSection.css"; 

export default function FooterSections() {
  return (
    <div className="footer-sections">
      <section  className="footerSectionIcon">
        <a href="/AboutMe"><img src={require('../assets/images/aboutMeIcon.png')} style={{width:"40px", height:"40px"} }/></a>
      </section>
      <section id="contact" className="footerSectionIcon">
        <a href="/ContactMe"><img src={require('../assets/images/contactMeIcon.png')} style={{width:"40px" , height:"40px"}} /></a>
      </section>
    </div>
  );
}
