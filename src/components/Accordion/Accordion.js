import './Accordion.scss'
import PersonPortal from '../../assets/person_portal.png'
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import StepThree from './StepThree/StepThree';

const Accordion = () => {
  return(
    <div class='accordion-wrapper'>
      <hr/>
      <div class='header'>
        <img src={PersonPortal} alt='Portal Icon'></img>
        <h3>Org Settings</h3>
      </div>
      <StepOne></StepOne>
      <StepTwo></StepTwo>
      <StepThree></StepThree>
    </div>
  );
}

export default Accordion;