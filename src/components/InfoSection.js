import React from "react";

const InfoSection = () => {
  return (
    <div className="bg-white py-8 px-4 lg:px-16 flex flex-col lg:flex-row justify-between mt-[4rem] font-roboto">
      {/* Left Sidebar */}
      <div className="w-full lg:w-1/4 lg:pr-8 mb-8 lg:mb-0">
        <h2 className="text-[#FF8924] text-xl font-semibold mb-4">At a Glance</h2>
        <ul className="list-none space-y-2 text-gray-700">
          <li className="flex items-center space-x-2">
            <span className="text-[#FF8924]">&bull;</span>
            <span>Transportation in Rome</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-[#FF8924]">&bull;</span>
            <span>Airport Transfers in Rome</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-[#FF8924]">&bull;</span>
            <span>Sightseeing Transportation</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-3/4 flex flex-col">
        {/* Main Description */}
        <p className="text-gray-800 mb-6 leading-relaxed">
          Nestled in the heart of Italian Peninsula, Rome is the capital of the
          country and one of the most populated cities in Italy. From its rich
          architecture to rare artefacts, this city is known to possess a
          history like none other. The picturesque atmosphere, the cold wind
          blowing and the serene atmosphere is what makes Rome a must-visit
          place for all the travel fanatics out there.
        </p>

        {/* First Row: Text + Image */}
        <div className="flex flex-col lg:flex-row mb-8 gap-4">
          <div className="flex-1 pr-0 lg:pr-8">
            <p className="text-gray-800 mb-8 leading-relaxed">
              A perfect blend of gothic ruins, jaw-dropping art, and lively nights,
              Rome sets an exemplary example for a place about how it should
              entertain its travellers. The city wholeheartedly welcomes
              travellers from a wide array of interests, from awe-inspiring
              monuments to living life at its best. Rome will never fail to
              surprise you with a new place to explore.
            </p>
            <p className="text-gray-800 mt-12 leading-relaxed">
              A perfect blend of gothic ruins, jaw-dropping art, and lively
              nights, Rome sets an exemplary example for a place about how it
              should entertain its travellers. The city wholeheartedly welcomes
              travellers from a wide array of interests, from awe-inspiring
              monuments to living life at its best.
            </p>
          </div>
          <div className="flex-col flex-shrink-0">
            <img
              src="/gallery1.png"
              alt="Rome Civitavecchia"
              className="w-full h-auto"
            />
            <span className="text-[#737373] text-sm">Rome Civitavecchia | Image by <span className="text-blue-400">Alejandro Picasso</span></span>
          </div>
        </div>

        {/* Second Paragraph */}
        <p className="text-gray-800 mb-8 leading-relaxed">
          The Roman Empire has been an icon when it comes to historical
          importance. The Roman Empire had cut the ribbons when Augustus Caesar
          announced to be the first emperor of Rome in 31BC and ended with the
          fall of Constantinople in 1453CE. Known to be the centre of the Roman
          Empire, Rome attracts the majority of the crowd due to its rich
          history and politics.
        </p>

        {/* Second Row: Image + Text */}
        <div className="flex flex-col lg:flex-row mb-8 gap-4">
          <div className="flex-col flex-shrink-0">
            <img
              src="/gallery2.png"
              alt="Rome Civitavecchia"
              className="w-full h-auto"
            />
            <span className="text-[#737373] text-sm">Image by <span className="text-blue-400">VIA DEI MONTI PARIOLI</span></span>
          </div>
          <div className="flex-1">
            <p className="text-gray-800 leading-relaxed pl-0 lg:pl-5">
              Referred to as ‘An Eternal City’ in the beginning of the history,
              Rome is seen to be a dream for music lovers due to the Parco Della
              Musica which is known to be one of the largest music venues in the
              world. Not only music, Rome has also set itself in the most wanted
              places to visit in the world and is the third most visited places in
              the entire Europe. This place has experienced arts from different
              periods and became a home for some of the most renowned artists such
              as Borromini, Bernini, Carracci, and Cortona.
            </p>
          </div>
        </div>

        {/* Final Paragraphs */}
        <p className="text-gray-800 mb-4 leading-relaxed">
          Embracing the ancient art, Rome has now decided to use its innovation
          to give birth to contemporary art to keep enhancing their love for art
          and architecture. The National Museum of the 21st Century Arts is a live
          example of that. The Italian cuisine has somehow managed to be a king
          of all cuisines, from the Carciofi alla Romana to the Spaghetti alla
          Carbonara - Delicious spaghetti topped with bacon, smokey eggs, and
          pecorino is what makes it mouth-watering.
        </p>
        <p className="text-gray-800 leading-relaxed">
          Rome has a series of reasons to attract you and slip you into its warm
          arms to rejuvenate your soul with its authentic art, awe-inspiring
          architecture, and mouth-watering food.
        </p>
        <hr className="w-[95px] mt-4" />
      </div>
    </div>
  );
};

export default InfoSection;
