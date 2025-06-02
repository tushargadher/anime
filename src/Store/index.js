import Vuex from "vuex";
export default new Vuex.Store({
    state: {
        animeTypes: [
            { value: 'tv', label: 'TV Series' },
            { value: 'movie', label: 'Movie' },
            { value: 'ova', label: 'OVA (Original Video Animation)' },
            { value: 'special', label: 'Special' },
            { value: 'ona', label: 'ONA (Original Net Animation)' },
            { value: 'music', label: 'Music Video' },
            { value: 'cm', label: 'Commercial (CM)' },
            { value: 'pv', label: 'Promotional Video (PV)' },
            { value: 'tv_special', label: 'TV Special' },
        ],
        selectedType: [],
    },
    getters: {

    },
    mutations: {
        ADD_TO_SELECTED_TYPE(state, type) {
            state.selectedType = [...state.selectedType, type]
        },
        REMOVE_SELECTED_TYPE(state, typeToRemove) {
            state.selectedType = state.selectedType.filter(
                (item) => item.value !== typeToRemove.value
            )
        },
    },
    actions: {

    }
})