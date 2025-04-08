import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BedDouble, Bath, Landmark } from "lucide-react"
import villa1 from "@/app/home/image/villa1.png"
import apartment1 from "@/app/home/image/apartment1.png"
import cottage1 from "@/app/home/image/cottage1.png"


const properties = [
  {
    image: villa1,
    title: "Seaside Serenity Villa",
    description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
    features: ["4-Bedroom", "3-Bathroom", "Villa"],
    price: "$550,000"
  },
  {
    image: apartment1,
    title: "Metropolitan Haven",
    description: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...",
    features: ["2-Bedroom", "2-Bathroom", "Villa"],
    price: "$550,000"
  },
  {
    image: cottage1,
    title: "Rustic Retreat Cottage",
    description: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
    features: ["3-Bedroom", "3-Bathroom", "Villa"],
    price: "$550,000"
  }
]

export default function FeaturedProperties() {
  return (
    <section className="bg-black text-white px-4 md:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center flex-wrap gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Properties</h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mt-2">
              Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.
            </p>
          </div>
          <Button variant="secondary" className="rounded-md text-white bg-[#1e1e1e] border border-white hover:bg-white hover:text-black transition">
            View All Properties
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property, idx) => (
            <Card key={idx} className="bg-[#1a1a1a] text-white rounded-xl overflow-hidden hover:border-[#7744FF]">
              <div className="w-full h-60 relative">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">{property.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {property.description} <span className="underline">Read More</span>
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {property.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 text-sm px-3 py-1 bg-[#0e0e0e] rounded-full border border-[#333] hover:border-[#7744FF]"
                    >
                      {feature.includes("Bedroom") && <BedDouble size={14} />}
                      {feature.includes("Bathroom") && <Bath size={14} />}
                      {feature === "Villa" && <Landmark size={14} />}
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <p className="text-lg font-bold">Price<br />{property.price}</p>
                  <Button className="bg-[#7744FF] hover:bg-[#6633ee] text-white rounded-md px-6">
                    View Property Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-between text-muted-foreground text-sm mt-10 px-2">
          <span>01 of 60</span>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="rounded-full border border-white text-white">
              <ArrowRight className="rotate-180" size={16} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full border border-white text-white">
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
