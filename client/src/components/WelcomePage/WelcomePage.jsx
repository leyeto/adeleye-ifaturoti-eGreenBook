import Card from "react-bootstrap/Card";
import babyImg from "../../assets/images/baby.jpg";
import "./WelcomePage.scss";
const WelcomePage = ({ patientDetails }) => {
  // console.log("patientDetails from WelcomePage : ", patientDetails);
  return (
    <div className="welcome">
      <div className="welcome__info-picture">
        <div className="welcome__info">
          <Card>
            <Card.Body>
              <h2 className="welcome__header">
                My personal child health record
              </h2>
              <ol className="welcome__list-type">
                <li className="welcome__list-element">
                  My Name : {patientDetails.first_name}
                </li>
                <li className="welcome__list-element">
                  My NHS Number : {patientDetails.nhs_number}
                </li>
                <li className="welcome__list-element">
                  My date of birth : {patientDetails.dob}
                </li>
              </ol>
            </Card.Body>
          </Card>
        </div>
        <div className="welcome__patient-photo">
          <img className="welcome__baby-photo" src={babyImg} alt="baby's pic" />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
