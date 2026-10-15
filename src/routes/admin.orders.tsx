import { createFileRoute } from '@tanstack/react-router';
import { AdminOrders } from '@/components/admin-ui';
import { pageHead } from '@/lib/store-data';
export const Route = createFileRoute('/admin/orders')({ head: () => pageHead('Admin orders', 'Admin orders in the HASA GOLD STORE public frontend admin demo. No live services.'), component: AdminOrders });
