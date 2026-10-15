import { createContext, useContext, useState, type ReactNode } from 'react';
import { games, faqs } from '@/lib/store-data';
export type AdminGame = { id: string; name: string; currency: string; image: string; enabled: boolean; packs: number[] };
export type AdminFaq = { question: string; answer: string };
function useAdminState() {
  const initialGames = () => games.map(game => ({ ...game, packs: [...game.packs], enabled: true }));
  const [catalog, setCatalog] = useState<AdminGame[]>(initialGames);
  const [answers, setAnswers] = useState<AdminFaq[]>(() => faqs.map(item => ({ ...item })));
  const [activity, setActivity] = useState<string[]>([]);
  const record = (text: string) => setActivity(items => [text, ...items].slice(0,10));
  const changeGame = (id: string, values: Partial<AdminGame>) => { setCatalog(items => items.map(item => item.id === id ? { ...item, ...values } : item)); record('Sample game draft updated'); };
  const reset = () => { setCatalog(initialGames()); setAnswers(faqs.map(item => ({ ...item }))); setActivity([]); };
  return { catalog, answers, activity, changeGame, setAnswers, record, reset };
}
const Context = createContext<ReturnType<typeof useAdminState> | null>(null);
export function AdminProvider({ children }: { children: ReactNode }) { const value = useAdminState(); return <Context.Provider value={value}>{children}</Context.Provider>; }
export function useAdmin() { const value = useContext(Context); if (!value) throw new Error('Admin provider missing'); return value; }