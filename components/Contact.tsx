"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactProps {
  data: {
    name: string;
    email: string;
    phone: string;
    location: string;
  };
}

export default function Contact({ data }: ContactProps) {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    if (!form.current) return;
    console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatus("✅ Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          setLoading(false);
          setStatus("❌ Failed to send message. Try again.");
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting
            projects. Let's connect and create something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Let's Start a Conversation
            </h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <a
                    href={`mailto:${data.email}`}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    {data.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Phone className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <a
                    href={`tel:${data.phone}`}
                    className="text-green-600 hover:text-green-800 transition-colors duration-200"
                  >
                    {data.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <MapPin className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-gray-400">{data.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side (Form) */}
          <div>
            <form ref={form} onSubmit={sendEmail} className="space-y-6 p-5 border rounded-2xl bg-white">
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email_address"
                  name="email_address"
                  required
                  className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  required
                  className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FFD700] text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {status && (
              <p className="text-center text-white mt-4">{status}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
