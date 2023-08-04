/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const pages: { 
  [key: string]: { 
    default: React.ComponentType; 
    loader?: any; 
    action?: any; 
    ErrorBoundary?: React.ComponentType<any> 
  } 
} = import.meta.glob("./pages/**/*.tsx", { eager: true });

interface Route {
  path: string;
  Element: React.ComponentType<any>;
  loader?: any;
  action?: any;
  ErrorBoundary?: React.ComponentType<any>;
}

const routes: Route[] = [];
for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName.includes("$")
    ? fileName.replace("$", ":")
    : fileName.replace(/\/index/, "");

  routes.push({
    path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader,
    action: pages[path]?.action,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  });
}

const router = createBrowserRouter(
  routes.map(({ Element, ErrorBoundary, ...rest }) => ({
    ...rest,
    element: <Element />,
    ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
  }))
);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
