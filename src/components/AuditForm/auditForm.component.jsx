import { useRef } from "react";
import emailjs from "@emailjs/browser";

const AuditForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ok3u67g",      // 🔹 replace with your EmailJS service ID
        "template_s0kbkma",     // 🔹 replace with your EmailJS template ID
        form.current,
        "PsXQh-3BxezHP9OgW"       // 🔹 replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };
  return (
    <section className="mx-80 mb-20 max-xl:mx-20 max-sm:mx-4">
      <article className="text-center py-3">
        <h1 className="text-xl max-sm:text-sxl text-secondary font-bold">Free Audit Report</h1>
        <p className="text-sm max-sm:text-ssm">
          Questions, ideas, or opportunities—we'd love to hear from you. Contact
          Shark Ecommerce today and let's take your brand to the next level.
        </p>
      </article>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-5 w-full border rounded-4xl p-8 text-sm max-sm:p-4"
      >
        <div className="flex gap-3 max-md:flex-col max-md:gap-5">
          <input
            type="hidden"
            name="form type"
            value="Audit Request"
          />
          <input
            className="w-full border p-2.5 rounded-tl-2xl focus:outline-none focus:ring-2 focus:ring-secondary max-md:rounded-tr-2xl"
            type="text"
            name="first_name"
            required
            placeholder="First Name"
          />
          <input
            className="w-full border p-2.5 min-md:rounded-tr-2xl focus:outline-none focus:ring-2 focus:ring-secondary"
            type="text"
            name="second_name"
            required
            placeholder="Second Name"
          />
        </div>
        <input
          className="w-full border p-2.5 focus:outline-none focus:ring-2 focus:ring-secondary"
          type="email"
          name="email"
          required
          placeholder="Email"
        />
        <input
          className="w-full border p-2.5 focus:outline-none focus:ring-2 focus:ring-secondary"
          type="text"
          name="brand_name"
          required
          placeholder="Brand Name"
        />
        <input
          className="w-full border p-2.5 focus:outline-none focus:ring-2 focus:ring-secondary"
          type="text"
          name="average_monthly_revenue"
          required
          placeholder="Average Monthly Revenue"
        />
        <textarea
          className="border rounded-b-2xl h-32 p-2.5 focus:outline-none focus:ring-2 focus:ring-secondary"
          name="message"
          required
          placeholder="Your Message"
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
export default AuditForm;
