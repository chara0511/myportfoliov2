const isSSR = typeof window !== 'undefined'
// eslint-disable-next-line no-undef
const sr: scrollReveal.ScrollRevealObject = isSSR ? require('scrollreveal').default : null

export default sr
