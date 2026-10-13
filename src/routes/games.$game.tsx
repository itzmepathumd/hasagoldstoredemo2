import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, Coins, Diamond, Info, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { games, pageHead } from '@/lib/store-data';
import { FavoriteButton, SupportBand } from '@/components/store-ui';
import { useDemoAccount } from '@/components/demo-account';
export const Route = createFileRoute('/games/$game')({
  loader: ({ params }) => { const game = games.find(item => item.id === params.game); if (!game) throw notFound(); return game; },
  head: ({ loaderData }) => pageHead(loaderData ? `${loaderData.name} top-ups` : 'Game not found', loaderData ? `Explore Sample ${loaderData.currency} packages for ${loaderData.name} at HASA GOLD STORE. No real purchases.` : 'This game is not available in the HASA GOLD STORE collection.'),
  component: GamePage,
  notFoundComponent: () => <div className="container page-content"><h1 className="text-3xl font-display mb-4">Game not found</h1><p className="mb-6 text-muted-foreground">This game is not in our collection.</p><Button asChild><Link to="/games">Explore games <ArrowRight/></Link></Button></div>,
});
function GamePage() {
  const game = Route.useLoaderData();
  const { viewGame } = useDemoAccount();
  const [selected, setSelected] = useState<number | null>(null);
  const [review, setReview] = useState(false);
  useEffect(() => { setSelected(null); setReview(false); }, [game.id]);
  useEffect(() => { viewGame(game.id); }, [game.id, viewGame]);
  const CurrencyIcon = game.icon === 'diamond' ? Diamond : Coins;
  return <div className="container page-content"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link to="/">Home</Link><ChevronRight size={12}/><Link to="/games">Games</Link><ChevronRight size={12}/><span>{game.name}</span></nav><section className="game-detail-banner"><div className={`detail-art art-${game.tone}`}><img src={game.image} alt={`Sample ${game.name} currency artwork`} width={1024} height={768}/><span className="sample-art">Sample artwork</span></div><div><span className="eyebrow">GAME TOP-UPS</span><h1>{game.name}</h1><p>Explore {game.currency} packages for your next gaming session. All options below are Sample, not live offers.</p><div className="detail-favorite"><FavoriteButton game={game}/><span>Keep this game close</span></div></div></section><section className="pack-section"><div className="section-heading"><div><h2>Choose your top-up</h2><p>Sample packages · Confirmed amounts and prices to follow</p></div></div><div className="package-grid" aria-label="Sample packages">{game.packs.map(amount => <Button key={amount} variant="outline" className="package-button" aria-pressed={selected === amount} onClick={() => setSelected(amount)}><CurrencyIcon/><span className="package-label">Sample</span><strong>{amount.toLocaleString()} {game.currency}</strong><small>{selected === amount ? 'Selected' : 'Price not available'}</small></Button>)}</div><div className="selection-panel"><div><h3>{selected === null ? 'Select a sample package' : `Sample · ${selected.toLocaleString()} ${game.currency}`}</h3><p>No account details or payment required. This is a preview only.</p></div><Button disabled={selected === null} onClick={() => setReview(true)}>Review sample <ArrowRight/></Button></div></section><SupportBand/><Dialog open={review} onOpenChange={setReview}><DialogContent><DialogTitle>Your sample selection</DialogTitle><DialogDescription>Review only. This is not an order or a reservation.</DialogDescription><div className="review-summary"><div><span>Game</span><strong>{game.name}</strong></div><div><span>Sample package</span><strong>{selected?.toLocaleString()} {game.currency}</strong></div><div><span>Price</span><strong>Not available</strong></div></div><div className="review-note"><Info size={18}/><span>No payment has been taken. No currency will be delivered. Confirmed packages, prices, and purchase details have not been provided yet.</span></div><Button onClick={() => setReview(false)}>Back to packages <Check/></Button></DialogContent></Dialog></div>;
}