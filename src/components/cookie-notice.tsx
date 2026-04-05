"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function CookieNotice() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-50 -translate-x-1/2 z-50">
      <Card className="w-[350px] shadow-lg rounded-2xl border bg-background text-foreground">
        <CardContent className="p-5">
          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-2">
              <h2 className="font-semibold">Алия, ты хотела заказать...</h2>
            </div>
            <p className=" text-left">
              Большой матча тоник?{" "}
            </p>
            <div className="flex justify-between items-center pt-2">
              <Button 
              onClick={() => setVisible(false)} 
              className={cn(
                "rounded-lg px-4 py-1 text-black",
                "bg-white hover: bg-black/1",
                "text-sm text-black/70"
              )}
              >
                Отклонить
              </Button>
              <Button
                size="sm"
                onClick={() => setVisible(false)}
                className={cn(
                  "rounded-lg px-4 py-1 text-white",
                  "bg-blue-700 hover:bg-blue-500"
                )}
              >
                Заказать
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
