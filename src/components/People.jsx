// src/components/People.jsx
import React from 'react';
import { motion } from 'framer-motion';
import test1 from "../assets/test1.svg";
import test2 from "../assets/test2.svg";
import test3 from "../assets/test3.svg";
import quest from "../assets/quest.svg";

const testimonials = [
  {
    text: "Excellent service and support. Highly recommended!",
    name: "John Doe",
    role: "Designer",
    image: test1,
  },
  {
    text: "Amazing experience, outstanding quality, and support I can rely on.",
    name: "Jane Smith",
    role: "StartUp Founder",
    image: test3,
  },
  {
    text: "Great product! Exceeded all my expectations.",
    name: "Emily Davis",
    role: "Artist",
    image: test2,
  },
];

const faqs = [
  {
    question: "What is JoeVibe?",
    answer:
      "JoeVibe is an online marketplace that offers a curated selection of fashion, accessories, and lifestyle products. We focus on providing high-quality, stylish items at affordable prices.",
  },
  {
    question: "How do I track my order?",
    answer:
      "After placing your order, you will receive an email with a tracking link. You can also log into your JoeVibe account and check the order status in the 'My Orders' section.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy on most items. Products must be unused and in their original packaging. To initiate a return, visit the 'Returns' page on our website and follow the instructions.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team via the 'Contact Us' page on our website. We are available by email, live chat, and phone during regular business hours.",
  },
];

const People = () => {
  return (
    <div className="w-full bg-gray-50 py-20 px-6 md:px-24">
      {/* Testimonials */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='text-center text-3xl sm:text-5xl font-semibold mb-16 text-gray-900'
      >
        What People Are Saying
      </motion.h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className='bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:scale-[1.03] transition duration-300 ease-in-out'
          >
            <p className='text-gray-700 text-lg italic mb-6'>"{item.text}"</p>
            <div className='flex items-center justify-center gap-4'>
              <img src={item.image} alt={item.name} className='w-14 h-14 rounded-full' />
              <div className='text-left'>
                <h4 className='font-bold text-gray-900'>{item.name}</h4>
                <span className='text-sm text-gray-500'>{item.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FAQs */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='text-center text-3xl sm:text-5xl font-semibold mt-24 mb-12 text-gray-900'
      >
        Frequently Asked Questions
      </motion.h1>

      <div className='flex flex-col lg:flex-row gap-10 items-start'>
        <div className='w-full lg:w-2/3 space-y-6'>
          {faqs.map((faq, idx) => (
            <motion.details
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className='bg-white p-6 rounded-xl shadow cursor-pointer group open:bg-gray-100 transition-all duration-300'
            >
              <summary className='text-lg font-semibold text-gray-800 group-open:text-orange-500 transition-colors'>
                {faq.question}
              </summary>
              <p className='mt-3 text-gray-600 leading-relaxed'>{faq.answer}</p>
            </motion.details>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='w-full lg:w-1/3 bg-white shadow-md rounded-xl p-8 text-center hover:shadow-xl transition duration-300'
        >
          <img src={quest} alt="More Questions" className='mx-auto mb-6' />
          <h2 className='text-2xl font-bold text-gray-800 mb-3'>Still Have Questions?</h2>
          <p className='text-gray-600 mb-6'>We're here to help! Browse our support section or reach out directly.</p>
          <button className='bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition'>
            Shop Collection
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default People;
