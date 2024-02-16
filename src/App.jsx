import Landing from "./components/public/Landing";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
} from "react-router-dom";
import MenCategory from "./components/public/NavitemsPages/MenCategory";
import WomenCategory from "./components/public/NavitemsPages/WomenCategory";
import HomeAndLiving from "./components/public/NavitemsPages/HomeAndLiving";
import Electronics from "./components/public/NavitemsPages/Electronics";
import DailyNeeds from "./components/public/NavitemsPages/DailyNeeds";
import Profile from "./components/public/NavitemsPages/Profile";
import Wishlist from "./components/public/NavitemsPages/Wishlist";
import Cart from "./components/public/NavitemsPages/Cart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/men",
      element: <MenCategory />,
    },
    {
      path: "/women",
      element: <WomenCategory />,
    },
    {
      path: "/home-living",
      element: <HomeAndLiving />,
    },
    {
      path: "/electronics",
      element: <Electronics />,
    },
    {
      path: "/daily-needs",
      element: <DailyNeeds />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/wishlist",
      element: <Wishlist />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <Landing />
      </RouterProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App;
