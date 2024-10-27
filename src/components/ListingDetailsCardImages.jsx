import React, { useState } from "react";

import { getImageUrl } from "@/lib/utils/images";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui";

function ListingDetailsCardImages({ listing }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  return (
    <>
      <img
        className="mb-4 h-[500px] w-full rounded-md object-cover"
        src={getImageUrl(listing.images[currentImageIndex])}
        alt={listing.name}
      />
      <Carousel className="mx-auto mb-4 w-[90%]">
        <CarouselContent>
          {listing.images.map((image, index) => (
            <CarouselItem
              key={image}
              className="basis-1/3 cursor-pointer"
              onClick={() => setCurrentImageIndex(index)}
              isSelected={index === currentImageIndex}
            >
              <img
                className="h-52 w-full object-cover shadow-sm"
                src={getImageUrl(image)}
                alt={listing.name}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

export default ListingDetailsCardImages;
