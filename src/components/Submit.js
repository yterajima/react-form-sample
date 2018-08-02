import React from 'react';

export const Submit = ({ name, disabled }) => {
  return (
    <div className="control">
      <button
        className="button is-primary"
        disabled={disabled}
      >{name}</button>
    </div>
  );
};
