import React from "react";
import { jobsData } from "../data/jobsData";
import JobsHero from "../components/JobsHero";
import JobsCategory from "../components/JobsCategory";

const JobsPage = () => {
  return (
    <main className="flex flex-col w-full bg-white pb-20">
      <JobsHero />

      <div className="flex flex-col w-full mt-8">
        {jobsData.categories.map((category, index) => (
          <JobsCategory key={index} category={category} />
        ))}
      </div>
    </main>
  );
};

export default JobsPage;
