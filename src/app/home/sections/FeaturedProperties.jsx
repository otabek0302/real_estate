"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { properties } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BedDouble, Bath, Landmark } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedProperties() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 3;
  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <section id="featured-properties" className="bg-black text-white px-4 md:px-8 py-16">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center flex-wrap gap-4 mb-8">
          <div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Featured Properties
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-sm md:text-base max-w-xl mt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Explore our handpicked selection of featured properties...
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Button
              variant="secondary"
              className="rounded-md text-white bg-[#1e1e1e] border border-white"
              onClick={() => router.push("/properties")}
            >
              View All Properties
            </Button>
          </motion.div>
        </div>

        {/* PROPERTY CARDS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentProperties.map((property, i) => (
            <Card
              key={property.id}
              className="bg-[#1a1a1a] text-white rounded-xl overflow-hidden hover:border-[#7744FF] transition-all duration-300 flex flex-col h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col h-full"
              >
                <div className="w-full h-60 relative cursor-pointer">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={i === 0}
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg font-semibold">{property.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {property.description}
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
                        {(feature === "Villa" || feature === "Apartment" || feature === "Cottage") && (
                          <Landmark size={14} />
                        )}
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <p className="text-lg font-bold">
                      Price<br />{property.price}
                    </p>
                    <Button
                      className="bg-[#7744FF] hover:bg-[#6633ee] text-white rounded-md px-6"
                      onClick={() => router.push(`/home/property-details/${property.id}`)}
                    >
                      View Property Details
                    </Button>
                  </div>
                </CardContent>
              </motion.div>
            </Card>
          ))}
        </div>

        {/* PAGINATION */}
        <motion.div
          className="flex items-center justify-between text-muted-foreground text-sm mt-10 px-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span>{`0${currentPage} of 0${totalPages}`}</span>
          <div className="flex gap-2">
            <Button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="rounded-full border border-white text-white"
            >
              <ArrowRight className="rotate-180" size={16} />
            </Button>
            <Button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="rounded-full border border-white text-white"
            >
              <ArrowRight size={16} />
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
