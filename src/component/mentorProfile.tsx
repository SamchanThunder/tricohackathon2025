import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Clock, Podcast, BookOpen, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Label {
  text: string;
  size: 'small' | 'medium' | 'large';
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  content: string;
  media: {
    type: string;
    url: string;
  };
}

interface MentorData {
  name: string;
  image: string;
  labels: Label[];
  timeline: TimelineEvent[];
  advice: string[];
}

interface MentorProfileProps {
  mentor?: MentorData;
}

const MentorProfile: React.FC<MentorProfileProps> = ({ mentor }) => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const navigate = useNavigate();

  const getLabelSize = (size: string) => {
    switch (size) {
      case 'large':
        return 'text-4xl font-semibold';
      case 'medium':
        return 'text-2xl';
      case 'small':
        return 'text-xl';
      default:
        return 'text-xl';
    }
  };

  // Calculate positions for labels to prevent overlap
  const calculateLabelPositions = (labels: Label[]) => {
    const positions: { x: number; y: number }[] = [];
    const gridSize = 50; // Size of each grid cell
    const gridCols = 4; // Number of columns in the grid
    const gridRows = 4; // Number of rows in the grid

    labels.forEach((_, index) => {
      let position;
      let attempts = 0;
      const maxAttempts = 50;

      do {
        const col = Math.floor(Math.random() * gridCols);
        const row = Math.floor(Math.random() * gridRows);
        position = {
          x: col * gridSize,
          y: row * gridSize,
        };
        attempts++;
      } while (
        positions.some(
          (pos) =>
            Math.abs(pos.x - position.x) < gridSize &&
            Math.abs(pos.y - position.y) < gridSize
        ) &&
        attempts < maxAttempts
      );

      positions.push(position);
    });

    return positions;
  };

  const labelPositions = calculateLabelPositions(mentor.labels);

  return (
    <div className="min-h-screen bg-[#FEF9ED]">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          <span className="font-eb-garamond text-lg">Back</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Portrait */}
          <div className="relative">
            <div className="polaroid">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-[500px] object-cover"
              />
              <div className="mt-2 text-center font-eb-garamond text-gray-600">
                {mentor.name}
              </div>
            </div>
          </div>

          {/* Right Column - Introduction */}
          <div className="space-y-8">
            <div>
              <h1 className="font-eb-garamond text-5xl mb-6">
                Hi, I am {mentor.name}
              </h1>
              <div className="relative h-[300px] bg-white rounded-lg p-6 shadow-sm">
                {mentor.labels.map((label, index) => (
                  <motion.span
                    key={index}
                    className={`absolute cursor-pointer hover:text-indigo-600 transition-colors
                      ${getLabelSize(label.size)} font-eb-garamond`}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      x: labelPositions[index].x,
                      y: labelPositions[index].y,
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {label.text}
                  </motion.span>
                ))}
              </div>
            </div>

            <button
              onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              See How I Got Where I Am
            </button>
          </div>
        </div>

        {/* Timeline Section */}
        <div id="timeline" className="mt-16 px-4 md:px-12">
          <h2 className="font-eb-garamond text-4xl mb-8 text-center">My Journey</h2>
          <div className="relative pl-8 space-y-8">
            {mentor.timeline.map((event, index) => (
              <div key={index} className="relative timeline-dot timeline-line">
                <div 
                  className="ml-8 bg-white p-6 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-eb-garamond text-2xl">{event.title}</h3>
                    <span className="text-indigo-600 font-semibold">{event.year}</span>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                  <div className="mt-4 flex items-center text-indigo-600">
                    {event.media.type === 'podcast' ? <Podcast size={20} /> : <BookOpen size={20} />}
                    <span className="ml-2">Click to learn more</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advice Section */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="font-eb-garamond text-4xl mb-6 text-center">Words of Wisdom</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mentor.advice.map((advice, index) => (
              <div key={index} className="p-6 bg-[#FEF9ED] rounded-lg">
                <p className="font-eb-garamond text-xl italic">{advice}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="font-eb-garamond text-4xl mb-6 text-center">Get in Touch</h2>
          <form className="max-w-2xl mx-auto space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Your Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Timeline Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-eb-garamond text-2xl">{selectedEvent.title}</h3>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <p className="text-gray-600 mb-4">{selectedEvent.content}</p>
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedEvent(null)}
                className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorProfile;