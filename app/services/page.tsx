import React from "react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen bg-[rgb(243_241_249_/_var(--tw-bg-opacity,1))] py-16">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-4">List of Services</h1>
        <p className="mb-4">
          Please note that this is a general list; more services may be provided
          on a case-by-case basis.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          1. Standard Cleaning Package
        </h2>
        <p className="mb-2">Ideal for regular maintenance or light cleaning.</p>
        <ul className="list-disc list-inside marker:text-primary space-y-1 mb-4 text-gray-500">
          <li>Dusting of all surfaces</li>
          <li>Vacuuming and mopping of floors</li>
          <li>Vacuuming carpets and rugs</li>
          <li>Sanitizing door handles, light switches, and high-touch areas</li>
          <li>
            Cleaning bathroom surfaces (sink, mirror, bath/shower, toilet)
          </li>
          <li>
            Cleaning of kitchen (sink, counters, appliances, fronts of
            cupboards)
          </li>
          <li>Emptying trash bins</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          2. Deep Cleaning Package
        </h2>
        <p className="mb-2">For a more intensive clean.</p>
        <ul className="list-disc list-inside marker:text-primary space-y-1 mb-4 text-gray-500">
          <li>Everything in the Standard Cleaning Package</li>
          <li>Detailed cleaning of baseboards and corners</li>
          <li>Cleaning behind and underneath furniture and appliances</li>
          <li>Scrubbing kitchen backsplash, cabinets, and hood fan</li>
          <li>Deep-cleaning of bathrooms (tub, shower, grout, etc.)</li>
          <li>Dusting ceiling fans, vents, and light fixtures</li>
          <li>Cleaning windows and window tracks</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          3. Morning Madness Express Package
        </h2>
        <p className="mb-2">For clients who need a quick, basic tidy up.</p>
        <ul className="list-disc list-inside marker:text-primary space-y-1 mb-4 text-gray-500">
          <li>
            Focus on high traffic areas such as kitchen, bedrooms, and bathrooms
          </li>
          <li>Dishwashing services provided</li>
          <li>Flexibility on targets and target areas</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          4. Move-In/Move-Out Cleaning Package
        </h2>
        <p className="mb-2">Perfect for clients who are relocating.</p>
        <ul className="list-disc list-inside marker:text-primary space-y-1 mb-4 text-gray-500">
          <li>Everything in the Deep Cleaning Package</li>
          <li>Cleaning inside all cabinets, closets, and drawers</li>
          <li>Detailed cleaning of appliances (oven, fridge, dishwasher)</li>
          <li>Steam-cleaning carpets (optional)</li>
          <li>Removing any leftover debris or trash from previous residents</li>
          <li>Cleaning light fixtures and replacing bulbs if necessary</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          5. Post-Construction Cleaning Package
        </h2>
        <p className="mb-2">
          For homes recently renovated or undergoing construction.
        </p>
        <ul className="list-disc list-inside marker:text-primary space-y-1 mb-4 text-gray-500">
          <li>Removal of dust, debris, and construction residues</li>
          <li>Wiping down all surfaces and windows</li>
          <li>Cleaning and polishing floors</li>
          <li>Carpet cleaning (if applicable)</li>
          <li>
            Detailed cleaning of air vents, light fixtures, and appliances
          </li>
          <li>
            Scrubbing kitchen and bathroom surfaces to remove grout, paint, etc.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          6. Customizable Cleaning Package
        </h2>
        <p className="mb-2">
          A flexible option that allows clients to pick and choose services
          based on their specific needs.
        </p>
        <ul className="list-disc list-inside marker:text-primary space-y-1 mb-4 text-gray-500">
          <li>
            Basic, deep, or specialized services like pet stain removal,
            laundry, or fridge cleaning
          </li>
          <li>Can be tailored for frequency (weekly, bi-weekly, monthly)</li>
          <li>Price adjusts based on selected tasks</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          7. Party Prep / Post Party Clean up
        </h2>
        <p className="mb-2">For clients who need a helping hand hosting.</p>
        <ul className="list-disc list-inside marker:text-primary space-y-1 mb-4 text-gray-500">
          <li>
            Event Preparation: Clean and prep target areas for hosting guests
          </li>
          <li>Flexible package based on the needs of the event</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">8. Airbnb Cleaning</h2>
        <p className="mb-2">
          A list of additional services; personalized requests accepted to be
          discussed.
        </p>
        <ul className="list-disc list-inside marker:text-primary space-y-1 mb-4 text-gray-500">
          <li>Laundry services</li>
          <li>Staging of beds / couches / other furniture</li>
          <li>Appliance cleaning</li>
          <li>Floor cleaning</li>
          <li>Walls</li>
          <li>Removing any garbage left behind and replacing garbage bags</li>
          <li>Deep bathroom clean</li>
          <li>Deep kitchen clean</li>
          <li>Focus on baseboard and corners</li>
          <li>Replenishing any essential items</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">9. Add-On Services</h2>
        <p className="mb-2">
          A list of additional services; personalized requests accepted to be
          discussed.
        </p>
        <ul className="list-disc list-inside marker:text-primary space-y-1 mb-8 text-gray-500">
          <li>Deep carpet cleaning</li>
          <li>Cleaning of windows and blinds</li>
          <li>Appliance cleaning</li>
          <li>Child-focused cleaning</li>
          <li>Walls</li>
          <li>Pet care package</li>
          <li>Deep bathroom clean</li>
          <li>Deep kitchen clean</li>
          <li>Focus on baseboard and corners</li>
        </ul>
        <div className="pt-4 border-t">
          <Link href="/" className="text-primary hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
