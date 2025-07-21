import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    animeTypes: [
      { value: 'tv', label: 'TV Series', isSelected: false },
      { value: 'movie', label: 'Movie', isSelected: false },
      { value: 'ova', label: 'OVA (Original Video Animation)', isSelected: false },
      { value: 'special', label: 'Special', isSelected: false },
      { value: 'ona', label: 'ONA (Original Net Animation)', isSelected: false },
      { value: 'music', label: 'Music Video', isSelected: false },
      { value: 'cm', label: 'Commercial (CM)', isSelected: false },
      { value: 'pv', label: 'Promotional Video (PV)', isSelected: false },
      { value: 'tv_special', label: 'TV Special', isSelected: false },
    ],
    page: 1,
    parPage: 10,
    paginationSize: 5,
  },

  mutations: {
    TOGGLE_SELECTED_TYPE(state, typeValue) {
      const type = state.animeTypes.find(item => item.value === typeValue);
      if (type) {
        type.isSelected = !type.isSelected;
      }
    },
    UPDATE_PAGE(state, page) {
      state.page = page;
    },
    SET_PAGINATION_SIZE(state, totalPage) {
      state.paginationSize = totalPage;
    }
  },
});
