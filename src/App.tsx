import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import { useEffect } from "react";
import { getColorByIndex, getRandomColor } from "@/lib/underlineColors";

const queryClient = new QueryClient();

// Toggle strategy here
const USE_RANDOM = false; // set true if you prefer per-load random colors
// If you want a new random color each hover event instead of per element load,
// you can attach mouseenter listeners here and set a new color with getRandomColor().
// Keeping it simple / deterministic for now when USE_RANDOM = false.

const App = () => {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".random-underline-hover");
    nodes.forEach((el, idx) => {
      const color = USE_RANDOM ? getRandomColor() : getColorByIndex(idx);
      el.style.setProperty("--underline-color", color);
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:fileName" element={<BlogPost />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
