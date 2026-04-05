"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { lazy, Suspense } from "react";
const MapWithMarkers = lazy(() => import("../components/ui/mapwithmarkers"));
import { Progress } from './ui/progress'
import { LogoPin } from "@/components/LogoPin"
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadowUrl from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl,
  shadowUrl: iconShadowUrl,
  iconRetinaUrl: iconUrl,
});


export function MapWithOverlayCard() {
  const [cardOpen, setCardOpen] = useState(true)
  const [flyTarget, setFlyTarget] = useState<[number, number] | null>(null)

  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-8">
      {/* Container with padding from screen edges */}
      <div className="relative w-full max-w-60vh h-[90vh] rounded-3xl overflow-hidden">
      <Suspense fallback={<div className="size-full min-h-96 rounded-md bg-muted animate-pulse"/>}>
  <MapWithMarkers flyTarget={flyTarget} />
</Suspense>

        <div
          className="absolute bottom-0 left-0 right-0 z-50 transition-transform duration-300"
          style={{ transform: cardOpen ? "translateY(0)" : "translateY(calc(100% - 48px))" }}
        >
          {/* Toggle handle */}
          <div className="flex justify-center pb-1">
            <Button
              variant="secondary"
              size="sm"
              className="rounded-full shadow"
              onClick={() => setCardOpen(!cardOpen)}
            >
              {cardOpen ? <ChevronDown /> : <ChevronUp />}
            </Button>
          </div>

          <Card className="rounded-t-2xl rounded-b-none shadow-xl">
            <CardContent className="p-4 space-y-4">
              <Button className="w-full" onClick={() => setFlyTarget([51.099956, 71.417690])}>
                Найти ближайший Дринкит
              </Button>

              {/* Row 1 */}
              <div className="space-y-0.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">3 локации за 1 месяц</span>
                  <div className="flex items-center gap-1">
                    <span className="font-bold">+5</span>
                    <LogoPin width={16} height={16} />
                  </div>
                </div>
                <Progress value={100} className="h-5 w-full -mt-8" />
              </div>

              {/* Row 2 */}
              <div className="space-y-0.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">5 локаций за 1 месяц</span>
                  <div className="flex items-center gap-1">
                    <span className="font-bold">+5</span>
                    <LogoPin width={16} height={16} />
                  </div>
                </div>
                <Progress value={67} className="h-5 w-full -mt-8" />
              </div>

              {/* Row 3 */}
              <div className="space-y-0.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Все локации</span>
                  <div className="flex items-center gap-1">
                    <span className="font-bold">Синий уровень</span>
                    <LogoPin width={16} height={16} />
                  </div>
                </div>
                <Progress value={45} className="h-5 w-full -mt-8" />
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}