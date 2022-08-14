import Card from "react-bootstrap/Card";
import babyImg from "../../assets/images/baby.jpg";
import {
  convertTimestampToTime,
  convertTimestampToDate,
} from "../../utils/utils";
import "./WelcomePage.scss";
const WelcomePage = ({ patientDetails }) => {
  // console.log("patientDetails from WelcomePage : ", patientDetails);
  const dateOfbirth = convertTimestampToDate(patientDetails.dob);
  const timeOfBirth = convertTimestampToTime(patientDetails.dob);

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
                  My First name : {patientDetails.first_name}
                </li>
                <li className="welcome__list-element">
                  My Last name : {patientDetails.last_name}
                </li>
                <li className="welcome__list-element">
                  My NHS Number : {patientDetails.nhs_number}
                </li>
                <li className="welcome__list-element">
                  My date of birth :{` ${dateOfbirth} @ ${timeOfBirth}`}
                </li>
                <li className="welcome__list-element">
                  Child's gender : {patientDetails.gender}
                </li>
                <li className="welcome__list-element">
                  Blood group : {patientDetails.blood_group}
                </li>
                <li className="welcome__list-element">
                  Birth weight: {`${patientDetails.birth_weight}kg`}
                </li>
                <li className="welcome__list-element">
                  Birth length: {`${patientDetails.birth_height}cm`}
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
