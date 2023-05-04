export default {
  install(app) {
    const files = require.context('@/components/ui', false, /\.vue$/)

    for (const path of files.keys()) {
      const component = files(path).default || files(path)
      app.component(component.name, component)
    }
  }
}
