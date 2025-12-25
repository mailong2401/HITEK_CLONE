// App.tsx - ĐÃ SỬA
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
import ServicesPage from "@/pages/ServicesPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ProjectDetailPage from "@/pages/ProjectDetailPage";
import RecruitmentPage from "@/pages/RecruitmentPage";
import TestimonialsPage from "@/pages/TestimonialsPage";
import ConsultationPage from "@/pages/ConsultationPage";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import ScrollToTop from '@/components/ScrollToTop'; // Đã import
import ServiceCustom from '@/pages/services/ServiceCustom'
import LongTermSoftware from '@/pages/services/LongTermSoftware'
import ServiceMobileApp from '@/pages/services/ServiceMobileApp'
import MigrateServer from '@/pages/services/MigrateServer'
import SoftwareTesting from '@/pages/services/SoftwareTesting'
import Outsourcing from '@/pages/services/Outsourcing'
import Blockchain from '@/pages/services/Blockchain'

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop /> {/* THÊM DÒNG NÀY */}
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
              <Route path="/services-page/custom-software" element={
                <Layout>
                  <ServiceCustom />
                </Layout>
              } />
              <Route path="/services-page/long-term-software" element={
                <Layout>
                  <LongTermSoftware />
                </Layout>
              } />
              <Route path="/services-page/mobile-app" element={
                <Layout>
                  <ServiceMobileApp />
                </Layout>
              } />
              <Route path="/services-page/migrate-server" element={
                <Layout>
                  <MigrateServer />
                </Layout>
              } />
              <Route path="/services-page/software-testing" element={
                <Layout>
                  <SoftwareTesting />
                </Layout>
              } />
              <Route path="/services-page/outsourcing" element={
                <Layout>
                  <Outsourcing />
                </Layout>
              } />
              <Route path="/services-page/blockchain" element={
                <Layout>
                  <Blockchain />
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
              <Route path="/blog" element={
                <Layout>
                  <BlogPage />
                </Layout>
              } />
              <Route path="/blog/:id" element={
                <Layout>
                  <BlogPostPage />
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
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
