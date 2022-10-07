import { Link } from "react-router-dom";

function BackButton({url}) {

  return (
    <div className="back-btn"> 
      <Link to={url}><button>Go back</button></Link>
    </div>
  );
}

export default BackButton;
