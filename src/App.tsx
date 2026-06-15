import { Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import { BlogIndex } from "./pages/Blog/BlogIndex";
import { BlogPost } from "./pages/Blog/BlogPost";
import { CompareIndex } from "./pages/Compare/CompareIndex";
import { CompareDetail } from "./pages/Compare/CompareDetail";
import { RentCollection } from "./pages/Solutions/RentCollection";
import { TenantVerification } from "./pages/Solutions/TenantVerification";
import { ExcelAlternative } from "./pages/Solutions/ExcelAlternative";

function App() {
  return (
    <div className="min-h-screen bg-white text-body font-sans antialiased selection:bg-primary/20 selection:text-primary flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/compare" element={<CompareIndex />} />
          <Route path="/compare/:competitor" element={<CompareDetail />} />
          <Route path="/solutions/rent-collection" element={<RentCollection />} />
          <Route path="/solutions/tenant-verification" element={<TenantVerification />} />
          <Route path="/solutions/excel-alternative" element={<ExcelAlternative />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
