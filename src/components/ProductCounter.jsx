import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ProductCounter = ({ setCounter, counter }) => {
  // q stands for: quantity
  const addCounter = (c, q) => {
    setCounter(c + q);
  };

  const removeCounter = (c, q) => {
    if (c > 1) setCounter(c - q);
  };

  return (
    <div className="d-flex mx-auto justify-content-center my-2">
      <Button
        size="xl"
        variant="dark"
        onClick={() => removeCounter(counter, 1)}
      >
        -
      </Button>
      <div className="p-2">{counter}</div>
      <Button size="xl" variant="dark" onClick={() => addCounter(counter, 1)}>
        +
      </Button>
    </div>
  );
};

export default ProductCounter;
