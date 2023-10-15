import './StepThree.scss'
import Computer from '../../../assets/computer.png'

const StepThree = () => {
  return(
    <div class='step-three'>
      <p><span>Step 3:</span> Design attendee experiences.</p>
      <div class='row'>
        <div class='item'>
          <div class='item-header'>
            <img class='computer-icon' src={Computer} alt='computer icon'></img>
            <p>Attendee Portal</p>
          </div>
          <p class='item-content'>Manage the portal that attendees will see after they’ve register for your event.</p>
        </div>
        <div class='empty-item'>
          <div class='item-header'>
            <img class='icon' src={Computer} alt='logic arrow'></img>
            <p>Attendee Registration</p>
          </div>
          <p class='item-content'>Start by creating a general registration workflow</p>
        </div>
        <div class='empty-item'>
          <div class='item-header-solo'>
            <img class='icon' src={Computer} alt='add icon'></img>
          </div>
          <p class='item-content'>Start by creating a general registration workflow</p>
          </div>
      </div>
    </div>
  )
}

export default StepThree;