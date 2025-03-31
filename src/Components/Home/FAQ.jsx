import React, { useState } from "react";
import { motion } from "framer-motion";
import dhanurVedaImage from "../../assets/bg_net.png"; // Add appropriate image
import bgImage from "../../assets/bg_faq.jpg"; // Add your background image here

const faqs = [
  {
    question: "What is Dhanurveda?",
    answer: `
      Dhanurveda, an ancient Indian science of warfare, is a part of the Vedic tradition. 
      It encompasses the study of martial arts, weaponry, battlefield strategies, and 
      physical and mental discipline. It is considered one of the four Upavedas associated with the Yajurveda.`,
  },
  {
    question: "What are the primary types of weapons covered in Dhanurveda?",
    answer: `
      <ul>
        <li><strong>The Bow (Dhanus):</strong> A long-range weapon symbolizing precision and skill.</li>
        <li><strong>The Discus (Kunta/Chakra):</strong> A spinning weapon used for striking multiple targets.</li>
        <li><strong>The Sword (Khadga):</strong> A close-combat weapon representing courage.</li>
        <li><strong>The Knife (Ksurika):</strong> A versatile small weapon for stealth and self-defense.</li>
        <li><strong>The Mace (Gada):</strong> A heavy weapon used to crush armor and deliver powerful blows.</li>
        <li><strong>Spears and Javelins (Shakti/Tomara):</strong> Weapons for thrusting or throwing in both close and long-range combat.</li>
        <li><strong>Hand-to-Hand Combat (Bahuyuddha):</strong> Unarmed fighting techniques involving grappling, striking, and wrestling.</li>
      </ul>`,
  },
  {
    question: "Why is Dhanurveda relevant today?",
    answer: `
      Dhanurveda provides insights into physical fitness, self-discipline, and strategic thinking. 
      Its principles can inspire modern martial arts, holistic defense training, and even non-military applications 
      such as personal development and leadership.`,
  },
  {
    question: "How does Dhanurveda integrate with modern practices?",
    answer: `
      While preserving its traditional essence, Dhanurveda can complement modern martial arts, yoga, and physical 
      fitness regimes. Its strategic principles are applicable in modern military studies, self-defense, 
      and even management sciences.`,
  },
  {
    question: "Are there any spiritual aspects in Dhanurveda?",
    answer: `
      Yes, Dhanurveda emphasizes the balance of mind, body, and spirit. It aligns with the principles of Sanatana 
      Dharma, emphasizing discipline, self-control, and devotion. Training often includes meditation and focus techniques.`,
  },
  {
    question: "What activities does ISODHAN offer related to Dhanurveda?",
    answer: `
      The Foundation organizes workshops, seminars, training camps, and research programs focusing on:
      <ul>
        <li>Traditional martial arts and weaponry.</li>
        <li>Historical and philosophical aspects of Dhanurveda.</li>
        <li>Applications of Dhanurveda in contemporary defense and leadership training.</li>
      </ul>`,
  },
  {
    question: "Who can participate in Dhanurveda programs?",
    answer: `
      Our programs are open to individuals of all ages and skill levels who are interested in learning about the 
      ancient martial arts tradition. Enthusiasts, researchers, and practitioners are welcome.`,
  },
];

function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div
      className="py-10 px-6 bg-cover bg-center text-black"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="text-center mb-10">
        <h3 className="text-2xl text-yellow-500 font-bold">
          Mastering of Dhanurveda
        </h3>
        <h1 className="text-3xl md:text-4xl text-[#800000] font-bold">
          The <span className="text-maroon-600">Art of Warfare</span> in Ancient Times
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* FAQ Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-[#800000] mb-6">
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 mb-4 p-4 rounded-lg  shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="cursor-pointer text-lg font-semibold text-black flex justify-between items-center"
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                {faq.question}
                <motion.div
                  className="ml-2 text-sm"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.div>
              </div>
              {expandedIndex === index && (
                <motion.div
                  className="text-gray-700 mt-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={dhanurVedaImage}
            alt="Dhanur Vidya"
            className="object-contain w-[80%] max-w-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default FAQ;
