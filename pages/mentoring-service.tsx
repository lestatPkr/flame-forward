import React from 'react' // Add this import statement
import { Button } from "@/components/ui/button"
/* import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
 */import { Check } from "lucide-react"
import Link from 'next/link';
/* import { useState } from "react"
 */
export default function Component() {
/*   const [isMenuOpen, setIsMenuOpen] = useState(false)
 */
  const tiers = [
    {
      name: "Grow Together",
      price: "Free",
      duration: "month",
      features: [
        "Monthly one-on-one check-ins (45 minutes)",
        "Personalized guidance on building core software engineering skills",
        "Access to shared learning resources",
        "Accountability support and growth tracking"
      ],
      description: "For those who can't afford a paid service but are committed to doing their best to grow.",
      focus: "Growth mindset, skill-building, and overcoming obstacles to advance in your career."
    },
    {
      name: "Engineer Forward",
      price: 80,
      duration: "month",
      features: [
        "Bi-weekly one-on-one sessions (45 minutes)",
        "Tailored career development plans",
        "Detailed feedback on technical projects and challenges",
        "Support for transitioning into higher roles",
        "Access to a curated library of advanced technical resources"
      ],
      description: "For software engineers and tech leads looking to deepen their technical expertise and advance in their career.",
      focus: "Technical growth, leadership skills development, and career progression."
    },
    {
      name: "Lead with Impact",
      price: 130,
      duration: "month",
      features: [
        "Weekly one-on-one sessions (60 minutes)",
        "Strategic mentorship on leadership and team dynamics",
        "Executive-level guidance on decision-making and scaling teams",
        "Support in navigating complex business challenges",
        "Priority access to exclusive thought leadership resources"
      ],
      description: "For those in leadership roles focusing on strategy, innovation, and team dynamics.",
      focus: "High-level leadership, strategy, innovation, and long-term impact."
    },
  ]

/*   const allFeatures = [
    "One-on-one sessions",
    "Personalized guidance",
    "Access to learning resources",
    "Accountability support",
    "Career development plans",
    "Technical project feedback",
    "Leadership skills development",
    "Strategic mentorship",
    "Executive-level guidance",
    "Exclusive thought leadership resources"
  ] */

  return (
    
    <div className="bg- container mx-auto px-4">


    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
      {tiers.map((tier) => (
        <div key={tier.name} className=" rounded-lg shadow-md p-8 flex flex-col ">
          <h2 className="text-2xl font-bold mb-4 ">{tier.name}</h2>
          <p className=" mb-4 ">{tier.description}</p>
          <div className="text-3xl font-bold mb-4 ">
            {tier.price === "Free" ? "Free" : `€${tier.price}`}
            {tier.price !== "Free" ? <span className="text-lg font-normal ">/{tier.duration}</span>:<span className="text-lg font-normal "></span>}
          </div>
          <ul className="mb-8 ">
            {tier.features.map((feature) => (
              <li key={feature} className="flex mb-2">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm mb-4 "><strong>Focus:</strong> {tier.focus}</p>
          <Link href={"https://calendly.com/oscartf1/30min"} target='_blank'>
          <Button className="w-full bg-primary hover:bg-primary">Book 30min free call</Button>

      </Link>
        </div>
      ))}
    </div>

 
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Ignite Your Potential?</h2>
      <p className="text-xl mb-8">Choose your tier and start your mentoring journey today!</p>
      <Link href={"https://calendly.com/oscartf1/30min"} target='_blank'>
      <Button className="bg-primary hover:bg-primary text-lg px-8 py-3">Get Started</Button>

      </Link>
    </div>
  </div>
  )
}