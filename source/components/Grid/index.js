import React, { PropTypes } from 'react'
import { withStyles } from '../../lib/css'
import styles from './styles'

const Grid = ({
  children,
  classNames
}) => (
  <div className={classNames.root}>
    {children}
  </div>
)

Grid.propTypes = {
  /**
  * Flexbox align option
  */
  align: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'stretch'
  ]),

  /**
  * Flexbox justify content options
  */
  justify: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'space-between',
    'space-around'
  ]),

  /**
  * Direction of the columns
  */
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse'
  ]),

  /**
  * The padding to be applied between columns
  */
  padding: PropTypes.object,

  /**
  * Custom styles to apply
  */
  styles: PropTypes.object
}

Grid.defaultProps = {
  align: 'flex-start',
  justify: 'space-between',
  direction: 'row',
  padding: {x: 1, y: 1},
  styles: {}
}

export default withStyles(styles)(Grid)
