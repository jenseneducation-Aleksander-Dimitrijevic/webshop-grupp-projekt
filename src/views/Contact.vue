<template>
  <div class="wrapper">
    <h1>Contact</h1>
    <div class="content">
      <div class="info">
        <h3>Get in Touch!</h3>
        <a href="mailto: abc@example.com">Info@wholesaleshoes.com</a>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16246.511954746045!2d17.925393505274496!3d59.40281572780534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9e8955005cc9%3A0xffbb795f2bd6d2cf!2sKista%2C%20Stockholm!5e0!3m2!1sen!2sse!4v1599552318464!5m2!1sen!2sse"
          id="maps"
          frameborder="0"
          style="border:0;"
          allowfullscreen
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 1rem;
  max-width: 375;
  margin: auto;
  text-align: center;
}
.content {
  padding: 4rem 0;
}
h1 {
  padding: 1rem 0;
}
a {
  padding: 1rem 0;
  text-decoration: none;
  color: #000;
  font-weight: bold;
  &:hover {
    color: grey;
  }
}
#maps {
  width: 100%;
  margin: 2rem auto;
  height: 400px;
  display: block;
}
@media screen and (min-width: 768px) {
  .wrapper {
    .content {
      padding: 1rem 0;
    }
    padding: 3rem;
    img {
      width: 1024px;
      height: 400px;
    }
  }
}
</style>