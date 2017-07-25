import React from "react";
import PropTypes from 'prop-types'

class DepositSettings extends React.Component {
  render() {
    const { handleChange, onChangeInput, sum, refill, payrollProject } = this.props;
    return (
      <div className="row">
        <div className="b-deposits-calculator--content g-grid-20">
          <div className="b-deposits-calculator--field">
            <label className="b-deposits-calculator--label">Сумма к накоплению</label>
            <input type="text" id="Credit" name="sum"
                   className="e-range--field--entity"
                   value={sum} onChange={handleChange}
                   data-range-field="true"/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <label className="b-deposits-calculator--label">Пополнение</label>
            <div className="switch">
              <input id="cmn-toggle-1" className="cmn-toggle cmn-toggle-round" type="checkbox"
                     name="refill" defaultChecked={refill} value={refill} onChange={onChangeInput}/>
              <label htmlFor="cmn-toggle-1"></label>
            </div>
          </div>
          <div className="col-md-6">
            <label className="b-deposits-calculator--label">ЗП</label>
            <div className="switch">
              <input id="cmn-toggle-2" className="cmn-toggle cmn-toggle-round" type="checkbox" name="payrollProject"
                     value={payrollProject}
                     onChange={onChangeInput}/>
              <label htmlFor="cmn-toggle-2"></label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

DepositSettings.displayName = 'DepositSettings';
DepositSettings.defaultProps = {};
DepositSettings.propTypes = {
  handleChange: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  sum: PropTypes.number.isRequired,
  refill: PropTypes.string.isRequired,
  payrollProject: PropTypes.bool.isRequired

};

export default DepositSettings;
