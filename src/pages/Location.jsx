import { MapWithOverlayCard } from '@/components/MapWithOverlayCard'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Location() {
    const navigate = useNavigate()

    return (
        <div className="relative">
            <MapWithOverlayCard />

            {/* Back button overlaid on top of the map */}
            <Button
                variant="secondary"
                size="icon-sm"
                className="absolute top-4 left-4 z-50 rounded-full shadow border"
                onClick={() => navigate(-1)}
            >
                <ChevronLeft />
            </Button>
        </div>
    )
}