import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types'
import {loadSettings, saveDeposits, saveCards, saveSavingAccounts, saveCardOptions} from '../../actions/settings-action'
import DepositsSettingsForm from './DepositSettings'
import SavingAccountSettingsForm from './SavingAccountSettings'
import CardOptionSettingsForm from './CardOptionSettingsForm'
import CardSettingsForm from './CardSettingsForm'


class SettingsContainer extends React.Component {

  componentWillMount() {
    this.props.requestSetting()
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>Вклады</h2>
          { this.props.deposits && this.props.deposits.length &&
          < DepositsSettingsForm onSubmit={this.props.saveDeposits}/>
          }
        </div>

        <div className="row">
          <h2>Накопительные счета</h2>
          { this.props.savingAccounts && this.props.savingAccounts.length &&
          < SavingAccountSettingsForm onSubmit={this.props.saveSavingAccounts}/>
          }
        </div>

        <div className="row">
          <h2>Карты</h2>
          { this.props.cards && this.props.cards.length &&
          <CardSettingsForm onSubmit={this.props.saveCards}/>
          }
        </div>

        <div className="row">
          <h2>Карточные опции</h2>
          { this.props.cardOptions && this.props.cardOptions.length &&
          <CardOptionSettingsForm onSubmit={this.props.saveCardOptions}/>
          }
        </div>
      </div>
    )
  }

}

SettingsContainer
  .propTypes = {
    saveDeposits: PropTypes.func,
    saveCards: PropTypes.func,
    saveSavingAccounts: PropTypes.func,
    saveCardOptions: PropTypes.func,
    requestSetting: PropTypes.func,
    savingAccounts: PropTypes.array, // eslint-disable-line react/forbid-prop-types
    cards: PropTypes.array, // eslint-disable-line react/forbid-prop-types
    cardOptions: PropTypes.array, // eslint-disable-line react/forbid-prop-types
    deposits: PropTypes.array// eslint-disable-line react/forbid-prop-types
  }

function mapDispatchToProps(dispatch) {
  return {
    requestSetting: bindActionCreators(loadSettings, dispatch),
    saveDeposits: bindActionCreators(saveDeposits, dispatch),
    saveCards: bindActionCreators(saveCards, dispatch),
    saveCardOptions: bindActionCreators(saveCardOptions, dispatch),
    saveSavingAccounts: bindActionCreators(saveSavingAccounts, dispatch),
  }
}

function mapStateToProps(state) {

  return {
    deposits: state.settingReducer.settings.deposits,
    cards: state.settingReducer.settings.cards,
    cardOptions: state.settingReducer.settings.cardOptions,
    savingAccounts: state.settingReducer.settings.savingAccounts
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)

