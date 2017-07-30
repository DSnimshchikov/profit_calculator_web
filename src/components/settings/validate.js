export const required = value => (value ? undefined : 'Обязательно')
export const number = value =>
  (value && isNaN(Number(value)) ? 'Должно быть числом' : undefined)


const minValue = min => value =>
  (value && value < min ? `Должно больше ${min - 1}` : undefined)

const maxValue = max => value =>
  (value && value > max ? `Должно меньше ${max}` : undefined)

export const minValue1 = minValue(1)
export const minValue91 = minValue(91)
export const maxValue1831 = maxValue(1831)

export const validateDeposits = (values) => {
  const errors = {}
  const depositsArrayErrors = []
  values.deposits.forEach((deposit, depositIndex) => {
    const depositErrors = {}

    if (deposit && deposit.rates) {
      const rateArrayErrors = []
      deposit.rates.forEach((rate, rateIndex) => {
        const previousRate = deposit.rates[rateIndex - 1]
        const nextRate = deposit.rates[rateIndex + 1]
        if ((previousRate !== undefined && Number(previousRate.fromPeriod) >= Number(rate.fromPeriod)) ||
              (nextRate !== undefined && Number(nextRate.fromPeriod) <= Number(rate.fromPeriod))) {
          rateArrayErrors[rateIndex] = {fromPeriod: 'Значение должно быть больше предыдущего периода и меньше следующего'}
        }
      }
        )
      if (rateArrayErrors.length) {
        depositErrors.rates = rateArrayErrors
        depositsArrayErrors[depositIndex] = depositErrors
      }
    }
  }
  )
  if (depositsArrayErrors.length) {
    errors.deposits = depositsArrayErrors
  }

  return errors
}

export const validateSavingAccounts = (values) => {
  const errors = {}
  const savingAccountsArrayErrors = []
  values.savingAccounts.forEach((savingAccount, savingAccountIndex) => {
    const savingAccountErrors = {}

    if (savingAccount && savingAccount.rates) {
      const rateArrayErrors = []
      savingAccount.rates.forEach((rate, rateIndex) => {
        const previousRate = savingAccount.rates[rateIndex - 1]
        const nextRate = savingAccount.rates[rateIndex + 1]
        if ((previousRate !== undefined && Number(previousRate.fromPeriod) >= Number(rate.fromPeriod)) ||
              (nextRate !== undefined && Number(nextRate.fromPeriod) <= Number(rate.fromPeriod))
            ) {
          rateArrayErrors[rateIndex] = {fromPeriod: 'Значение должно быть больше предыдущего периода и меньше следующего'}
        }
      }
        )
      if (rateArrayErrors.length) {
        savingAccountErrors.rates = rateArrayErrors
        savingAccountsArrayErrors[savingAccountIndex] = savingAccountErrors
      }
    }
  }
  )
  if (savingAccountsArrayErrors.length) {
    errors.savingAccounts = savingAccountsArrayErrors
  }

  return errors
}
