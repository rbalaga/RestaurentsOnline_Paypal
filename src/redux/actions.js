export const RETRIVE_RESTAURENTS_LIST = "RETRIVE_RESTAURENTS_LIST";
export const RETRIVE_RESTAURENTS_LIST_FULFILLED =
  "RETRIVE_RESTAURENTS_LIST_FULFILLED";
export const FILTER_RESTAURENTS = "FILTER_RESTAURENTS";
export const FILTER_RESTAURENTS_FULFILLED = "FILTER_RESTAURENTS_FULFILLED";
export const SORT_RESTAURENTS = "SORT_RESTAURENTS";
export const SORT_RESTAURENTS_FULFILLED = "SORT_RESTAURENTS_FULFILLED";

export const getRestaurentsList = () => {
  return {
    type: RETRIVE_RESTAURENTS_LIST,
    payload: {
      url: "http://starlord.hackerearth.com/gamesext",
    },
  };
};

export const filterRestaurents = (searchText, genre) => ({
  type: FILTER_RESTAURENTS,
  searchText,
  genre,
});

export const sortByField = (field, sortType = "ASC") => ({
  type: SORT_RESTAURENTS,
  field,
  sortType,
});
