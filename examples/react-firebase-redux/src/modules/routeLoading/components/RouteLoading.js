import React from 'react'
import PropTypes from 'prop-types'
import { size } from 'lodash'
import { connect } from 'react-redux'
import { pure, compose, renderNothing, branch } from 'recompose'
import Snackbar from 'material-ui/Snackbar'
import IconButton from 'material-ui/IconButton'
import Fade from 'material-ui/transitions/Fade'
import CloseIcon from 'material-ui-icons/Close'
import * as actions from '../actions'
const closeIconStyle = { paddingTop: '5px', height: '30px' }

export const RouteLoading = () => <LoadingSpinner />

RouteLoading.propTypes = {
  allIds: PropTypes.array.isRequired,
  byId: PropTypes.object.isRequired,
  dismissNotification: PropTypes.func.isRequired
}

export default compose(
  pure,
  connect(({ notifications: { allIds, byId } }) => ({ allIds, byId }), actions),
  branch(props => !size(props.allIds), renderNothing) // only render if notifications exist
)(RouteLoading)
