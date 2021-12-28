export const getFavouritesFromLocalStorage = () => {
  const favourites = localStorage.getItem('favourites');
  const parsed = JSON.parse(favourites);
  return parsed || [];
};
