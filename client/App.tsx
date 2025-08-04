import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Index from "./pages/Index";
import Przemiany from "./pages/Przemiany";
import Program90Dni from "./pages/Program90Dni";
import Kontakt from "./pages/Kontakt";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Custom theme with our color palette
const theme = extendTheme({
  colors: {
    brand: {
      eerieBlack: "#1a1a1a",
      oxfordBlue: "#0f1b3c",
      sgbusGreen: "#9be564",
      aliceBlue: "#e9f1f7",
      rosyBrown: "#b38d97"
    }
  },
  styles: {
    global: {
      body: {
        bg: "brand.eerieBlack",
        color: "brand.aliceBlue"
      }
    }
  }
});

const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/przemiany" element={<Przemiany />} />
            <Route path="/program-90-dni" element={<Program90Dni />} />
            <Route path="/kontakt" element={<Kontakt />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ChakraProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
