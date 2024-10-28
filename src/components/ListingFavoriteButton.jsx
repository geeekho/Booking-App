import { Heart } from "lucide-react";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { cn } from "@/lib/utils/cn";
import {
  addFavoriteListing,
  removeFavoriteListing,
} from "@/state/slice/listingsSlice";

import { Button } from "./ui";

function ListingFavoriteButton({ className, id }) {
  const favoriteListingIds = useSelector(
    (state) => state.listings.favoriteListingIds,
  );
  const dispatch = useDispatch();

  const isFavorite = useMemo(
    () => favoriteListingIds.includes(id),
    [favoriteListingIds, id],
  );

  return (
    <Button
      className={className}
      variant="outline"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        if (isFavorite) {
          dispatch(removeFavoriteListing(id));
        } else {
          dispatch(addFavoriteListing(id));
        }
      }}
    >
      <Heart
        className={cn("h-4 w-4", { "fill-primary text-primary": isFavorite })}
      />
    </Button>
  );
}

export default ListingFavoriteButton;
