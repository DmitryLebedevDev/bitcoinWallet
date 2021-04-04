import { StyleRules } from '@material-ui/core'
import { Styles } from '@material-ui/styles/withStyles'

export const commonStylesObj: StyleRules<"status"> = {
  status: {
    display: 'inline-block',
    fontWeight: 900,
    padding: '4px',
    border: '2px solid transparent',
    borderRadius: '2px',
  }
} as const