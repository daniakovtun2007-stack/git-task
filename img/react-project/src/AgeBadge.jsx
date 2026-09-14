import React from 'react';

export function AgeBadge(props) {
  return (
    <div className="age-badge">
      <span className="age-badge-accent"></span>
      <span className="age-badge-text">{props.age}</span>
    </div>
  );
}