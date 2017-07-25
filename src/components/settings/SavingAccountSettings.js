import React from "react";
import PropTypes from 'prop-types'


class SavingAccountSettings extends React.Component {
  render() {
    const {handleChange, sum} = this.props;
    return (
      <div className="row">
        <div className="b-deposits-calculator--content g-grid-20">
          <div className="b-deposits-calculator--field">
            <input type="text" id="Credit" name="sum"
                   className="e-range--field--entity"
                   value={sum} onChange={handleChange}
                   data-range-field="true"/>
          </div>
        </div>
      </div>
    )
  }
}

SavingAccountSettings.displayName = 'DepositSettings';
SavingAccountSettings.defaultProps = {};
SavingAccountSettings.propTypes = {
  handleChange: PropTypes.func.isRequired,
  sum: PropTypes.number.isRequired,
};

export default SavingAccountSettings;
