import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import { Values } from 'redux-form-website-template';
import {loadSettings} from '../../actions/settings-action';
import DepositsSettingsForm from './DepositSettings';
import SavingAccountSettingsForm from './SavingAccountSettings';
import CardSettingsForm from './CardSettingsForm';


class SettingsContainer extends React.Component {

  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    // this.onChangeInput = this.onChangeInput.bind(this);
  }

  componentWillMount() {
    this.props.requestSetting();
  }

  showResults(values) {
    alert(values);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>Настройки вкладов</h2>
          { this.props.deposits && this.props.deposits.length &&
          < DepositsSettingsForm onSubmit={this.showResults} />
          }
        </div>

        <div className="row">
          <h2>Настройки карт</h2>
          { this.props.cards && this.props.cards.length &&
          <CardSettingsForm onSubmit={this.showResults}/>
          }
        </div>

        <div className="row">
          <h2>Настройки накопительных счетов</h2>
          { this.props.savingAccounts && this.props.savingAccounts.length &&
          < SavingAccountSettingsForm onSubmit={this.showResults}/>
          }
        </div>

        <div className="row">
          <Values form="depositsSettingsForm" />
          <Values form="savingAccountsSettingsForm" />
          <Values form="cardsSettingsForm" />
        </div>

      </div>
    );
  }

}

SettingsContainer
  .propTypes = {
    savingAccounts: PropTypes.array, // eslint-disable-line react/forbid-prop-types
    cards: PropTypes.array, // eslint-disable-line react/forbid-prop-types
    deposits: PropTypes.array// eslint-disable-line react/forbid-prop-types
  };

function mapDispatchToProps(dispatch) {
  const actionMap = {requestSetting: bindActionCreators(loadSettings, dispatch)};
  return actionMap;
}

function mapStateToProps(state) {

  return {
    deposits: state.settingReducer.settings.deposits,
    cards: state.settingReducer.settings.cards,
    savingAccounts: state.settingReducer.settings.savingAccounts
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);

