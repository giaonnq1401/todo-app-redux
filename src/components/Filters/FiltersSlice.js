const initState = {
    search: "",
    status: "All",
    priority: [],
};

const filtersReducer = (state = initState, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "filters/searchFilterChange":
        return {
          ...state.filters,
          search: action.payload,
        };

    case 'filters/statusFilterChange':
        return {
            ...state,
            status: action.payload,
        };
        
    default:
      return state;
  }
};

export default filtersReducer;