import Container from "react-bootstrap/Container";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import LoginForm from "../components/forms/LogInForm";

const LogInPage = () => {
  return (
    <div>
      <NavBar />
      <Container className="min-vh-100">
        <Container className="card p-5 my-2">
          <LoginForm />
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default LogInPage;
