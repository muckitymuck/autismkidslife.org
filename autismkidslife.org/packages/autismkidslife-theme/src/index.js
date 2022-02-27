import Root from "./components"

const autismKidsLifeTheme = {
  name: "autismkidslife-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isUrlVisible: false,
    },
  },
  actions: {
    theme: {
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible
      }
    },
  },
}

export default autismKidsLifeTheme