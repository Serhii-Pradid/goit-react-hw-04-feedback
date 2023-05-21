import { useState } from "react";
import {Section} from "./Section/Section";
import {FeedbackOptions} from "./FeedbackOptions/feedbackOptions";
import {Statistics} from "./Statistics/Statistics";
import {Notification} from "./Notification/Notification";


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = (name) => {    // event
      //console.log(event.currentTarget.name);
      //const { name } = event.currentTarget;

    switch (name) {

      case 'good':
        setGood(prevState => prevState + 1)  // або (good + 1)
        break;

    case 'neutral':
      setNeutral(prevState => prevState + 1)  // або (neutral + 1)
      break;

      case 'bad':
        setBad(prevState => prevState + 1)    // або (bad + 1)
        break;

      default:
        break;
    }
};

const countTotalFeedback = () => {
  return good + neutral + bad;
};

const countPositiveFeedbackPercentage = () => {
  return ((good / countTotalFeedback())*100).toFixed()
};

const options = ['good', 'neutral', 'bad']

  return (

    <div>
<Section title="Please leave feedback">
      <FeedbackOptions 
      options= {options}                           // options= {['good', 'neutral', 'bad']}  
      onLeaveFeedback={handleLeaveFeedback} />
</Section>

<Section title="Statistics">

{countTotalFeedback() !== 0 ? (

  <Statistics
  good={good}
  neutral={neutral}
  bad={bad}
  total={countTotalFeedback()}
  positivePercentage={countPositiveFeedbackPercentage()} />
  ) : (
<Notification message="There is no feedback" />
  )}

</Section>

    </div>
  );
}



