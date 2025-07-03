import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#181818] text-[#ededed] font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen ml-0 md:ml-[260px]">
        <Header />
        <main className="flex-1 flex items-center justify-center px-8 py-12">
          {children}
        </main>
        <div className="px-4 sm:px-8 md:px-12 lg:px-18"><Footer /></div>
      </div>
    </div>
  );
} 