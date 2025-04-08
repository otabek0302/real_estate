import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

import avatar1 from "@/app/home/image/avatar1.png";
import avatar2 from "@/app/home/image/avatar2.png";
import avatar3 from "@/app/home/image/avatar3.png";

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
];

export default function WhatClientsSay() {
  return (
    <section className="bg-black text-white px-4 md:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">What Our Clients Say</h2>
            <p className="text-gray-400 mt-2 max-w-xl">
              Read the success stories and heartfelt testimonials from our valued
              clients. Discover why they chose Estatein for their real estate
              needs.
            </p>
          </div>
          <Button variant="outline" className="bg-white text-black rounded-full px-6 py-2">
            View All Testimonials
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-[#1a1a1a] text-white border-none">
              <CardContent className="p-6">
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-yellow-500 text-yellow-500 w-5 h-5" />
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
          ))}
        </div>

        <div className="flex justify-between items-center mt-8 px-4">
          <p className="text-gray-400">01 of 10</p>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="rounded-full bg-[#1a1a1a] text-white">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-white text-black">
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
