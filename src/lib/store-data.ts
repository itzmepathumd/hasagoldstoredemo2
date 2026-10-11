import diamonds from '@/assets/diamond-world.jpg';
import strike from '@/assets/strike-world.jpg';
import battle from '@/assets/battle-world.jpg';
import ops from '@/assets/ops-world.jpg';

export const games = [
  { id: 'free-fire', name: 'Free Fire', currency: 'Diamonds', image: diamonds, tone: 'ice', icon: 'diamond', packs: [100, 310, 520, 1060, 2180, 5600] },
  { id: 'blood-strike', name: 'Blood Strike', currency: 'Gold', image: strike, tone: 'ember', icon: 'coins', packs: [100, 300, 500, 1000, 2000, 5000] },
  { id: 'pubg-mobile', name: 'PUBG Mobile', currency: 'UC', image: battle, tone: 'olive', icon: 'coins', packs: [60, 325, 660, 1800, 3850, 8100] },
  { id: 'call-of-duty-mobile', name: 'Call of Duty: Mobile', currency: 'CP', image: ops, tone: 'violet', icon: 'coins', packs: [80, 400, 800, 2000, 4000, 8000] },
] as const;
export type Game = (typeof games)[number];
export const faqs = [
  { question: 'Can I buy a top-up right now?', answer: 'Not yet. This is a frontend preview of HASA GOLD STORE. All packages are marked Sample, and no orders or payments are processed.' },
  { question: 'Which games can I browse?', answer: 'Explore Free Fire, Blood Strike, PUBG Mobile, and Call of Duty: Mobile. Each game has its own page with sample top-up options.' },
  { question: 'Where can I find prices?', answer: 'Confirmed prices have not been provided yet. Sample packages are shown without prices so they cannot be mistaken for live offers.' },
  { question: 'Do I need to share my password?', answer: 'No. This preview does not ask for passwords, account access, or payment information. Never share your game password.' },
  { question: 'How do favorites work?', answer: 'Select the heart next to a game to add it to Favorites. Your choices stay available while you browse during this session and reset when the page is reloaded.' },
  { question: 'How can I contact support?', answer: 'Official support contact details have not been added yet. You can browse these FAQs in the meantime.' },
];

export function pageHead(title: string, description: string) {
  return { meta: [{ title: `${title} | HASA GOLD STORE` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | HASA GOLD STORE` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}