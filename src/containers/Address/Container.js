import React from 'react';
import Field from 'components/Field';

export default class Address extends React.PureComponent {
  render() {
    const {
      street,
      name,
      email,
      phone,
      onChangeStreet,
      onChangeName,
      onChangePhone,
      onChangeEmail
    } = this.props;

    return (
      <div>
        <Field
          labelToken="address"
          id="address"
          type="text"
          onChange={onChangeStreet}
          value={street}
          required
        />
        <Field labelToken="name" id="name" type="text" value={name} onChange={onChangeName} />
        <Field
          labelToken="phone"
          id="phone"
          type="tel"
          value={phone}
          onChange={onChangePhone}
          required
        />
        <Field
          labelToken="email"
          id="email"
          type="email"
          value={email}
          onChange={onChangeEmail}
          required
        />
      </div>
    );
  }
}
