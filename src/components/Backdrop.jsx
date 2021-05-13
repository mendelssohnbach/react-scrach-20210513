import '../../src/index.css';

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onCancel} />;
};

export default Backdrop;
