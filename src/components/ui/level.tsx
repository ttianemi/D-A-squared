import * as React from "react"
import { Progress as ProgressPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"
import { Button} from "@/components/ui/button"

function Level({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  const isComplete = (value ?? 0) >= 100

  return (
    <div className="w-full space-y-2">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xl font-medium text-black">
            {isComplete ? "Бесплатный напиток доступен" : "Белый уровень ⚪"}
          </p>
          <p className="text-md text-black/60">
            {isComplete ? ":)" : "До следующего уровня..."}
          </p>
        </div>
        <span className="text-sm font-medium text-black">{value}%</span>
      </div>
      <ProgressPrimitive.Root
        data-slot="progress"
        className={cn(
          "relative flex h-3 w-full items-center overflow-x-hidden rounded-full bg-muted",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className="size-full flex-1 bg-blue-700 transition-all"
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
    </div>
  )
}

export { Level }