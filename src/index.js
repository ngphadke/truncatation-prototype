import React from "react";
import ReactDOM from "react-dom";
import MiddleTruncate from "react-middle-truncate";
import Truncate from "react-truncate";
import "./styles.css";

const names = [
  {
    seriesId: "1",
    name: "Approx 60 Char Const - Define Your Right Mix of Product Line"
  },
  {
    seriesId: "2",
    name: "~ 30 Char Const - Leading Tomorrow"
  },
  {
    seriesId: "3",
    name: "~ 24 Char - Product ABC"
  },
  {
    seriesId: "4",
    name: "~12 Char - See?"
  },
  { seriesId: "5", name: "<10 Char" }
];

function EndSeriesList(props) {
  const lines = props.lines;
  const items = props.names;
  const fontSize = props.fontSize;
  const listItems = items.map(name => (
    <li key={name.seriesId}>
      <Truncate style={{ fontSize }} lines={lines}>
        {name.name}
      </Truncate>
    </li>
  ));
  return <ul className="list">{listItems}</ul>;
}

function MiddleSeriesList(props) {
  const items = props.names;
  const fontSize = props.fontSize;
  const listItems = items.map(name => (
    <li key={name.seriesId}>
      <MiddleTruncate
        style={{ fontSize }}
        text={name.name}
        start={10}
        end={10}
      />
    </li>
  ));
  return <ul className="list">{listItems}</ul>;
}

function Lists(props) {
  return (
    <div className="container">
      <div>
        <h4>Middle Truncate - 12 px</h4>
        <MiddleSeriesList names={names} fontSize={12} />
      </div>
      <div>
        <h4>Middle Truncate - 14 px</h4>
        <MiddleSeriesList names={names} fontSize={14} />
      </div>
      <div>
        <h4>End Truncate - 12 px</h4>
        <EndSeriesList names={names} lines={2} fontSize={12} />
      </div>
      <div>
        <h4>End Truncate - 14 px</h4>
        <EndSeriesList names={names} lines={2} fontSize={14} />
      </div>
      <div>
        <h4>End Truncate - 12 px</h4>
        <EndSeriesList names={names} lines={1} fontSize={12} />
      </div>
      <div>
        <h4>End Truncate - 14 px</h4>
        <EndSeriesList names={names} lines={1} fontSize={14} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Lists />, rootElement);
