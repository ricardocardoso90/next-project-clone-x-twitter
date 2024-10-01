"use client";

import { TrendingItem } from "./trending-item";
import { TrendingItemSkeleton } from "./trending-item-skeleton";

export function TrendingArea() {
  return (
    <div className="bg-gray-700 rounded-3xl">
      <h2 className="text-xl p-6">O que está acontecendo</h2>

      <div className="flex flex-col gap-4 p-6 pt-0">
        <TrendingItem label="#jogos" count={189} />
        <TrendingItem label="#comida" count={55} />
        <TrendingItemSkeleton />
        <TrendingItemSkeleton />
      </div>
    </div>
  )
};