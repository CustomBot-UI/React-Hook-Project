import { useState } from 'react';
import data from './data';
import './style.css';

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (id) => {
    setSelected((prevSelected) => (prevSelected === id ? null : id));
  };

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            const isOpen = selected === dataItem.id;

            return (
              <div key={dataItem.id} className="item">
                <div className="title" onClick={() => handleSingleSelection(dataItem.id)}>
                  <h3>{dataItem.question}</h3>
                  <span>{isOpen ? '-' : '+'}</span>
                </div>

                {isOpen && <div className="content">{dataItem.answer}</div>}
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
