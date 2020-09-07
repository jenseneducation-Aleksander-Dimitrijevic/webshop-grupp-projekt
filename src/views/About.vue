<template>
  <div>
    <header class="about-text">
      <h1>MEET OUR TEAM</h1>
      <p>
        We are all very different. We were born in different cities, at different times, we love different music, food, movies. But we have something that unites us all. It is our company. We are its heart. We are not just a team, we are a family.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic repellendus corrupti nobis laudantium possimus, sapiente assumenda quisquam sit, itaque facere delectus doloribus quo, expedita optio doloremque nesciunt. Aperiam ipsa fuga facere aut nulla. Similique accusamus laborum ad vel praesentium impedit neque quo. Et adipisci delectus assumenda, tempora repudiandae ea eum voluptas consequuntur modi incidunt in nisi explicabo omnis quos laborum!
      </p>
      <router-link to="/contact" class="contact-btn">CONTACT US</router-link>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about-text {
  display: grid;
  padding: 0 1rem;
  margin: 60px 0;
  text-align: center;

  .contact-btn {
    width: 200px;
    display: block;
    color: black;
    cursor: pointer;
    padding: 1rem 0;
    font-size: 1rem;
    margin: 2rem auto;
    border-radius: 3px;
    letter-spacing: 2px;
    font-weight: bolder;
    text-decoration: none;
    border: 1px solid #000;
    text-transform: uppercase;
    &:hover {
      opacity: 0.3;
      transition: 0.5s;
    }
  }

  h1 {
    padding: 1.5rem;
  }
  p {
    margin: auto;
    max-width: 560px;
    line-height: 1.5;
    letter-spacing: 2px;
  }
}
</style>