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
          label="Address"
          id="address"
          type="text"
          onChange={onChangeStreet}
          value={street}
          required
        />
        <Field label="Name" id="name" type="text" value={name} onChange={onChangeName} />
        <Field
          label="Phone"
          id="phone"
          type="tel"
          value={phone}
          onChange={onChangePhone}
          required
        />
        <Field
          label="Email"
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
