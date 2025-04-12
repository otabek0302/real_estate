"use client";

import Image from "next/image";
import { ImageBackground, ImagePerson1, ImagePerson2, ImagePerson3, ImagePerson4 } from "../../../assets";

const All = () => {
  return (
    <main className="bg-black text-white font-sans">
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-16">
        {/* Our Journey */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight">
              Our Journey
            </h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl">
              Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we’ve expanded our reach, forged valuable partnerships, and gained the trust of countless clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              {[
                { count: "200+", label: "Happy Customers" },
                { count: "10k+", label: "Properties For Clients" },
                { count: "16+", label: "Years of Experience" },
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-900 p-6 rounded-md text-center flex-1">
                  <p className="text-2xl font-bold">{item.count}</p>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:flex-1 lg:max-w-1/2 relative">
          <Image src={ImageBackground} alt="House in hand" className="w-full h-full object-cover" />
        </div>
        </div>

        {/* Our Values */}
        <div className="mt-24 space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold">Our Values</h2>
          <p className="text-gray-400">Our story is one of continuous growth and evolution...</p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "★ Trust", desc: "Trust is the cornerstone of every successful real estate transaction." },
              { title: "★ Excellence", desc: "We set the bar high for ourselves..." },
              { title: "★ Client-Centric", desc: "Your dreams and needs are at the center of our universe..." },
              { title: "★ Our Commitment", desc: "We are dedicated to providing you with the highest level of service..." },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-900 p-6 rounded-md">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-400">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Achievements */}
        <div className="mt-24 space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold">Our Achievements</h2>
          <p className="text-gray-400">Our story is one of continuous growth and evolution...</p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "3+ Years of Excellence", desc: "With over 3 years in the industry..." },
              { title: "Happy Clients", desc: "Our greatest achievement is the satisfaction of our clients..." },
              { title: "Industry Recognition", desc: "We’ve earned the respect of our peers..." },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-900 p-6 rounded-md">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold">Navigating the Estatein Experience</h2>
          <p className="text-gray-400 mt-2">At Estatein, we’ve designed a straightforward process...</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              { step: "01", title: "Discover a World of Possibilities", desc: "Explore our curated property listings..." },
              { step: "02", title: "Narrowing Down Your Choices", desc: "Save properties to your account..." },
              { step: "03", title: "Personalized Guidance", desc: "Reach out to our expert team..." },
              { step: "04", title: "See It for Yourself", desc: "Schedule property viewings..." },
              { step: "05", title: "Making Informed Decisions", desc: "We assist with inspections, legal checks..." },
              { step: "06", title: "Getting the Best Deal", desc: "We negotiate to secure your property..." },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-900 p-6 rounded-md">
                <p className="text-sm text-purple-400 font-semibold">Step {item.step}</p>
                <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold">Meet the Estatein Team</h2>
          <p className="text-gray-400 mt-2">Get to know the people behind our mission...</p>
        
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        
            <div className="bg-gray-900 p-4 rounded-md text-center">
              <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                <Image
                  src={ImagePerson1}
                  alt="Max Mitchell"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Max Mitchell</h3>
              <p className="text-gray-400 text-sm">Founder</p>
              <div className="mt-2 flex justify-center gap-2">
                <button className="bg-purple-600 px-3 py-1 rounded-full text-sm">Say Hello 👋</button>
                <button className="bg-blue-600 px-3 py-1 rounded-full text-sm">✈️</button>
              </div>
            </div>

            <div className="bg-gray-900 p-4 rounded-md text-center">
              <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                <Image
                  src={ImagePerson2}
                  alt="Sarah Johnson"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Sarah Johnson</h3>
              <p className="text-gray-400 text-sm">Chief Real Estate Officer</p>
              <div className="mt-2 flex justify-center gap-2">
                <button className="bg-purple-600 px-3 py-1 rounded-full text-sm">Say Hello 👋</button>
                <button className="bg-blue-600 px-3 py-1 rounded-full text-sm">✈️</button>
              </div>
            </div>
        
            <div className="bg-gray-900 p-4 rounded-md text-center">
              <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                <Image
                  src={ImagePerson3}
                  alt="David Brown"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">David Brown</h3>
              <p className="text-gray-400 text-sm">Head of Property Management</p>
              <div className="mt-2 flex justify-center gap-2">
                <button className="bg-purple-600 px-3 py-1 rounded-full text-sm">Say Hello 👋</button>
                <button className="bg-blue-600 px-3 py-1 rounded-full text-sm">✈️</button>
              </div>
            </div>
        
            <div className="bg-gray-900 p-4 rounded-md text-center">
              <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                <Image
                  src={ImagePerson4}
                  alt="Michael Turner"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Michael Turner</h3>
              <p className="text-gray-400 text-sm">Legal Counsel</p>
              <div className="mt-2 flex justify-center gap-2">
                <button className="bg-purple-600 px-3 py-1 rounded-full text-sm">Say Hello 👋</button>
                <button className="bg-blue-600 px-3 py-1 rounded-full text-sm">✈️</button>
              </div>
            </div>

  </div>
</div>

        {/* Clients */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold">Our Valued Clients</h2>
          <p className="text-gray-400 mt-2">We are honored to work with clients from diverse industries...</p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {[
              {
                since: "Since 2019",
                company: "ABC Corporation",
                domain: "Commercial Real Estate",
                category: "Luxury Home Development",
                quote: "Estatein’s expertise in finding the perfect office space...",
              },
              {
                since: "Since 2018",
                company: "GreenTech Enterprises",
                domain: "Commercial Real Estate",
                category: "Retail Space",
                quote: "Estatein’s ability to identify prime retail locations...",
              },
            ].map((client, idx) => (
              <div key={idx} className="bg-gray-900 p-6 rounded-md">
                <p className="text-gray-500 text-sm">{client.since}</p>
                <h3 className="text-lg font-semibold mt-1">{client.company}</h3>
                <div className="text-right">
                  <button className="bg-gray-800 px-3 py-1 text-sm rounded-full">Visit Website</button>
                </div>
                <div className="mt-2 text-sm text-gray-400">
                  <p>🏢 Domain: {client.domain}</p>
                  <p>✨ Category: {client.category}</p>
                  <div className="bg-gray-800 p-3 mt-3 rounded-md">
                    <p>
                      <strong>What They Said 🔐</strong>
                      <br />
                      {client.quote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default All;


