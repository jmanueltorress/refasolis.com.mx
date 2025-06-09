const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Refaccionaria Solís'
    }
  },
  chainWebpack: config => {
    // Si ya existe el plugin DefinePlugin, agregamos la variable sin borrar las otras definidas
    config.plugin('define').tap(args => {
      args[0]['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = JSON.stringify(false)
      return args
    })
  }
})
