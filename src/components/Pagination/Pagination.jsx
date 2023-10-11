import { useState } from 'react';
import _ from 'lodash';
import cn from 'classnames';
import './Pagination.css';

export default function Pagination({ pageCount, activePage, setActive }) {
  const count = _.range(1, pageCount);

  const isActive = (id) => id === activePage;
  const navItemStyle = (id) => cn('nav-panel-item', { active: isActive(id) });

  const handlePrev = () => {
    if (activePage > 1) {
      setActive(activePage - 1);
    }
  };

  const handleNext = () => {
    if (activePage < pageCount) {
      setActive(activePage + 1);
    }
  };

  return (
    <div className="nav-panel">
      <button type="button" className="nav-panel-item" onClick={handlePrev}>
        Previous
      </button>
      {count.map((item) => (
        <button type="button" key={item} className={navItemStyle(item)}>
          {item}
        </button>
      ))}
      <button type="button" className="nav-panel-item" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
