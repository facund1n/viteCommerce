import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <>
      <div className="d-block text-center m-5">Loading.</div>
      <Spinner
        animation="border"
        variant="dark"
        className="d-block mx-auto m-5"
      />
    </>
  );
};

export default Loader;
