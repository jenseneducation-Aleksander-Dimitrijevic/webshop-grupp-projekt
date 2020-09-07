<template>
  <div>
    <header class="about-text">
      <h1>MEET OUR TEAM</h1>
      <p>
        We are all very different. We were born in different cities, at different times, we love different music, food, movies. But we have something that unites us all. It is our company. We are its heart. We are not just a team, we are a family.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic repellendus corrupti nobis laudantium possimus, sapiente assumenda quisquam sit, itaque facere delectus doloribus quo, expedita optio doloremque nesciunt. Aperiam ipsa fuga facere aut nulla. Similique accusamus laborum ad vel praesentium impedit neque quo. Et adipisci delectus assumenda, tempora repudiandae ea eum voluptas consequuntur modi incidunt in nisi explicabo omnis quos laborum!
      </p>
      <router-link to="contact">
        <button class="about-btn">CONTACT US</button>
      </router-link>
    </header>
    <img class="image" :src="require('@/assets/shoes.jpg')" alt />
    <ul>
      <li>
        <i class="fab fa-creative-commons-by"></i>
      </li>
      <li>
        <i class="fas fa-globe-europe"></i>
      </li>
      <li>
        <i class="far fa-smile-wink"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about-text {
  display: grid;
  margin-top: 100px;

  a {
    width: 60%;
    margin: auto;
    display: flex;
    align-items: center;
    text-decoration: none;
    justify-content: center;
  }

  .about-btn {
    width: 25%;
    margin: 50px;
    border: none;
    color: #fff;
    color: black;
    cursor: pointer;
    padding: 1rem 0;
    font-size: 1rem;
    border-radius: 3px;
    letter-spacing: 2px;
    font-weight: bolder;
    text-decoration: none;
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
    width: 50%;
    margin: auto;
    letter-spacing: 2px;
  }
  h1,
  p {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 65%;
}
</style>