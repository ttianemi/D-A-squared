import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const drinkItems = [
  {
    id: "item-1",
    title: "Клубничный Матча Латте",
    image: "/drink1.jpg",
    price: "1500 ₸",
    description: "Был куплен тобой 132 раза за этот год! Вот он - самый настоящий фанат матчи",
  },
  {
    id: "item-2",
    title: "Вы - Освежающий классик",
    image: "/drink2.jpg",
    price: "",
    description: "Вы любите айс версии напитков больше обычного. За этот меясц вы купили 12 холодных напитков.",
  },
  {
    id: "item-3",
    title: "Топ 3% фанатов матчи",
    image: "/drink3.jpg",
    price: "",
    description: "Поразительно!",
  },
];

const TypingText = ({ text, isVisible }: { text: string; isVisible: boolean }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (isVisible && !started) {
      setStarted(true);
    }
  }, [isVisible]);

  useEffect(() => {
    if (!started) return;
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 22);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <p className="text-sm text-gray-500 mt-2 min-h-[60px] text-left">
      {displayed}
      {started && displayed.length < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-blue-700 ml-0.5 animate-pulse align-middle" />
      )}
    </p>
  );
};

const DrinkitCarousel = () => {
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [visibleItems, setVisibleItems] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => ({ ...prev, [index]: true }));
          }
        },
        { threshold: 0.6 }
      );
      observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <section className="flex h-screen w-full items-center overflow-hidden">
      <Carousel className="w-full">
        <CarouselContent className="ml-0">
        {drinkItems.map((item, index) => (
  <CarouselItem
    key={item.id}
    className="pl-4 basis-[95vw] sm:basis-[100vw]"
  >
    <div
      ref={(el) => { itemRefs.current[index] = el; }}
      className="group flex flex-col h-[80vh] rounded-2xl overflow-hidden shadow-xl bg-white"
    >
      {/* Image */}
      <div className="flex-1 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
        />
      </div>
      {/* Footer */}
      <div className="px-6 py-5 bg-white">
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-gray-900">{item.title}</span>
          <span className="text-lg font-bold text-blue-700">{item.price}</span>
        </div>
        <TypingText text={item.description} isVisible={!!visibleItems[index]} />
      </div>
    </div>
  </CarouselItem>
))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export { DrinkitCarousel };