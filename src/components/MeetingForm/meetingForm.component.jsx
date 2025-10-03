import { useState } from "react";

const MeetingForm = () => {
  const [selected, setSelected] = useState("");
  const services = [
    "Amazon PPC",
    "SEO",
    "Design",
    "Listing Optimization",
    "Account Management",
  ];
  return (
    <section className="mx-80 mb-20">
      <article className="text-center py-3">
        <h1 className="text-xl text-secondary font-bold">Schedule a Meeting</h1>
        <p className="text-sm">
          Questions, ideas, or opportunities—we'd love to hear from you. Contact
          Shark Ecommerce today and let's take your brand to the next level.
        </p>
      </article>
      <div className="flex flex-col gap-5 w-full border rounded-4xl p-8 text-sm">
        <div className="flex gap-3">
          <input
            className="w-full border p-2.5 rounded-tl-2xl focus:outline-none focus:ring-2 focus:ring-secondary"
            type="text"
            placeholder="First Name"
          />
          <input
            className="w-full border p-2.5 rounded-tr-2xl focus:outline-none focus:ring-2 focus:ring-secondary"
            type="text"
            placeholder="SecondName"
          />
        </div>
        <input
          className="w-full border p-2.5 my-3 focus:outline-none focus:ring-2 focus:ring-secondary"
          type="email"
          placeholder="Email"
        />
        <textarea
          className="border h-32 p-2.5 focus:outline-none focus:ring-2 focus:ring-secondary"
          name="Message"
          placeholder="Your Message"
          id=""
        ></textarea>
        <div className="flex gap-3">
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="w-full border rounded-bl-2xl p-2.5 text-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <option value="">Select a service</option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="w-full border rounded-br-2xl p-2.5 text-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <option value="">Select a service</option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
        <button className="text-fontPrimary px-6 py-3 bg-primary shadow-[4px_4px_0px_0px] shadow-backgroundSecondary hover:shadow-[0px_0px_0px_0px]">
          Send Message
        </button>
      </div>
    </section>
  );
};
export default MeetingForm;
