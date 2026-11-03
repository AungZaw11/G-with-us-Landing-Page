import React from "react";
import JobCard from "./JobCard";

const JobsCategory = ({ category }) => {
  return (
    <section className="flex flex-col w-full max-w-7xl mx-auto px-6 md:px-16 mb-16">
      <h2 className="text-2xl font-bold text-[#174A84] mb-8">
        {category.title}
      </h2>

      <div className="flex flex-row flex-wrap justify-start gap-6 md:gap-8">
        {category.jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default JobsCategory;
