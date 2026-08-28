import { useState } from 'react';
import data from './data';
import './style.css';

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);


  const handleSingleSelection = (id) => {
    setSelected((prevSelected) => (prevSelected === id ? null : id));
  };
  function handleMultipleSelection(id) {
   let cpyMultiple = [...multiple];
   const findIndex = cpyMultiple.indexOf(id);
   console.log(findIndex);
   if(findIndex === -1){
    cpyMultiple.push(id);
   }
   else{
    cpyMultiple.splice(findIndex, 1);
   }
   setMultiple(cpyMultiple);
  }
  console.log(selected, multiple);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}>
        Multiple Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            const isOpen = selected === dataItem.id;

            return (
              <div key={dataItem.id} className="item">
                <div className="title" onClick={enableMultipleSelection ? 
                  () => handleMultipleSelection(dataItem.id) :
                   () => handleSingleSelection(dataItem.id)}>
                  <h3>{dataItem.question}</h3>
                  <span>{isOpen ? '-' : '+'}</span>
                </div>
                {
                  enableMultipleSelection ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  ) : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  ) 
                }
                  {/* {
                    selected === dataItem.id || multiple.includes(dataItem.id) !==  -1 ? (
                      <div className="content">{dataItem.answer}</div>
                    ) : null
                  } */}
                {/* {isOpen && <div className="content">{dataItem.answer}</div>} */}
              </div>
            );
          })
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}
