import "./WelcomePage.scss";
const WelcomePage = ({ patientDetails }) => {
  return (
    <div>
      <ol>
        <li>Name : {patientDetails.name}</li>
        <li>NHS Number : {patientDetails.nhs}</li>
      </ol>
    </div>
  );
};

export default WelcomePage;
