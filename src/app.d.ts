/// <reference types="@sveltejs/kit" />

import temperature from './temperature.svelte'
const app = new temperature({
  target: document.body,
  props: {},
})

export default app
