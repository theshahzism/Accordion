import { useState } from "react";

const Accordion = ({ accordionData }) => {
  const [seletedID, setSelectedID] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const [written, setWritten] = useState(false);

  const handleSingleSelection = (getCurrentId) => {
    setSelectedID((selectedID) =>
      selectedID === getCurrentId ? null : getCurrentId
    );
  };

  const handleMultiSelection = (getCurrentId) => {
    let cpyMultiple = [...multiple];
    const findIndex = cpyMultiple.indexOf(getCurrentId);
    if (findIndex === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndex, 1);
    setMultiple(cpyMultiple);

    console.log(cpyMultiple);
  };

  return (
    <div className="wrapper">
      <button
        onClick={() => {
          setEnableMultiSelect(!enableMultiSelect);
          setWritten(!written);
        }}
      >
        Enable Mutlti Selection
      </button>
      <h3 className="item">{`Enable mode is ${written}`}</h3>
      <div className="accordion">
        {accordionData && accordionData.length > 0 ? (
          accordionData.map((item) => (
            <div
              key={item.id}
              onClick={
                enableMultiSelect
                  ? () => handleMultiSelection(item.id)
                  : () => handleSingleSelection(item.id)
              }
              className="item"
            >
              <h2 className="title">{item.question}</h2>
              <span>+</span>
              {seletedID == item.id || multiple.indexOf(item.id) !== -1 ? (
                <div className="content">{item.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};
export default Accordion;
