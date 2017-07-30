import React from 'react'
import {Alert, } from 'react-bootstrap'
import PropTypes from 'prop-types'

import styles from './message.cssmodule.less'


export function InfoBanner(props) {
  if (!props.info) {
    return null
  }

  return (
    <div className={styles.message}>
      <Alert bsStyle="success">
        <button type="button" className="close" data-dismiss="alert" onClick={props.closeAction}>&times;</button>
        {props.info}
      </Alert>
    </div>
  )
}

export function ErrorBanner(props) {
  if (!props.error) {
    return null
  }

  return (
    <div className={styles.message}>
      <Alert bsStyle="danger">
        <button type="button" className="close" data-dismiss="alert" onClick={props.closeAction}>&times;</button>
        {props.error}
      </Alert>
    </div>
  )
}

ErrorBanner.propTypes = {
  error: PropTypes.string,
  closeAction: PropTypes.func,
}

InfoBanner.propTypes = {
  info: PropTypes.string,
  closeAction: PropTypes.func,
}
