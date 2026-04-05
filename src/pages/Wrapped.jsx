import { DrinkitCarousel } from "../components/DrinkitCarousel";
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'


const Wrapped = () => {
    
  return (
    <main className="min-h-screen bg-blue-700 overflow-hidden">
      <div className="pt-10 pb-4 text-center">
      <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px,rgba(255, 255, 255, 0.46) 1px, transparent 0)`,
                    backgroundSize: "20px 20px",
                }}
            />
        <h1 className="text-3xl font-bold !text-white">Мой Drinkit Wrapped</h1>
        <p className="text-white mt-1 text-md">Твои любимые напитки этого года</p>
      </div>

      <DrinkitCarousel />
      
    </main>
  );
};

export default Wrapped;