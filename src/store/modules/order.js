import apiClient from "@/api/itemsApi";

const state = {
  loading: false,
  orderResponse: JSON.parse(sessionStorage.getItem("order-list")) || null,
  error: null,
};

const mutations = {
  SET_LOADING(state, payload) {
    state.loading = payload;
  },
  SET_ORDER_RESPONSE(state, payload) {
    state.orderResponse = payload;
    sessionStorage.setItem("order-list", JSON.stringify(state.orderResponse));
  },
  SET_ERROR(state, payload) {
    state.error = payload;
  },
};

const actions = {
  async submitOrder({ commit }, orderData) {
    commit("SET_LOADING", true);
    try {
      const { data } = await apiClient.post("/orders", orderData);
      commit("SET_ORDER_RESPONSE", data);
      return data;
    } catch (error) {
      commit("SET_ERROR", error);
      throw error;
    } finally {
      commit("SET_LOADING", false);
    }
  },
};

const getters = {
  getOrderResponse: (state) => state.orderResponse,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
