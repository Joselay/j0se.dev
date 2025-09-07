import React from "react";

import { TooltipProvider } from "@/components/ui/tooltip";

import { EXPERIENCES } from "../../data/experiences";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { ExperienceItem } from "./experience-item";

export function Experiences() {
  return (
    <TooltipProvider>
      <Panel id="experience">
        <PanelHeader>
          <PanelTitle>Experience</PanelTitle>
        </PanelHeader>

        <div className="pr-2 pl-4">
          {EXPERIENCES.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </div>
      </Panel>
    </TooltipProvider>
  );
}
