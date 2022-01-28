export const createLayoutScheme = (toolbarDisplay = true, navbarDisplay = true, footerDisplay = true) => {
  return {
    toolbar: {
      display: toolbarDisplay
    },

    navbar: {
      display: navbarDisplay
    },

    footer: {
      display: footerDisplay
    }
  }
}
export const layoutPrivate = () => createLayoutScheme()

export const layoutPublic = () => createLayoutScheme(false, false, false)
