import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function DrinkitWrappedButton() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Button
        className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-md transition-colors duration-200"
        onClick={() => navigate("/wrapped")}
      >
        Мой Drinkit Wrapped
      </Button>
    </div>
  );
}