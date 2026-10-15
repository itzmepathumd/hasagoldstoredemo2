import { createFileRoute } from '@tanstack/react-router';
import { AdminPackages } from '@/components/admin-ui';
import { pageHead } from '@/lib/store-data';
export const Route = createFileRoute('/admin/packages')({ head: () => pageHead('Manage sample packages', 'Manage sample packages in the HASA GOLD STORE public frontend admin demo. No live services.'), component: AdminPackages });
