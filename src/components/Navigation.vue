<template>
  <nav>
    <img
      src="https://www.avanza.se/avanzabank/kundservice/utbildningssidorna/aktier/akademisymbol-aktier.svg"
      alt="logo"
    />
    <ul>
      <li>Home</li>
      <li class="products">
        <span>Products</span>
        <div class="dropdown">
          <ul class="dropdown-list">
            <li>hej</li>
            <li>hej</li>
            <li>hej</li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  img {
    width: 50px;
    height: 50px;
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    li {
      list-style-type: none;
      margin-right: 15px;
      &.products {
        position: relative;
        &:hover {
          .dropdown {
            display: block;
          }
        }
        .dropdown {
          background: red;
          position: absolute;
          display: none;
          .dropdown-list {
            display: block;
            padding: 10px;
            &:hover {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>