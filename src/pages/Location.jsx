import { MapWithOverlayCard } from '@/components/MapWithOverlayCard'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Location() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen w-full relative bg-blue-800">
            {/* Yellow glow background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px,rgba(255, 255, 255, 0.72) 1px, transparent 0)`,
                    backgroundSize: "20px 20px",
                }}
            />

            {/* Content */}
            <div className="relative z-10">
                <MapWithOverlayCard />

                {/* Back button */}
                <Button
                    variant="secondary"
                    size="icon-sm"
                    className="absolute top-4 left-4 z-50 rounded-full shadow border"
                    onClick={() => navigate(-1)}
                >
                    <ChevronLeft />
                </Button>
            </div>
        </div>
    )
}