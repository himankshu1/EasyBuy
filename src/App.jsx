import Landing from "./components/public/Landing";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  BrowserRouter,
  Outlet,
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
import ProductDetails from "./components/public/ProductDetails";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Navbar from "./components/public/Navbar";
import Footer from "./components/public/Footer";

const App = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Landing />,
  //   },
  //   {
  //     path: "/product/:id",
  //     element: <ProductDetails />,
  //   },
  //   {
  //     path: "/men",
  //     element: <MenCategory />,
  //   },
  //   {
  //     path: "/women",
  //     element: <WomenCategory />,
  //   },
  //   {
  //     path: "/home-living",
  //     element: <HomeAndLiving />,
  //   },
  //   {
  //     path: "/electronics",
  //     element: <Electronics />,
  //   },
  //   {
  //     path: "/daily-needs",
  //     element: <DailyNeeds />,
  //   },
  //   {
  //     path: "/profile",
  //     element: <Profile />,
  //   },
  //   {
  //     path: "/wishlist",
  //     element: <Wishlist />,
  //   },
  //   {
  //     path: "/cart",
  //     element: <Cart />,
  //   },
  // ]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar /> {/* Render Navbar outside of Routes */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/men" element={<MenCategory />} />
          <Route path="/women" element={<WomenCategory />} />
          <Route path="/home-living" element={<HomeAndLiving />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/daily-needs" element={<DailyNeeds />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer /> {/* Render Footer outside of Routes */}
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App;
