import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: 'success' | 'frustration';
  image: string;
  content?: {
    blogs?: string[];
    podcasts?: string[];
  };
}

interface MentorTimelineProps {
  mentor: {
    id: string;
    name: string;
    image: string;
    bio: string;
    email?: string;
    timeline: TimelineEvent[];
  };
}

const MentorTimeline: React.FC<MentorTimelineProps> = ({ mentor }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const firstName = mentor.name.split(' ')[0];

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev === mentor.timeline.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? mentor.timeline.length - 1 : prev - 1
    );
  };

  const handleEmailClick = () => {
    if (mentor.email) {
      window.location.href = `mailto:${mentor.email}?subject=Grateful to connect&body=So grateful to get to know you.`;
    }
  };

  return (
    <div className="min-h-screen bg-[#FEF9ED]">
      {/* Magazine Cover Style Header */}
      <div className="container mx-auto px-4 py-12">
        <div className="relative w-full max-w-4xl mx-auto mb-12">
          {/* Magazine Frame */}
          <div className="absolute inset-0 -m-4 bg-[#6B8CAE] shadow-2xl transform rotate-1"></div>
          <div className="absolute inset-0 -m-4 bg-[#A8E6CF] shadow-2xl -rotate-1"></div>
          
          {/* Magazine Cover */}
          <div className="relative bg-white shadow-2xl">
            {/* Top Border Design */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#6B8CAE]"></div>
            <div className="absolute top-2 left-0 right-0 h-0.5 bg-[#A8E6CF]"></div>
            
            <div className="relative aspect-[3/4] overflow-hidden">
              {/* Background Image with Gradient */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Magazine Style Text Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                {/* Magazine Title Area */}
                <div className="text-center -mt-4">
                  <h1 className="text-[120px] font-eb-garamond text-white tracking-wider leading-none drop-shadow-lg transform -translate-y-4">
                    {firstName}
                  </h1>
                </div>
                
                {/* Center Text */}
                <div className="text-center transform translate-y-8">
                  <h2 className="text-5xl font-eb-garamond text-white leading-tight drop-shadow-lg">
                    {mentor.labels?.[0] || "Tech Leader"}
                  </h2>
                </div>
                
                {/* Bottom Text */}
                <div className="text-white space-y-4 relative">
                  <div className="absolute inset-0 bg-black/30 blur"></div>
                  <div className="relative">
                    <p className="font-eb-garamond text-xl mb-4 drop-shadow-lg">
                      {mentor.bio}
                    </p>
                    {mentor.email && (
                      <button
                        onClick={handleEmailClick}
                        className="bg-[#A8E6CF] text-[#4A6FA5] px-6 py-2 rounded-full hover:bg-[#8CD3B5] transition-colors shadow-lg"
                      >
                        <Mail className="w-5 h-5 inline-block mr-2" />
                        Connect
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative mt-16">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-[#6B8CAE]" />
          </button>
          
          <div className="overflow-hidden px-12">
            <motion.div
              className="flex"
              animate={{ x: `${-currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {mentor.timeline.map((event, index) => (
                <div
                  key={event.id}
                  className="min-w-full px-4"
                  style={{ transform: `translateX(${index * 100}%)` }}
                >
                  <div
                    className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer
                      ${event.type === 'success' ? 'border-l-4 border-[#A8E6CF]' : 'border-l-4 border-[#FFB7B2]'}`}
                    onClick={() => setSelectedEvent(event)}
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[#6B8CAE] font-semibold">
                          {event.date}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-sm
                            ${event.type === 'success' 
                              ? 'bg-[#A8E6CF] text-[#4A6FA5]'
                              : 'bg-[#FFB7B2] text-[#4A6FA5]'
                            }`}
                        >
                          {event.type === 'success' ? 'Success' : 'Frustration'}
                        </span>
                      </div>
                      <h3 className="text-2xl font-eb-garamond text-[#6B8CAE] mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-[#6B8CAE]" />
          </button>
        </div>
      </div>

      {/* Modal for Timeline Event */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-96 object-cover rounded-lg mb-6"
                />
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-3xl font-eb-garamond text-[#6B8CAE]">
                    {selectedEvent.title}
                  </h3>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </div>
                <p className="text-gray-600 mb-6">{selectedEvent.description}</p>
                
                {selectedEvent.content && (
                  <div className="space-y-4">
                    {selectedEvent.content.blogs && (
                      <div>
                        <h4 className="text-xl font-eb-garamond text-[#6B8CAE] mb-2">
                          Related Blog Posts
                        </h4>
                        <ul className="list-disc list-inside space-y-2">
                          {selectedEvent.content.blogs.map((blog, index) => (
                            <li key={index}>{blog}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {selectedEvent.content.podcasts && (
                      <div>
                        <h4 className="text-xl font-eb-garamond text-[#6B8CAE] mb-2">
                          Related Podcasts
                        </h4>
                        <ul className="list-disc list-inside space-y-2">
                          {selectedEvent.content.podcasts.map((podcast, index) => (
                            <li key={index}>{podcast}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MentorTimeline;