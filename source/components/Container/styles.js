export default (props, traits) => {
  const {
    colors,
    rhythm,
    shadows,
    treatments
  } = traits

  const {
    shadow,
    outerColor,
    styles,
    width
  } = props

  return {
    root: {
      maxWidth: rhythm(width, 'em'),
      minHeight: '100vh',
      margin: '0 auto',
      backgroundColor: colors.light,
      color: colors.dark,
      ...treatments.body,
      boxShadow: shadow && shadows[shadow],
      ...styles
    },

    outer: {
      backgroundColor: colors[outerColor]
    }
  }
}
