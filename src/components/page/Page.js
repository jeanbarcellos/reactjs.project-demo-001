import clsx from 'clsx'
import * as PropTypes from 'prop-types'
import React from 'react'
// import { makeStyles } from 'tss-react/mui'

// const useStyles = makeStyles()(theme => ({
//   root: {},
//   header: {},
//   content: {}
// }))

const Page = props => {
  // const classes = useStyles()
  const { classes } = props

  return (
    <div id='page-root' className={clsx(classes.root, props.className)}>
      {props.header && (
        <div id='page-header' className={classes.header}>
          {props.header}
        </div>
      )}
      {props.content && (
        <div id='page-content' className={classes.content}>
          {props.content}
        </div>
      )}
    </div>
  )
}

Page.propTypes = {
  header: PropTypes.node,
  content: PropTypes.node
}

Page.defaultProps = {}

export default Page
