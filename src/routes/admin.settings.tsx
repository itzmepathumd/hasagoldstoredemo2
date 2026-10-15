import { createFileRoute } from '@tanstack/react-router';
import { AdminSettings } from '@/components/admin-ui';
import { pageHead } from '@/lib/store-data';
export const Route = createFileRoute('/admin/settings')({ head: () => pageHead('Admin settings', 'Admin settings in the HASA GOLD STORE public frontend admin demo. No live services.'), component: AdminSettings });
