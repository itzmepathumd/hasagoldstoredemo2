import { createFileRoute } from '@tanstack/react-router';
import { AdminGames } from '@/components/admin-ui';
import { pageHead } from '@/lib/store-data';
export const Route = createFileRoute('/admin/games')({ head: () => pageHead('Manage games', 'Manage games in the HASA GOLD STORE public frontend admin demo. No live services.'), component: AdminGames });
