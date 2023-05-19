import { useState } from "react";
import {Section} from "./Section/Section";
import {FeedbackOptions} from "./FeedbackOptions/feedbackOptions";
import {Statistics} from "./Statistics/Statistics";
import {Notification} from "./Notification/Notification";


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = event => {
     console.log(event.target.name);
    const { name } = event.target;

    switch (name) {

      case 'good':
        setGood(good + 1)
        break;

    case 'neutral':
      setNeutral(neutral + 1)
      break;

      case 'bad':
        setBad(bad + 1)
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

  return (

    <div>
<Section title="Please leave feedback">
      <FeedbackOptions 
      options= {['good', 'neutral', 'bad']}   //options={Object.keys(this.state)} // 
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
  )};

</Section>

    </div>
  );
}




