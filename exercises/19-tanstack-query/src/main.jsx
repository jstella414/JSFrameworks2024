import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Import something here
const queryClient = new QueryClient();
// Setup Tanstack Query below
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={QueryClient}>
    <App />
    </QueryClientProvider>
 
  </React.StrictMode>
);
