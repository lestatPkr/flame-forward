import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, Flame, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const tiers = [
    {
      name: "Grow Together",
      price: "Free",
      duration: "month",
      features: [
        "Monthly one-on-one check-ins (30 minutes)",
        "Personalized guidance on building core software engineering skills",
        "Access to shared learning resources",
        "Accountability support and growth tracking"
      ],
      description: "For those who can't afford a paid service but are committed to doing their best to grow.",
      focus: "Growth mindset, skill-building, and overcoming obstacles to advance in your career."
    },
    {
      name: "Engineer Forward",
      price: 199,
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
      price: 399,
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

  const allFeatures = [
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
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Flame className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold text-gray-800">Flame Forward</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
            <a href="#" className="text-orange-500 font-semibold">Mentoring</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-100">Home</a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-100">About</a>
            <a href="#" className="block py-2 px-4 text-sm bg-orange-100 text-orange-500">Mentoring</a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-100">Contact</a>
          </div>
        )}
      </header>

      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Choose Your Mentoring Tier</h1>
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-bold mb-4">Why do I do this?</h2>
            <p className="text-gray-700 mb-4">
              I've been through my fair share of challenges in the tech world, and I know how tough it can be to navigate it on your own. That's why I want to mentor others—because if I can make your journey just a little bit easier, then it's worth it. No one should have to feel stuck or unsure about their next step without someone there to help.
            </p>
            <p className="text-gray-700 mb-4">
              I'm not here to act like I have all the answers, but I do want to share what I've learned over the years in software engineering and leadership. Whether you're just getting started, trying to grow your technical skills, or thinking about stepping into a leadership role, I'd love to help you figure things out. Tech can feel confusing, but with the right support, it doesn't have to be. I'm here to listen, guide you where I can, and help you grow at your own pace.
            </p>
            <p className="text-gray-700 mb-4">
              For me, mentoring is about paying it forward. I've had the chance to work with great people, and I've learned a lot from my own mistakes and wins. Now, I just want to help others on their path—whatever that looks like for them.
            </p>
            <p className="text-gray-700">
              I also get that not everyone's in the same financial spot, so I've made sure my mentoring services are flexible. There's even a free option if you need it because I want to make sure anyone who's serious about growing has the chance to do so, no matter their situation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {tiers.map((tier) => (
              <div key={tier.name} className="bg-white rounded-lg shadow-md p-8 flex flex-col">
                <h2 className="text-2xl font-bold mb-4">{tier.name}</h2>
                <p className="text-gray-600 mb-4 flex-grow">{tier.description}</p>
                <div className="text-3xl font-bold mb-4">
                  {tier.price === "Free" ? "Free" : `$${tier.price}`}
                  {tier.price !== "Free" && <span className="text-lg font-normal text-gray-600">/{tier.duration}</span>}
                </div>
                <ul className="mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start mb-2">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 mb-4"><strong>Focus:</strong> {tier.focus}</p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Choose {tier.name}</Button>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center mb-8">Compare Tiers</h2>
          <Table className="mb-16">
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Feature</TableHead>
                {tiers.map((tier) => (
                  <TableHead key={tier.name}>{tier.name}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {allFeatures.map((feature) => (
                <TableRow key={feature}>
                  <TableCell className="font-medium">{feature}</TableCell>
                  {tiers.map((tier) => (
                    <TableCell key={tier.name}>
                      {tier.features.some(f => f.includes(feature)) ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Ignite Your Potential?</h2>
            <p className="text-xl mb-8">Choose your tier and start your mentoring journey today!</p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-3">Get Started</Button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Flame Forward</h3>
              <p className="text-sm">Igniting potential through mentorship and guidance.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-300">Home</a></li>
                <li><a href="#" className="hover:text-orange-300">About</a></li>
                <li><a href="#" className="hover:text-orange-300">Mentoring</a></li>
                <li><a href="#" className="hover:text-orange-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li>Email: info@flameforward.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 123 Mentor St, City, State 12345</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2023 Flame Forward. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}