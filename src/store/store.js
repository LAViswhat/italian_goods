import { createStore } from "vuex";
import { fetchAllItems, fetchFiltredItems } from "@/api/itemsApi";
import { useI18n } from "vue-i18n";
import order from "./modules/order";

const store = createStore({
  state: {
    items: [],
    filteredItems: [],
    cartItems: JSON.parse(localStorage.getItem("cart-list")) || [],
    categories: ["drinks", "confectionery", "grocery", "other"],
  },
  mutations: {
    SET_ITEMS(state, items) {
      state.items = items;
    },
    SET_FILTERED_ITEMS(state, items) {
      state.filteredItems = items;
    },
    SET_CART_ITEMS(state, items) {
      state.cartItems = items;
    },
    ADD_TO_CART(state, item) {
      const product = state.items.find((i) => i.id === item.id);
      if (product && !product.isAdded) {
        state.cartItems.push({
          id: product.id,
          imgURL: product.imgURL,
          name: product.name,
          price: product.price,
          quantity: 1,
          isAdded: true,
        });

        product.isAdded = true;

        localStorage.setItem("cart-list", JSON.stringify(state.cartItems));
      }
    },
    REMOVE_FROM_CART(state, item) {
      let product = state.items.find((i) => i.id === item.id);

      if (!product) {
        product = state.cartItems.find((i) => i.id === item.id);
      }
      if (product) {
        product.isAdded = false;
      }

      state.cartItems.splice(state.cartItems.indexOf(item), 1);
    },
    UPDATE_ITEM_QUANTITY(state, { id, quantity }) {
      const cartItem = state.cartItems.find((item) => item.id === id);
      if (cartItem) {
        cartItem.quantity = quantity;
        localStorage.setItem("cart-list", JSON.stringify(state.cartItems));
      }
    },
  },
  actions: {
    async loadItems({ commit }) {
      try {
        const items = await fetchAllItems();
        commit("SET_ITEMS", items);
      } catch (error) {
        console.error(error);
      }
    },
    async filterItems({ commit }, { category, subcategory }) {
      try {
        const items = await fetchFiltredItems(category, subcategory);
        commit("SET_FILTERED_ITEMS", items);
      } catch (error) {
        console.error(error);
      }
    },
    addToCart({ commit }, item) {
      commit("ADD_TO_CART", item);
    },
    removeFromCart({ commit }, item) {
      commit("REMOVE_FROM_CART", item);
    },
    updateItemQuantity({ commit }, payload) {
      commit("UPDATE_ITEM_QUANTITY", payload);
    },
  },
  getters: {
    items: (state) => state.items,
    filteredItems: (state) => state.filteredItems,
    translatedCategories: (state) => {
      const { t } = useI18n();
      return state.categories.map((category) => t(`categories.${category}`));
    },
    orders: (state) => state.orders,
    cartItems: (state) => state.cartItems,
    categories: (state) => state.categories,
    cartSummery: (state) => {
      const cartTotalPrice = state.cartItems.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
      const cartTotalQuantity = state.cartItems.reduce((total, product) => {
        return total + product.quantity;
      }, 0);
      const shippingCost = 12.5;
      const cartTotalPriceWithShipping = cartTotalPrice + shippingCost;

      return {
        cartTotalPrice,
        cartTotalQuantity,
        shippingCost,
        cartTotalPriceWithShipping,
      };
    },
  },
  modules: {
    order,
  },
});

export default store;
