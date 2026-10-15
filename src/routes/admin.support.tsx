import { createFileRoute } from '@tanstack/react-router';
import { AdminSupport } from '@/components/admin-ui';
import { pageHead } from '@/lib/store-data';
export const Route = createFileRoute('/admin/support')({ head: () => pageHead('Manage FAQ drafts', 'Manage FAQ drafts in the HASA GOLD STORE public frontend admin demo. No live services.'), component: AdminSupport });
