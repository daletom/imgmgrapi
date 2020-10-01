import Vue from 'vue'
import imgixAPI from 'imgix-management-js'

const ImgixAPI = require('imgix-management-js')

const imgix = new ImgixAPI({
  apiKey: '29250f0436aaedc6e03a725b5b39a45b4d248a684a7003a47e301903c1298002'
})

Vue.use(imgix, imgixAPI)