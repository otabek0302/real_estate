// pages/villa.js
import { Container } from "@/components/ui/container"; // Assuming you've configured Shadcn UI components
import { Button } from "@/components/ui/button";
import Image from "next/image";

function  PropertyDetailsPage() {
  return (
    <Container className="py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-semibold">Seaside Serenity Villa</h1>
          <p className="text-sm text-gray-500">Malibu, California</p>
        </div>
        <div className="text-xl font-semibold text-primary">$1,250,000</div>
      </div>

      {/* Image Gallery (Top) */}
      <div className="flex space-x-2 overflow-x-auto mb-4">
        {/* Replace with your thumbnail images */}
        <div className="w-24 h-16 rounded-md overflow-hidden shadow-sm">
          <Image src="/path/to/thumbnail1.jpg" alt="Thumbnail 1" width={96} height={64} objectFit="cover" />
        </div>
        <div className="w-24 h-16 rounded-md overflow-hidden shadow-sm">
          <Image src="/path/to/thumbnail2.jpg" alt="Thumbnail 2" width={96} height={64} objectFit="cover" />
        </div>
        {/* ... more thumbnails */}
      </div>

      {/* Main Image Area */}
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-md overflow-hidden shadow-lg">
          <Image src="/path/to/exterior.jpg" alt="Villa Exterior" width={800} height={600} objectFit="cover" />
        </div>
        <div className="rounded-md overflow-hidden shadow-lg">
          <Image src="/path/to/interior.jpg" alt="Villa Interior" width={800} height={600} objectFit="cover" />
        </div>
      </div>

      {/* Navigation (Bottom) */}
      <div className="flex justify-center mt-4 space-x-2">
        <Button variant="outline">←</Button>
        <Button variant="outline">→</Button>
      </div>
    </Container>
  );
}export default PropertyDetailsPage;