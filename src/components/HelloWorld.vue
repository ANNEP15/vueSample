<template>
  <div class="navbar-brand">{{ msg }}</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
}
</script>
