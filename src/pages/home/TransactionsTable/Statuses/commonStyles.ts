import { StyleRules } from '@material-ui/core'

export const commonStylesObj: StyleRules<"status"> = {
  status: {
    display: 'inline-block',
    fontWeight: 500,
    padding: '2px 6px',
    border: '2px solid transparent',
    borderRadius: '2px',
  }
} as const