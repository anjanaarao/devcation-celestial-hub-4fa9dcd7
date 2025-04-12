
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import Devcation25Page from "./pages/Devcation25Page";
import TimelinePage from "./pages/TimelinePage";
import EventsPage from "./pages/EventsPage";
import JudgesPage from "./pages/JudgesPage";
import MentorsPage from "./pages/MentorsPage";
import PrizesPage from "./pages/PrizesPage";
import SponsorsPage from "./pages/SponsorsPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/devcation25" element={<Devcation25Page />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/judges" element={<JudgesPage />} />
          <Route path="/mentors" element={<MentorsPage />} />
          <Route path="/prizes" element={<PrizesPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
