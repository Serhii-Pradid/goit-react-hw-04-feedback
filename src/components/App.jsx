import React, {Component} from "react";

import {Section} from "./Section/Section";
import {FeedbackOptions} from "./FeedbackOptions/feedbackOptions";
import {Statistics} from "./Statistics/Statistics";
import {Notification} from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    }

    handleLeaveFeedback = event => {
      this.setState(prevState => ({ [event]: prevState[event] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value);
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback())*100).toFixed()
  };
    
  

render() {
  const { good, neutral, bad } = this.state;
  const totalCount = this.countTotalFeedback();
  const positiveCount = this.countPositiveFeedbackPercentage();

  return (

    <div>
<Section title="Please leave feedback">
      <FeedbackOptions 
      options={['good', 'neutral', 'bad']}   //options={Object.keys(this.state)} // 
      onLeaveFeedback={this.handleLeaveFeedback} />
</Section>

<Section title="Statistics">

{totalCount !== 0 ? (

  <Statistics
  good={good}
  neutral={neutral}
  bad={bad}
  total={totalCount}
  positivePercentage={positiveCount} />
  ) : (
<Notification message="There is no feedback" />
  )};

</Section>

    </div>
  );
}
};



