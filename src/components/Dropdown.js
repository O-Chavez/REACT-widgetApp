import React, { useState, useEffect, useRef } from 'react';
import ColorDisplay from './ColorDisplay'

const Dropdown = ({ options, selected, onSelectedChange, dropDownLabel, results  }) => {


  const [open, setOpen] = useState(false);
  const ref = useRef();


  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };


    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    }
  }, []);

  const renderdOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    };

    return (
      <div 
      key={option.value} 
      className="item"
      onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{dropDownLabel}</label>
        <div 
        onClick={() => setOpen(!open)} 
        className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>{renderdOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;