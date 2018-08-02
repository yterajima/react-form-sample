import React from 'react';

import { Text } from './Text';
import { Submit } from './Submit';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      nameValue: '',
      nameError: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const value = event.target.value.trim();
    if (value.length > 0) {
      this.setState({ nameValue: value, disabled: false });
    } else {
      this.setState({ nameValue: value, disabled: true });
    }
  }

  onSubmit(event) {
    const { nameValue } = this.state;
    if (nameValue === '') {
      this.setState({ nameError: 'name is empty', disabled: true });
      event.preventDefault();
    }
  }

  render() {
    const { disabled, nameValue, nameError } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <Text
            name="name"
            label="氏名"
            placeholder="氏名を入力してください。"
            value={nameValue}
            error={nameError}
            onChange={this.onChange}
          />
          <Submit
            name="Push"
            disabled={disabled}
          />
        </form>
      </div>
    );
  }
}
