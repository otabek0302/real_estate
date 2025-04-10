"use client"

import { useState } from "react"
import { Phone, Mail, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Happen() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    propertyType: "",
    bathrooms: "",
    bedrooms: "",
    budget: "",
    contactMethod: "phone",
    message: "",
    termsAccepted: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.location) newErrors.location = "Please select a location"
    if (!formData.propertyType) newErrors.propertyType = "Please select a property type"
    if (!formData.bathrooms) newErrors.bathrooms = "Please select number of bathrooms"
    if (!formData.bedrooms) newErrors.bedrooms = "Please select number of bedrooms"
    if (!formData.budget) newErrors.budget = "Please select your budget"
    if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept the terms and privacy policy"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)
      // Simulate API call
      setTimeout(() => {
        console.log(formData)
        setIsSubmitting(false)
        setIsSubmitted(true)
      }, 1500)
    }
  }

  const locations = ["New York", "Los Angeles", "Chicago", "Miami", "San Francisco", "Boston", "Seattle"]
  const propertyTypes = ["Apartment", "House", "Condo", "Townhouse", "Villa", "Penthouse", "Land"]
  const bathroomOptions = ["1", "2", "3", "4", "5+"]
  const bedroomOptions = ["1", "2", "3", "4", "5+"]
  const budgetOptions = [
    "Under $100,000",
    "$100,000 - $250,000",
    "$250,000 - $500,000",
    "$500,000 - $1,000,000",
    "Over $1,000,000",
  ]

  return (
    <div className="w-full bg-black text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header section with star icon */}
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-70"
            >
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="ml-1 h-0.5 w-5 bg-gray-700"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Let's Make it Happen</h2>
          <p className="text-gray-400 max-w-3xl">
            Ready to take the first step toward your dream property? Fill out the form below, and our real estate
            wizards will work their magic to find your perfect match. Don't wait, let's embark on this exciting journey
            together.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600/20 mb-4">
              <Check className="h-8 w-8 text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
            <p className="text-gray-400 max-w-lg mx-auto">
              Your message has been sent successfully. One of our real estate experts will be in touch with you shortly.
            </p>
            <Button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white" onClick={() => setIsSubmitted(false)}>
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-8">
              {/* First row: Name and Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Enter First Name"
                    className={`bg-gray-900 border-gray-800 text-white ${errors.firstName ? "border-red-500" : ""}`}
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Enter Last Name"
                    className={`bg-gray-900 border-gray-800 text-white ${errors.lastName ? "border-red-500" : ""}`}
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your Email"
                    className={`bg-gray-900 border-gray-800 text-white ${errors.email ? "border-red-500" : ""}`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Enter Phone Number"
                    className={`bg-gray-900 border-gray-800 text-white ${errors.phone ? "border-red-500" : ""}`}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Second row: Property Preferences */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="location" className="block text-sm font-medium">
                    Preferred Location
                  </label>
                  <div className={`relative ${errors.location ? "border-red-500" : ""}`}>
                    <select
                      id="location"
                      name="location"
                      className="w-full h-10 px-3 bg-gray-900 border border-gray-800 rounded-md text-white appearance-none"
                      value={formData.location}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select Location
                      </option>
                      {locations.map((location) => (
                        <option key={location} value={location}>
                          {location}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="propertyType" className="block text-sm font-medium">
                    Property Type
                  </label>
                  <div className={`relative ${errors.propertyType ? "border-red-500" : ""}`}>
                    <select
                      id="propertyType"
                      name="propertyType"
                      className="w-full h-10 px-3 bg-gray-900 border border-gray-800 rounded-md text-white appearance-none"
                      value={formData.propertyType}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select Property Type
                      </option>
                      {propertyTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {errors.propertyType && <p className="text-red-500 text-xs mt-1">{errors.propertyType}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="bathrooms" className="block text-sm font-medium">
                    No. of Bathrooms
                  </label>
                  <div className={`relative ${errors.bathrooms ? "border-red-500" : ""}`}>
                    <select
                      id="bathrooms"
                      name="bathrooms"
                      className="w-full h-10 px-3 bg-gray-900 border border-gray-800 rounded-md text-white appearance-none"
                      value={formData.bathrooms}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select no. of Bathrooms
                      </option>
                      {bathroomOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {errors.bathrooms && <p className="text-red-500 text-xs mt-1">{errors.bathrooms}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="bedrooms" className="block text-sm font-medium">
                    No. of Bedrooms
                  </label>
                  <div className={`relative ${errors.bedrooms ? "border-red-500" : ""}`}>
                    <select
                      id="bedrooms"
                      name="bedrooms"
                      className="w-full h-10 px-3 bg-gray-900 border border-gray-800 rounded-md text-white appearance-none"
                      value={formData.bedrooms}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select no. of Bedrooms
                      </option>
                      {bedroomOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {errors.bedrooms && <p className="text-red-500 text-xs mt-1">{errors.bedrooms}</p>}
                </div>
              </div>

              {/* Third row: Budget and Contact Method */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="budget" className="block text-sm font-medium">
                    Budget
                  </label>
                  <div className={`relative ${errors.budget ? "border-red-500" : ""}`}>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full h-10 px-3 bg-gray-900 border border-gray-800 rounded-md text-white appearance-none"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select Budget
                      </option>
                      {budgetOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget}</p>}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">Preferred Contact Method</label>
                  <div className="flex gap-4">
                    <div
                      className={`flex items-center space-x-2 bg-gray-900 border border-gray-800 rounded-md px-4 py-2.5 flex-1 cursor-pointer ${formData.contactMethod === "phone" ? "border-purple-500" : ""}`}
                      onClick={() => setFormData({ ...formData, contactMethod: "phone" })}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border ${formData.contactMethod === "phone" ? "border-purple-500 bg-purple-500" : "border-gray-400"}`}
                      ></div>
                      <Phone className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="text-sm">Enter Your Number</span>
                    </div>
                    <div
                      className={`flex items-center space-x-2 bg-gray-900 border border-gray-800 rounded-md px-4 py-2.5 flex-1 cursor-pointer ${formData.contactMethod === "email" ? "border-purple-500" : ""}`}
                      onClick={() => setFormData({ ...formData, contactMethod: "email" })}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border ${formData.contactMethod === "email" ? "border-purple-500 bg-purple-500" : "border-gray-400"}`}
                      ></div>
                      <Mail className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="text-sm">Enter Your Email</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message textarea */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Enter your Message here..."
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded-md text-white"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Terms and conditions */}
              <div className="flex justify-between items-start gap-6">
                <div className="flex items-start space-x-3">
                  <div className="flex h-5 items-center">
                    <input
                      id="termsAccepted"
                      name="termsAccepted"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-700 bg-gray-900 text-purple-600 focus:ring-purple-600"
                      checked={formData.termsAccepted}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-1 leading-none">
                    <label htmlFor="termsAccepted" className="text-sm font-normal">
                      I agree with{" "}
                      <a href="#" className="text-purple-500 hover:underline">
                        Terms of Use
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-purple-500 hover:underline">
                        Privacy Policy
                      </a>
                    </label>
                    {errors.termsAccepted && <p className="text-red-500 text-xs">{errors.termsAccepted}</p>}
                  </div>
                </div>
                <Button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Your Message"}
                </Button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
