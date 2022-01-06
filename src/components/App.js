import { Question } from "./Question";
import data from "../data/data";
import "./App.scss";

function App() {
  return (
    <section className="question-section">
      <h1 className="main-title">Our Accordion</h1>
      <section className="container">
        <div className="question-content">
          <h2 className="question-alt-title">
            This is title of questions
          </h2>
          {data.map((question) => {
            return (
              <Question
                key={question.id}
                {...question}
              />
            )
          })}
        </div>
      </section>
    </section>
  );
}

export default App;
