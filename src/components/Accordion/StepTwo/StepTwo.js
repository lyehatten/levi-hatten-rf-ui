import './StepTwo.scss'
import LogicArrow from '../../../assets/logic-arrow.png'
import CirclePlus from '../../../assets/circle-plus.png'

const StepTwo = () => {
  return( 
    <div class="step-two">
      <p><span>Step 2:</span> Build registration workflows.</p>
      <div class='rows'>
        <div class='row'>
          <div class='item'>
            <div class='item-header'>
              <img class='icon' src={LogicArrow} alt='logic arrow'></img>
              <p>Attendee Registration</p>
            </div>
            <p class='item-content'>Start by creating a general registration workflow</p>
          </div>
          <div class='item'>
            <div class='item-header'>
              <img class='icon' src={LogicArrow} alt='logic arrow'></img>
              <p>Attendee Registration</p>
            </div>
            <p class='item-content'>Start by creating a general registration workflow</p>
          </div>
          <div class='item'>
            <div class='item-header'>
              <img class='icon' src={LogicArrow} alt='logic arrow'></img>
              <p>Attendee Registration</p>
            </div>
            <p class='item-content'>Start by creating a general registration workflow</p>
          </div>
        </div>
        <div class='row'>
          <div class='item solo-item'>
          <div class='item-header item-header-solo'>
              <img class='icon' src={CirclePlus} alt='add icon'></img>
            </div>
            <p class='item-content item-content-solo'>Add Registration Workflow</p>
          </div>
          <div class='empty-item'>
            <div class='item-header'>
              <img class='icon' src={LogicArrow} alt='logic arrow'></img>
              <p>Attendee Registration</p>
            </div>
              <p class='item-content'>Start by creating a general registration workflow</p>
          </div>
          <div class='empty-item'>
            <div class='item-header-solo'>
              <img class='icon' src={CirclePlus} alt='add icon'></img>
            </div>
            <p class='item-content'>Start by creating a general registration workflow</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepTwo;