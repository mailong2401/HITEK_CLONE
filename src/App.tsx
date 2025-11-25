// App.tsx - Cập nhật
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutCompany from "./pages/AboutCompany";
import AboutUs from "@/pages/AboutUs"
import Layout from "./components/Layout";
import TechnologyPage from "@/pages/TechnologyPage";
import Chatbox from '@/components/Chatbox';
import ServicesPage from "@/pages/ServicesPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ProjectDetailPage from "@/pages/ProjectDetailPage";
import RecruitmentPage from "@/pages/RecruitmentPage";
import TestimonialsPage from "@/pages/TestimonialsPage";
import ConsultationPage from "@/pages/ConsultationPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <LanguageProvider>
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
                <Route path="/project/:id" element={
                  <Layout>
                    <ProjectDetailPage />
                  </Layout>
                } />
                <Route path="/recruitment" element={
                  <Layout>
                    <RecruitmentPage />
                  </Layout>
                } />
                <Route path="/testimonials" element={
                  <Layout>
                    <TestimonialsPage />
                  </Layout>
                } />
                <Route path="/consultation" element={
                  <Layout>
                    <ConsultationPage />
                  </Layout>
                } />
                
                <Route path="*" element={
                  <Layout>
                    <NotFound />
                  </Layout>
                } />
              </Routes>
              <Chatbox /> {/* Thêm component Chatbot */}
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;