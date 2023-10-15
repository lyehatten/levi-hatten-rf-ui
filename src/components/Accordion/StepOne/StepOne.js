import './StepOne.scss';

const StepOne = () => {
  return(
    <div class="step-one">
      <p><span>Step 1:</span> Base settings.</p>
      <div class='items'>
        <div class='item'>
          <p class='item-title'>General</p>
          <p>Define Attendee types & attributes</p>
        </div>
        <div class='item'>
          <p class='item-title'>Title</p>
          <p>Description that explains the value goes here. Description that explains the value goes here. </p>
        </div>
        <div class='item'>
          <p class='item-title'>Title</p>
          <p>Description that explains the value goes here. Description that explains the value goes here. </p>
        </div>
        <div class='item empty-item'>

        </div>

      </div>
    </div>
  );
}

export default StepOne;