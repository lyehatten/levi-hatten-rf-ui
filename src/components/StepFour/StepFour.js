import './StepFour.scss'
import ComputerWhite from '../../assets/computer-white.png'

const StepFour = () => {
  return(
    <div class='step-four'>
      <p class='step-four-header'><span>Step 4:</span> Build your exhibitor platform.</p>
      <div id='container'>
        <div class='row'>
          <div class='item'>
            <div class='item-header-four'>
              <img class='computer-icon' src={ComputerWhite} alt='computer icon'></img>
              <p>Exhibitor Portal</p>
            </div>
            <p class='item-content-four'>Manage the portal that attendees will see after they’ve register for your event.</p>
          </div>
          <div class='item'>
            <div class='item-header-four'>
              <img class='computer-icon' src={ComputerWhite} alt='computer icon'></img>
              <p>Exhibitor List</p>
            </div>
            <p class='item-content-four'>Manage the portal that attendees will see after they’ve register for your event.</p>
          </div>
        </div>
        <div class='row'>
          <div class='item'>
            <div class='item-header-four'>
              <img class='computer-icon' src={ComputerWhite} alt='computer icon'></img>
              <p>Exhibitor Logos</p>
            </div>
            <p class='item-content-four'>Manage the portal that attendees will see after they’ve register for your event.</p>
          </div>
          <div class='item'>
            <div class='item-header-four'>
              <img class='computer-icon' src={ComputerWhite} alt='computer icon'></img>
              <p>Exhibitor Tasks</p>
            </div>
            <p class='item-content-four'>Manage the portal that attendees will see after they’ve register for your event.</p>
          </div>
          <div class='item'>
            <div class='item-header-four'>
              <img class='computer-icon' src={ComputerWhite} alt='computer icon'></img>
              <p>Exhibitor Forms</p>
            </div>
            <p class='item-content-four'>Manage the portal that attendees will see after they’ve register for your event.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepFour;