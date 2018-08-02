import React from 'react';

export const Text = ({
  name,
  nameValue,
  error,
  label,
  placeholder,
  onChange
}) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input
          name={name}
          className="input"
          type="text"
          value={nameValue}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
      {error !== '' &&
        <p className="help is-danger">{error}</p>
      }
    </div>
  );
};
