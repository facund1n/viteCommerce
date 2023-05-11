import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";

const Header = () => {
  return (
    <>
      <header className="text-center py-4">
        <h1>Welcome</h1>
        <p>
          Fully Frontend + Backend integration - fake commerce using vite's
          build (work in progress)
        </p>
        <Container>
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header>About this proyect:</Accordion.Header>
              <Accordion.Body>
                <ul className="d-flex flex-column align-items-start text-right">
                  <span className="fw-bold">Front end:</span>
                  <li>React JS | Bootstrap</li>
                  <span className="fw-bold">Back end:</span>
                  <li>Express | NodeJS | Mongoose </li>
                  <span className="fw-bold">Dependencies:</span>
                  <li>
                    Axios | Formik & Yup | JS-Cookie | React-auth-kit |
                    React-toastify | React-slick/carousel | Styled-components
                  </li>
                  <li>BcryptJS | Cors | dotenv | Jsonwebtoken | Nodemon</li>
                  <span className="fw-bold">Others:</span>
                  <li>Postman</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </header>
    </>
  );
};

export default Header;
