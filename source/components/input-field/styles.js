import merge from 'lodash/merge'

export default (props, traits) => {
  const {
    colors,
    radiuses,
    rhythm
  } = traits

  const baseStyles = {
    root: {
      marginBottom: rhythm(1)
    },

    label: {
      display: 'block',
      fontWeight: 700,
      marginBottom: rhythm(0.25)
    },

    required: {
      color: colors.danger
    },

    field: {
      display: 'block',
      width: '100%',
      padding: rhythm(0.33, 'em'),
      backgroundColor: colors.light,
      color: colors.dark,
      border: `1px solid ${colors.shade}`,
      borderRadius: rhythm(radiuses.small),
      borderColor: props.invalid && colors.danger,
      ':focus': {
        borderColor: props.invalid ? colors.danger : colors.primary
      }
    }
  }

  return merge(baseStyles, props.styles)
}