import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import RouteList from "./app/RouteList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./service/core/redux";
import BackGroundImg from "./assets/photos/background/background.svg";
const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
      refetchOnReconnect: true,
      gcTime: 50000,
      refetchInterval: 5000,
      refetchOnWindowFocus: true,
      refetchOnMount: false,
      retry: 5,
    },
  },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <div className="bg-backgro relative und h-screen top-[-20px]  bg-no-repeat bg-contain  ">
          <Toaster />
          <img src={BackGroundImg} className="absolute z-0 w-full m-0 p-0 " alt="" />
          <div className="z-50 relative p-2">
            <RouterProvider router={RouteList} />
          </div>
        </div>
    
      </Provider>
    </QueryClientProvider>
  </StrictMode>
);
