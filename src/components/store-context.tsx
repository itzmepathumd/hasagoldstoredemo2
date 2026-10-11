import { createContext, useContext, useState, type ReactNode } from 'react';

const StoreContext = createContext<{ favorites: string[]; toggleFavorite: (id: string) => void }>({ favorites: [], toggleFavorite: () => {} });
export function StoreProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  function toggleFavorite(id: string) { setFavorites(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]); }
  return <StoreContext.Provider value={{ favorites, toggleFavorite }}>{children}</StoreContext.Provider>;
}
export const useStore = () => useContext(StoreContext);