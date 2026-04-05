"use client";

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

const Gallery6 = ({
  items = [
    { id: "item-1", title: "Айс американо", url: "#", image: "/drink1.jpg" },
    { id: "item-2", title: "Кофе-тоник ", url: "#", image: "/drink2.jpg" },
    { id: "item-3", title: "Какао с сырной пенкой ", url: "#", image: "/drink3.jpg" },
    { id: "item-4", title: "Холодный Бамбл кофе", url: "#", image: "/drink4.jpg" },
    { id: "item-5", title: "Бамбл кофе", url: "#", image: "/drink5.jpg" },
  ],
}: Gallery6Props) => {
  return (
    <section className="relative py-16">
      <div className="px-6 lg:px-12">
        <Carousel>
          <CarouselContent className="-mr-4 ml-0">
            {items.map((item) => (
              <CarouselItem key={item.id} className="pl-4 md:max-w-[360px]">
                <a href={item.url} className="group flex flex-col justify-between items-start">
                  <div>
                    <div className="flex aspect-[3/2] overflow-clip rounded-xl">
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

export { Gallery6 };