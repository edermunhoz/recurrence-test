<template>
  <div class="jumbotron">
    <h1>Navbar example</h1>
    <p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
    <p>To see the difference between static and fixed top navbars, just scroll.</p>
    <p>
      <a class="btn btn-lg btn-primary" href="../../components/#navbar" role="button">View navbar docs »</a>
    </p>
  </div>

    <button class="btn" @click="onButtonClick">get foo.json</button>
    {{fooMessage}}

</template>
<script>
  export default{
    data () {
      return {
        fooMessage: ''
      }
    },
    methods: {
      onButtonClick () {
        this.$http.get('/foo.json').then(
        (response) => {
          this.fooMessage = JSON.parse(response.data).msg
        },
        (error) => {
          console.error(error.statusText)
        })
      }
    }
  }
</script>