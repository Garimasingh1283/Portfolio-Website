import React from "react";

export default function About() {
    const handleResumeClick = () => {
      window.open("https://drive.google.com/file/d/1HAzxAS45YWuicAE8mGKzqa7fyEafJtHR/view?usp=drive_link", "_blank");
    };
  
    return (
      <div
        name="About"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 text-center bg-[#EBF4F6] text-[#071952]"
      >
        <div className="border-2 border-[#071952] bg-[#EBF4F6] p-6 rounded-lg">
          <h1 className="text-4xl font-bold mb-5 text-[#071952]">About Me</h1>
          <p className="text-xl font-medium text-[#071952]">
            I am a tech-savvy professional pursuing a Bachelor’s degree in
            Computer Science & Engineering from IIIT Vadodara, actively seeking
            opportunities as a web developer and machine learning enthusiast. My
            passion lies in continually advancing my skills and knowledge in these
            fields. I have participated in various hackathons and boot camps
            focused on web development and machine learning, which have deepened
            my expertise and fueled my drive for innovation.
          </p>
  
          <br />
          <h1 className="text-[#088395] font-semibold text-xl">Education</h1>
          <span className="text-[#071952]">
            Specialisation & Degree: CSE, IIIT Vadodara (2022-2026),
            <br />
            Relevant Courses: Data Structures & Algorithms, OOPS, DBMS, OS,
            Software Eng. & Computer Networks
            <br />
            Positions: Public Relations Volunteer at GDSC & Member at Cultural
            Committee
          </span>
          <br />
  
          <br />
          <h1 className="text-[#088395] font-semibold text-xl">
            Achievements & Certifications
          </h1>
          <span className="text-[#071952]">
            <ul className="list-disc list-inside">
              <li>Cleared initial round of Outreachy Internship program</li>
              <li>Selected in HackJNU 3.0 (Delhi) Hackathon</li>
              <li>Selected among Top 10 teams at HACKIIITV</li>
              <li>
                Certifications:
                <br />
                1. Foundations of UX Design - Authorized by Google
                <br />
                2. Full Stack Web Development MASTERY Course - Novice to Expert
              </li>
            </ul>
          </span>
          <br />
          <button
            onClick={handleResumeClick}
            className="mt-6 px-4 py-2 bg-[#37B7C3] text-[#EBF4F6] font-bold rounded-md shadow-md hover:bg-[#088395] transition duration-300"
          >
            Click Here for Resume
          </button>
        </div>
      </div>
    );
  }