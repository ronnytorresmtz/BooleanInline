Nova.booting((Vue, router, store) => {
  Vue.component('index-boolean-inline', require('./components/IndexField'))
  Vue.component('detail-boolean-inline', require('./components/DetailField'))
  Vue.component('form-boolean-inline', require('./components/FormField'))
})
