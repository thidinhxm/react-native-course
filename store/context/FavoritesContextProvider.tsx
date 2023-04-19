import { FavoritesContext } from './favorite-context';
import { ReactNode, useState } from 'react';


function FavoritesContextProvider({ children }: { children: ReactNode}) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([] as string[]);
  
  function addFavorite(id: string) {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id: string) {
    setFavoriteMealIds((currentFavIds) => 
      currentFavIds.filter((mealId) => mealId !== id));
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite
  }

  return (
    <FavoritesContext.Provider 
      value={value}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;