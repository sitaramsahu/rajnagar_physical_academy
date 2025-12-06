import React from "react";

const page = () => {
  return (
    <div>
      {/* List of Sarkari Naukri jobs will go here */}
      <h1 className="text-2xl font-bold mb-4">Sarkari Naukri Jobs</h1>
      <ul className="list-disc list-inside space-y-2">
        <li>Job 1: Government Teacher Vacancy - Apply Now!</li>
        <li>Job 2: Police Constable Recruitment - Last Date Approaching</li>
        <li>Job 3: Railway Jobs 2024 - Eligibility and Application Process</li>
        <li>Job 4: Bank PO Recruitment - Important Dates and Syllabus</li>
        <li>Job 5: SSC CGL Notification Released - Check Details</li>
      </ul>
    </div>
  );
};

export default page;
