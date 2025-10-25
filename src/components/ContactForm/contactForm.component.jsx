import { useState } from "react";

const ContactForm = () => {
  const [selected, setSelected] = useState("");
  const services = [
    "Amazon PPC",
    "SEO",
    "Design",
    "Listing Optimization",
    "Account Management",
  ];
  return (
    <section className="mx-80 mb-20 max-xl:mx-20 max-sm:mx-4">
      <article className="text-center py-3">
        <h1 className="text-xl max-sm:text-sxl text-secondary font-bold">Get In Touch</h1>
        <p className="text-sm max-sm:text-ssm">
          Questions, ideas, or opportunities—we’d love to hear from you. Contact
          Shark Ecommerce today and let's take your brand to the next level.
        </p>
      </article>
      <form
        className="flex flex-col gap-5 w-full border rounded-4xl p-8 text-sm max-sm:p-4"
        action="https://formsubmit.co/farasat381amazon@gmail.com"
        method="POST"
      >
        <div className="flex gap-3 max-md:flex-col max-md:gap-5">
          <input
            className="hidden"
            type="text"
            name="Form Type"
            value="Contact Request"
          />
          <input
            className="w-full border p-2.5 rounded-tl-2xl focus:outline-none focus:ring-2 focus:ring-secondary max-md:rounded-tr-2xl"
            type="text"
            name="First Name"
            required
            placeholder="First Name"
          />
          <input
            className="w-full border p-2.5 min-md:rounded-tr-2xl focus:outline-none focus:ring-2 focus:ring-secondary"
            type="text"
            name="Second Name"
            required
            placeholder="Second Name"
          />
        </div>
        <input
          className="w-full border p-2.5 my-3 focus:outline-none focus:ring-2 focus:ring-secondary"
          type="email"
          name="Email"
          required
          placeholder="Email"
        />
        <select
          value={selected}
          name="Service Interested"
          required
          onChange={(e) => setSelected(e.target.value)}
          className="w-full border p-2.5 text-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
        >
          <option value="">Select a service</option>
          {services.map((service, index) => (
            <option key={index} value={service}>
              {service}
            </option>
          ))}
        </select>
        <textarea
          className="border rounded-b-2xl h-32 p-2.5 focus:outline-none focus:ring-2 focus:ring-secondary"
          required
          name="Message"
          placeholder="Your Message"
          id=""
        ></textarea>
        <button
          className="text-fontPrimary px-6 py-3 bg-primary shadow-[4px_4px_0px_0px] shadow-backgroundSecondary hover:shadow-[0px_0px_0px_0px]"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};
export default ContactForm;
