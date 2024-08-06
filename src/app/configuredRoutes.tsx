import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Layout from './layout/layout.tsx';
import { lazy, Suspense } from 'react';
import { Progress } from '@nextui-org/react';

const ProductsRoutingLazy = lazy(
  () => import('#/business/products/products.routing.tsx')
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="products" />,
      },
      {
        path: '/products/*',
        element: (
          <Suspense
            fallback={
              <div className="flex h-full justify-center items-center flex-col gap-5">
                <h1 className="text-2xl">We are Loading your products...</h1>
                <Progress
                  size="lg"
                  isIndeterminate
                  aria-label="Loading..."
                  className="max-w-md"
                />
              </div>
            }
          >
            <ProductsRoutingLazy />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: 'auth/*',
    element: <div>login/signup</div>,
  },
]);

const ConfiguredRoutes = () => <RouterProvider router={router} />;

export default ConfiguredRoutes;
