import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CMSProvider } from './context/CMSContext';
import { PublicLayout } from './components/PublicLayout';
import {
  HomePage,
  CategoryPage,
  ProductDetailPage,
  AboutPage,
  ContactPage,
  BlogListPage,
  BlogDetailPage,
} from './pages/PublicPages';
import { AdminPanel } from './admin/AdminPanel';

export default function App() {
  return (
    <CMSProvider>
      <BrowserRouter>
        <Routes>
          {/* Admin CMS Routes */}
          <Route path="/admin/*" element={<AdminPanel />} />

          {/* Public Storefront Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/cua-hang" element={<CategoryPage />} />
            <Route path="/danh-muc/:slug" element={<CategoryPage />} />
            <Route path="/san-pham/:slug" element={<ProductDetailPage />} />
            <Route path="/tin-tuc" element={<BlogListPage />} />
            <Route path="/tin-tuc/:slug" element={<BlogDetailPage />} />
            <Route path="/gioi-thieu" element={<AboutPage />} />
            <Route path="/lien-he" element={<ContactPage />} />
            <Route path="/huong-dan-dat-hang" element={<AboutPage />} />
            <Route path="/chinh-sach-giao-hang" element={<AboutPage />} />
            <Route path="/huong-dan-dat-hoa" element={<AboutPage />} />
            <Route path="/chinh-sach-giao-hoa" element={<AboutPage />} />
            <Route path="/chinh-sach-doi-tra" element={<AboutPage />} />
            <Route path="/chinh-sach-bao-mat" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CMSProvider>
  );
}
