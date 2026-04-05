"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface GalleryItem {
  id: string;
  title: string;
  url: string;
  image: string;
}

interface Gallery6Props {
  items?: GalleryItem[];
}

const Specials = ({
  items = [{
    id: "item-1",
    title: "3 китика за Какао с мисо-карамелью",
    url: "#",
    image: "/drink1.jpg",
  },
  {
    id: "item-2",
    title: "2 китика за Айс чёрный кофе",
    url: "#",
    image: "/drink2.jpg",
  },
  {
    id: "item-3",
    title: "Купи 3 напитка и получи 4 китика",
    url: "#",
    image: "/drink3.jpg",
  },
  {
    id: "item-4",
    title: "3 Китика за Бамбл кофе",
    url: "#",
    image: "/drink4.jpg",
  },
],
}: Gallery6Props) => {
  const [index, setIndex] = useState(0);
  const lastIndex = Math.max(0, items.length - 1);

  return (
    <section className="relative py-1">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto mb-8 flex justify-end">
      </div>
      <div className="px-6 lg:px-12">
        <Carousel index={index} onIndexChange={setIndex}>
          <CarouselContent className="-mr-4 ml-0">
            {items.map((item) => (
              <CarouselItem key={item.id} className="pl-4 basis-full sm:basis-1/2"              >
                <a href={item.url} className="group flex flex-col justify-between items-start">
                  <div>
                    <div className="flex aspect-[16/7] overflow-clip rounded-xl">
                      <div className="flex-1">
                        <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 line-clamp-3 break-words pt-3 text-base font-medium md:mb-3 md:text-lg">
                    {item.title}
                  </div>
                  <div className="text-sm font-medium">
                    1500 ₸ {">"}
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Specials };