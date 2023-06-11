const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1> {props.course} </h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {" "}
        {props.pt} {props.exercise}{" "}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part pt={props.part1} exercise={props.exercises1} />
      <Part pt={props.part2} exercise={props.exercises2} />
      <Part pt={props.part3} exercise={props.exercises3} />
    </div>
  );
};

const Tool = (props) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";

  const part1 = "Fundamentals of React";

  const exercises1 = 10;

  const part2 = "Using props to pass data";

  const exercises2 = 7;

  const part3 = "State of a component";

  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Tool
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;
