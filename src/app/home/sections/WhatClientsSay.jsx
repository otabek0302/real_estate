"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { motion, useInView } from "framer-motion";

import avatar1 from "@/app/home/image/avatar1.png";
import avatar2 from "@/app/home/image/avatar2.png";
import avatar3 from "@/app/home/image/avatar3.png";
import avatar4 from "@/app/home/image/avatar4.jpg";
import avatar5 from "@/app/home/image/avatar5.jpg";
import avatar6 from "@/app/home/image/avatar6.jpg";

const testimonials = [
  {
    title: "Exceptional Service!",
    content:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    name: "Wade Warren",
    location: "USA, California",
    image: avatar1,
  },
  {
    title: "Efficient and Reliable",
    content:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    name: "Emelie Thomson",
    location: "USA, Florida",
    image: avatar2,
  },
  {
    title: "Trusted Advisors",
    content:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    name: "John Mans",
    location: "USA, Nevada",
    image: avatar3,
  },
  {
    title: "Amazing Support",
    content:
      "Estatein was always there for us. Any questions we had were answered immediately. A truly reliable team!",
    name: "Sarah Lin",
    location: "USA, Texas",
    image: avatar4,
  },
  {
    title: "Professional and Kind",
    content:
      "From the start, Estatein treated us with respect and made sure we were informed every step of the way.",
    name: "Mark Bello",
    location: "USA, Washington",
    image: avatar5,
  },
  {
    title: "Smooth Process",
    content:
      "We sold our house in less than a month thanks to their strategic approach. Truly impressive.",
    name: "Anna Gomez",
    location: "USA, Arizona",
    image: avatar6,
  },
];

export default function WhatClientsSay() {
  const itemsPerPage = 3;
  const [page, setPage] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const startIndex = page * itemsPerPage;

  const visibleTestimonials = showAll
    ? testimonials
    : testimonials.slice(startIndex, startIndex + itemsPerPage);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    margin: "-100px 0px",
  });

  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (isInView && !hasBeenInView) {
      setHasBeenInView(true);
    }
  }, [isInView, hasBeenInView]);

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white px-4 md:px-12 py-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">What Our Clients Say</h2>
            <p className="text-gray-400 mt-2 max-w-xl">
              Read the success stories and heartfelt testimonials from our valued
              clients. Discover why they chose Estatein for their real estate needs.
            </p>
          </div>
          <Button
            variant="outline"
            className="bg-white text-black rounded-full px-6 py-2"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Collapse" : "View All Testimonials"}
          </Button>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {visibleTestimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={hasBeenInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card className="bg-[#1a1a1a] text-white border-none">
                <CardContent className="p-6">
                  <div className="flex gap-2 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="fill-yellow-500 text-yellow-500 w-5 h-5"
                      />
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t.title}</h3>
                  <p className="text-gray-300 mb-4">{t.content}</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={t.image.src}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{t.name}</p>
                      <p className="text-sm text-gray-400">{t.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {!showAll && (
          <div className="flex justify-between items-center mt-8 px-4">
            <p className="text-gray-400">{`${page + 1} of ${totalPages}`}</p>
            <div className="flex gap-4">
              <Button
                onClick={handlePrev}
                disabled={page === 0}
                variant="outline"
                size="icon"
                className="rounded-full bg-[#1a1a1a] text-white disabled:opacity-50"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <Button
                onClick={handleNext}
                disabled={page >= totalPages - 1}
                variant="outline"
                size="icon"
                className="rounded-full bg-white text-black disabled:opacity-50"
              >
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
