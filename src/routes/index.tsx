import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, Diamond, Gamepad2, Heart, Info, Sparkles, MousePointer2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GameGrid, Steps, SupportBand, FAQ } from '@/components/store-ui';
import { pageHead } from '@/lib/store-data';
import hero from '@/assets/diamond-world.jpg';

export const Route = createFileRoute('/')({ head: () => pageHead('Gaming top-ups', 'Discover Free Fire, Blood Strike, PUBG Mobile, and Call of Duty: Mobile sample top-up options at HASA GOLD STORE.'), component: Index });

function Index() {
  return <div className="container"><section className="hero"><img className="hero-image" src={hero} alt="Sample artwork of blue diamonds and gold gaming coins" width={1536} height={864}/><div className="hero-content"><span className="eyebrow hero-eyebrow"><Sparkles size={12}/> YOUR NEXT LEVEL STARTS HERE</span><h1>HASA GOLD STORE<span>More play.<br/>More possibilities.</span></h1><p>Your favorite games, all in one place.<br/>Find your game. Choose your top-up. Keep playing.</p><div className="hero-actions"><Button asChild size="lg"><Link to="/games">Explore games <ArrowRight /></Link></Button><Button asChild variant="outline" size="lg"><Link to="/how-it-works">How it works <ArrowUpRight /></Link></Button></div><span className="hero-note"><Info size={13}/> Preview only · No real orders or payments</span></div><span className="hero-art-label">Sample artwork</span></section>
    <div className="feature-row"><div className="feature-item"><Gamepad2/><div><h3>Your games, together</h3><p>Four games. One destination.</p></div></div><div className="feature-item"><MousePointer2/><div><h3>Find your perfect top-up</h3><p>Simple choices, clear options.</p></div></div><div className="feature-item"><Heart/><div><h3>Keep your favorites close</h3><p>Less searching. More gaming.</p></div></div></div>
    <section className="home-section"><div className="section-heading"><div><h2>Choose your game</h2><p>A little boost for your next big moment.</p></div><Button variant="link" asChild><Link to="/games">View all games <ArrowRight /></Link></Button></div><GameGrid/><p className="catalog-note"><Info size={12}/> All top-up packages are Sample. Confirmed prices will be added later.</p></section>
    <section className="steps-section"><div className="section-heading"><div><h2>From game to top-up. Simply.</h2><p>Three small steps. Ready for your next session.</p></div><Button variant="link" asChild className="hide-mobile"><Link to="/how-it-works">How it works <ArrowRight /></Link></Button></div><Steps/></section>
    <SupportBand/>
    <section className="faq-section"><div><span className="eyebrow">GOOD TO KNOW</span><h2>Questions?<br/>We’ve got you.</h2><p>A few answers to help you get started.</p><Button variant="link" asChild><Link to="/support">Explore all FAQs <ArrowRight /></Link></Button></div><FAQ compact/></section>
  </div>;
}
