"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "How do I search for properties on Estatein?",
    answer:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
  {
    question: "What documents do I need to sell my property through Estatein?",
    answer:
      "Find out about the necessary documentation for listing your property with us.",
  },
  {
    question: "How can I contact an Estatein agent?",
    answer:
      "Discover the different ways you can get in touch with our experienced agents.",
  },
  {
    question: "Is Estatein available internationally?",
    answer:
      "Currently, Estatein operates within selected regions, but we’re expanding rapidly.",
  },
  {
    question: "Are there any hidden fees in Estatein's services?",
    answer:
      "We are transparent about all costs involved. No hidden fees—everything is outlined clearly.",
  },
  {
    question: "Can I schedule property viewings online?",
    answer:
      "Yes, you can easily book appointments through our platform at your convenience.",
  },
];

export default function Faq() {
  const itemsPerPage = 3;
  const [page, setPage] = useState(0);
  const [viewAll, setViewAll] = useState(false);

  const totalPages = Math.ceil(faqs.length / itemsPerPage);
  const startIndex = page * itemsPerPage;
  const visibleFaqs = viewAll ? faqs : faqs.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const toggleViewAll = () => {
    setViewAll(!viewAll);
    setPage(0); // сброс на первую страницу при выходе из режима "всё"
  };

  return (
    <section className="bg-black text-white px-4 md:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 mt-2 max-w-2xl">
              Find answers to common questions about Estatein's services,
              property listings, and the real estate process. We're here to
              provide clarity and assist you every step of the way.
            </p>
          </div>
          <Button
            onClick={toggleViewAll}
            variant="outline"
            className="bg-white text-black rounded-full px-6 py-2"
          >
            {viewAll ? "Collapse" : "View All FAQ’s"}
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {visibleFaqs.map((faq, index) => (
            <Card
              key={index}
              className="bg-[#1a1a1a] text-white border-none h-full"
            >
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-400 mb-6">{faq.answer}</p>
                </div>
                <Button
                  variant="outline"
                  className="rounded-md bg-[#1a1a1a] border border-gray-700 text-white w-fit"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {!viewAll && (
          <div className="flex justify-between items-center mt-8 px-4">
            <p className="text-gray-400">
              {`${(page + 1).toString().padStart(2, "0")} of ${totalPages
                .toString()
                .padStart(2, "0")}`}
            </p>
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
