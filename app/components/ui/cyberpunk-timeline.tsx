"use client";

import {
  motion,
} from "framer-motion";
import React, { useRef } from "react";
import { Experience } from "@/app/data/experiences";
import { Formation } from "@/app/data/formations";

interface CyberpunkTimelineProps {
  experiences: Experience[];
}

interface CyberpunkTimelineFormationProps {
  formations: Formation[];
}

export function CyberpunkTimelineFormation({ formations }: CyberpunkTimelineFormationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative max-w-7xl mx-auto pb-20">
      {formations.map((formation, index) => (
        <motion.div
          key={formation.id}
          className="flex flex-col md:flex-row justify-start pt-6 md:pt-20 md:gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut"
          }}
        >
          <div className="flex md:sticky md:flex-col md:flex-row z-40 items-center md:top-40 md:self-start w-full md:w-48 mb-4 md:mb-0">
            <div className="flex items-center gap-4">
              <div className="h-6 w-6 md:h-8 md:w-8 rounded-full flex items-center justify-center bg-[#038C8C] border border-[#025959]">
                <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-white" />
              </div>
              <div className="md:hidden">
                <h3 className="text-sm font-medium text-[#025959]">{formation.period}</h3>
              </div>
            </div>
            <div className="hidden md:block text-sm md:pl-20">
              <h3 className="text-base font-medium text-[#025959]">{formation.period}</h3>
            </div>
          </div>

          <div className="relative w-full">
            <h4 className="text-xl md:text-3xl font-bold text-[#BF0404] mb-2">{formation.title}</h4>
            <p className="text-base md:text-lg text-[#038C8C] mb-4">{formation.school}</p>
            <p className="text-sm md:text-base text-[#025959] mb-4">{formation.description}</p>
            <div className="flex flex-wrap gap-2">
              {formation.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-2 py-1 text-xs md:text-sm bg-[#038C8C] text-[#011F26] rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
      <div
        style={{
          height: formations.length * 200 + "px",
        }}
        className="absolute md:left-8 left-4 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[#038C8C] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
      >
        <motion.div
          className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#038C8C] to-transparent from-[0%] rounded-full"
        />
      </div>
    </div>
  );
}

export function CyberpunkTimeline({ experiences }: CyberpunkTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const formatPeriod = (period: string) => {
    const [datePart, durationPart] = period.split(" · ");
    const [startDate, endDate] = datePart.split(" - ");
    return { startDate, endDate, duration: durationPart };
  };

  return (
    <div ref={containerRef} className="relative max-w-7xl mx-auto pb-20">
      {experiences.map((experience, index) => {
        const { startDate, endDate, duration } = formatPeriod(experience.period);
        return (
          <motion.div
            key={experience.id}
            className="flex flex-col md:flex-row justify-start pt-6 md:pt-20 md:gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut"
            }}
          >
            <div className="flex md:sticky md:flex-col md:flex-row z-40 items-center md:top-40 md:self-start w-full md:w-48 mb-4 md:mb-0">
              <div className="flex items-center gap-4">
                <div className="h-6 w-6 md:h-8 md:w-8 rounded-full flex items-center justify-center bg-[#038C8C] border border-[#025959]">
                  <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-white" />
                </div>
                <div className="md:hidden">
                  <h3 className="text-sm font-medium text-[#025959]">{startDate}</h3>
                  <p className="text-sm font-medium text-[#025959]">{endDate}</p>
                  <p className="text-xs text-[#038C8C]">{duration}</p>
                </div>
              </div>
              <div className="hidden md:block text-sm md:pl-20">
                <h3 className="text-base font-medium text-[#025959]">{startDate}</h3>
                <p className="text-base font-medium text-[#025959]">{endDate}</p>
                <p className="text-xs text-[#038C8C]">{duration}</p>
              </div>
            </div>

            <div className="relative w-full">
              <h4 className="text-xl md:text-3xl font-bold text-[#BF0404] mb-2">{experience.title}</h4>
              <p className="text-base md:text-lg text-[#038C8C] mb-4">{experience.company}</p>
              <ul className="text-sm md:text-base text-[#025959] list-disc list-inside space-y-2">
                {experience.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
              {experience.technologies && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs md:text-sm bg-[#038C8C] text-[#011F26] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
} 