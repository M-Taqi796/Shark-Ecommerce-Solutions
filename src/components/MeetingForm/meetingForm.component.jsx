import { useState } from "react";

const MeetingForm = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // next 30 days
  const generateDates = () => {
    const today = new Date();
    const dates = [];

    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      const formatted = date.toISOString().split("T")[0]; // yyyy-mm-dd
      dates.push(formatted);
    }

    return dates;
  };

  // hourly slots
  const generateTimeSlots = () => {
    const times = [];
    for (let i = 0; i < 24; i++) {
      const startHour = i % 12 || 12;
      const endHour = (i + 1) % 12 || 12;
      const startPeriod = i < 12 ? "AM" : "PM";
      const endPeriod = i + 1 < 12 ? "AM" : "PM";
      times.push(`${startHour}:00 ${startPeriod} - ${endHour}:00 ${endPeriod}`);
    }
    return times;
  };

  const dates = generateDates();
  const timeSlots = generateTimeSlots();

  return (
    <section className="mx-80 mb-20">
      <article className="text-center py-3">
        <h1 className="text-xl text-secondary font-bold">Schedule a Meeting</h1>
        <p className="text-sm">
          Questions, ideas, or opportunities—we'd love to hear from you. Contact
          Shark Ecommerce today and let's take your brand to the next level.
        </p>
      </article>

      <form
        className="flex flex-col gap-5 w-full border rounded-4xl p-8 text-sm"
        action="https://formsubmit.co/farasat381amazon@gmail.com"
        method="POST"
      >
        <div className="flex gap-3">
          <input
            className="hidden"
            type="text"
            name="Form Type"
            value="Meeting Request"
          />
          <input
            className="w-full border p-2.5 rounded-tl-2xl focus:outline-none focus:ring-2 focus:ring-secondary"
            type="text"
            name="First Name"
            required
            placeholder="First Name"
          />
          <input
            className="w-full border p-2.5 rounded-tr-2xl focus:outline-none focus:ring-2 focus:ring-secondary"
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

        <textarea
          className="border h-32 p-2.5 focus:outline-none focus:ring-2 focus:ring-secondary"
          name="Message"
          required
          placeholder="Your Message"
        ></textarea>

        <div className="flex gap-3">
          {/* Date Selector */}
          <select
            value={selectedDate}
            required
            name="Date"
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full border rounded-bl-2xl p-2.5 text-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <option value="">Select Date</option>
            {dates.map((date, index) => (
              <option key={index} value={date}>
                {date}
              </option>
            ))}
          </select>

          {/* Time Selector */}
          <select
            value={selectedTime}
            required
            name="Time"
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full border rounded-br-2xl p-2.5 text-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <option value="">Select Time (ETA)</option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>

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

export default MeetingForm;