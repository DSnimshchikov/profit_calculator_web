import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {loadSettings} from '../../actions/settings-action';


class SettingsContainer extends React.Component {

  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    // this.onChangeInput = this.onChangeInput.bind(this);
  }

  componentWillMount() {
    this.props.requestSetting();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>Настройки вкладов</h2>
          { this.props.deposits && this.props.deposits.length && this.props.deposits.map((deposit, index) => (<div key={`${index}_deposit`}>
            {deposit.name}
          </div>)
          )}
        </div>
        <div className="row">
          <h2>Настройки карт</h2>
          {this.props.cards && this.props.cards.length && this.props.cards.map((card, index) => (<div key={`${index}_card`}>
            {card.name}
          </div>)
          )}
        </div>

        <div className="row">
          <h2>Настройки накопительных счетов</h2>
          {this.props.savingAccounts && this.props.savingAccounts.length && this.props.savingAccounts.map((savingAccount, index) => (<div key={`${index}_savingAccount`}>
            {savingAccount.name}
          </div>)
          )}
        </div>

      </div>
    );
  }

}

SettingsContainer
  .propTypes = {
    savingAccounts: PropTypes.array,// eslint-disable-line react/forbid-prop-types
    cards: PropTypes.array,// eslint-disable-line react/forbid-prop-types
    deposits: PropTypes.array// eslint-disable-line react/forbid-prop-types
  };

function mapDispatchToProps(dispatch) {
  const actionMap = {requestSetting: bindActionCreators(loadSettings, dispatch)};
  return actionMap;
}

function mapStateToProps(state) {
  return {
    deposits: state.settingReducer.settings.deposits.deposits,
    cards: state.settingReducer.settings.cards.cards,
    savingAccounts: state.settingReducer.settings.savingAccounts.savingAccounts
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);

