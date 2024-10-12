import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { UnitProvider } from "./contexts/UnitContext";
import { LocationProvider } from "./contexts/LocationContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <LocationProvider>
      <UnitProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route
                  index
                  element={<Navigate replace to="/dashboard/humidity" />}
                />
                <Route path="dashboard/:type" element={<Dashboard />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </UnitProvider>
    </LocationProvider>
  );
}

export default App;
