import { properties } from "@/lib/data";
import Image from "next/image";
import { BadgeDollarSign, BedDouble, Bath, Landmark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default async function PropertyDetails({ params }) {
  // Убедись, что компонент async
  const property = properties.find((p) => p.id === params.id);

  if (!property) {
    return <div className="text-white p-10">Property not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center p-6 md:p-10">
      <Card className="w-full max-w-2xl bg-[#121212] border border-[#2c2c2c] rounded-2xl shadow-lg">
        <div className="relative w-full h-80 md:h-[450px] rounded-t-2xl overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
          />
        </div>

        <CardContent className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
            <p className="text-muted-foreground text-sm md:text-base">
              {property.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {property.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm px-4 py-2 bg-[#1e1e1e] rounded-full border border-[#333] text-white"
              >
                {feature.includes("Bedroom") && <BedDouble size={16} />}
                {feature.includes("Bathroom") && <Bath size={16} />}
                {(feature === "Villa" ||
                  feature === "Apartment" ||
                  feature === "Cottage") && <Landmark size={16} />}
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex items-center gap-3 text-lg font-semibold text-white">
            <BadgeDollarSign size={20} />
            <span>{property.price}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
