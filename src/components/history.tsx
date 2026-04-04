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

const History = ({
  items = [
    { id: "item-1", title: "Build Modern UIs", url: "#", image: "/drink1.jpg" },
    { id: "item-2", title: "Computer Vision Technology", url: "#", image: "/drink2.jpg" },
    { id: "item-3", title: "Machine Learning Automation", url: "#", image: "/drink3.jpg" },
    { id: "item-4", title: "Predictive Analytics", url: "#", image: "/drink4.jpg" },
    { id: "item-5", title: "Neural Network Architecture", url: "#", image: "/drink5.jpg" },
  ],
}: Gallery6Props) => {
  return (
    <section className="relative py-16">
      <div className="px-6 lg:px-12">
        <Carousel>
          <CarouselContent className="-mr-4 ml-0">
            {items.map((item) => (
              <CarouselItem key={item.id} className="pl-4 basis-full sm:basis-[calc(100%/5)]">
                <a href={item.url} className="group flex flex-col justify-between items-stretch w-full">
                  <div>
                  <div className="flex h-48 overflow-clip rounded-xl">
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

export { History };