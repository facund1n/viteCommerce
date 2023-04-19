import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const AlertSuccess = () => {
  return (
    <Alert
      status="success"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Order sent successfully!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        Our team will get back to you soon.
      </AlertDescription>
      <AlertTitle mt={4} mb={1} fontSize="lg">
        <Link to="/">
          <Button variant="success"> Go Home</Button>
        </Link>
      </AlertTitle>
    </Alert>
  );
};

export default AlertSuccess;
