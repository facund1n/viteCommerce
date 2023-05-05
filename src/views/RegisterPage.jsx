import Container from "react-bootstrap/Container";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import RegisterForm from "../components/forms/RegisterForm";

const RegisterPage = () => {
  return (
    <div>
      <NavBar />
      <Container className="min-vh-100">
        <Container className="card p-5 my-2">
          <RegisterForm />
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default RegisterPage;
