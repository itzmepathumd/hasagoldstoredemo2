import { createFileRoute } from '@tanstack/react-router';
import { AdminAccounts } from '@/components/admin-ui';
import { pageHead } from '@/lib/store-data';
export const Route = createFileRoute('/admin/accounts')({ head: () => pageHead('Local demo accounts', 'Local demo accounts in the HASA GOLD STORE public frontend admin demo. No live services.'), component: AdminAccounts });
