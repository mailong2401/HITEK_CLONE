// App.tsx - Thêm route mới
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutCompany from "./pages/AboutCompany";
import AboutUs from "@/pages/AboutUs"
import Layout from "./components/Layout";
import TechnologyPage from "@/pages/TechnologyPage";
import ServicesPage from "@/pages/ServicesPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ProjectDetailPage from "@/pages/ProjectDetailPage"; // 👈 Thêm import

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/HITEK_CLONE">
          <Routes>
            <Route path="/" element={
              <Layout>
                <Index />
              </Layout>
            } />
            <Route path="/about-company" element={
              <Layout>
                <AboutCompany />
              </Layout>
            } />
            <Route path="/technology" element={
              <Layout>
                <TechnologyPage />
              </Layout>
            } />
            <Route path="/about-us" element={
              <Layout>
                <AboutUs />
              </Layout>
            } />
            <Route path="/services-page" element={
              <Layout>
                <ServicesPage />
              </Layout>
            } />
            <Route path="/projects-page" element={
              <Layout>
                <ProjectsPage />
              </Layout>
            } />
            {/* 👇 Thêm route mới cho project detail */}
            <Route path="/project/:id" element={
              <Layout>
                <ProjectDetailPage />
              </Layout>
            } />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={
              <Layout>
                <NotFound />
              </Layout>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
