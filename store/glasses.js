export const state = () => ({
  cards: [],
  titles: [],
  loading: null,
  error: null,
  cart: [],
});

export const mutations = {
  SET_CARDS(state, cardsx) {
    state.cards = cardsx;
  },
  SET_TITLE(state, titlesx) {
    state.titles = titlesx;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
  SET_CART(state, cardID) {
    const cardID_int = parseInt(cardID, 10)
    state.cart.push(cardID_int);
    console.log(state.cart, cardID, "add");
  },
  DELETE_CART(state, cardID){
    const cardID_int = parseInt(cardID, 10)
    const cardIndex = state.cart.findIndex(id => id == cardID)
    state.cart.splice(cardIndex, 1);
    console.log(state.cart, cardID_int, "delete")

  }
};

export const actions = {
  async addCard({ state }) {
    try {
      for (const card of state.cards) {
        const response = await this.$axios.post(
          "http://localhost:3000/api/cards",
          card
        );
        console.log("Data saved:", card);
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  },
  async addCategory({ state }) {
    try {
      for (const title of state.titles) {
        const response = await this.$axios.post(
          "http://localhost:3000/api/titles",
          title
        );
        console.log("Data saved:", title);
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  },
  async fetchCatalog({ commit, state }) {
    if (state.cards.length > 0 && state.titles.length > 0) {
      // Данные уже загружены, повторная загрузка не требуется
      return;
    }
    commit("SET_LOADING", true);
    commit("SET_ERROR", null);
    try {
      const [cardsResponse, titlesResponse] = await Promise.all([
        this.$axios.get("http://localhost:3000/api/cards"),
        this.$axios.get("http://localhost:3000/api/titles"),
      ]);
      console.log("Cards response:", cardsResponse.data); // Логирование данных карточек
      console.log("Titles response:", titlesResponse.data);
      commit("SET_CARDS", cardsResponse.data);
      commit("SET_TITLE", titlesResponse.data);
    } catch (error) {
      commit("SET_ERROR", error);
    } finally {
      commit("SET_LOADING", false);
    }
  },
  cardBasketAdd({ state, commit }, setCartCandidate) {
    if (!state.cart.some((card) => card == setCartCandidate)) {
      commit("SET_CART", setCartCandidate);
    }
  }
};

export const getters = {
  cards: (state) => state.cards,
  titles: (state) => state.titles,
  loading: (state) => state.loading,
  error: (state) => state.error,
  cart: (state) => state.cart,
};
