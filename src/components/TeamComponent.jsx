import React from "react";
import { Link } from "react-router-dom";
import TeamCard from "./TeamCard";
import { teamMembers } from "../constants/Teams";

function TeamComponent() {
  return (
    <div className="flex  flex-col items-center   ">
      <h2 className="text-5xl font-bold ">Our Team</h2>
      <p className="text-center text-xs w-full py-10 my-3 border-y-2">
        We are a team of passionate and dedicated software developers, focused
        on providing innovative solutions for businesses. Our team members have
        a strong background in computer science, have a keen eye for detail, and
        are always eager to learn and improve. We are here to help you achieve
        your goals and create lasting impact on your business.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
  {teamMembers.slice(0, 4).map((team, index) => (
    <TeamCard key={index} team={team} index={index} />
  ))}
</div>
      <Link
        to={"/about"}
        className="px-4 text-slate-300 bg-[#253540]  font-bold rounded-md py-2"
      >
        {" "}
        see more
      </Link>
    </div>
  );
}

export default TeamComponent;
