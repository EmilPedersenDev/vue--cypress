<template>
  <div class="products">
    <div class="products__list">
      <div
        :class="['products__card', product.selected && 'selected']"
        :id="'product-' + ++id"
        v-for="(product, id) in products"
        :key="id"
        @click="selectProduct(product)"
      >
        <h1>{{ product.name }}</h1>
      </div>
    </div>
    <div class="purchase">
      <button
        id="buy-btn"
        @click="buyProduct"
        v-if="!bought"
        :disabled="selectedProducts.length === 0"
      >
        Buy
      </button>
      <p class="purchase-text" v-else>You have purchased!</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "products",
  props: {
    products: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      bought: false,
    };
  },
  methods: {
    ...mapActions(["addProduct", "removeProduct"]),
    selectProduct(product) {
      product.selected = !product.selected;
      product.selected ? this.addProduct(product) : this.removeProduct(product);
    },
    buyProduct() {
      this.bought = true;
    },
  },
  computed: {
    ...mapGetters({
      selectedProducts: "getSelectedProducts",
    }),
  },
};
</script>

<style lang="scss" scoped>
.products {
  margin-top: 30px;
  .purchase {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
  .products__list {
    width: 100%;
    max-width: 700px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
    .products__card {
      box-shadow: 0px 4px 14px 1px rgba($color: #000000, $alpha: 0.2);
      display: flex;
      justify-content: center;
      padding: 50px 20px;
      &.selected {
        box-shadow: 0px 4px 14px 1px rgba($color: green, $alpha: 1);
      }
    }
  }
}
</style>