import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <>
      <Spinner
        animation="border"
        variant="warning"
        className="d-block mx-auto p-5"
      />
    </>
  );
};

export default Loader;
