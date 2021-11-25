const Box = (props) => {
  const { boxText, className } = props;
  return (
    <div className={`box ${className}`}>
      <p className="box-size-element">{boxText}</p>
    </div>
  );
};

const element = (
  <div className="boxes-app-container">
    <h1 className="box-heading">Boxes</h1>
    <div className="boxes-container">
      <Box boxText="Small" className="small-container" />
      <Box boxText="medium" className="medium-container" />
      <Box boxText="large" className="large-container" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
