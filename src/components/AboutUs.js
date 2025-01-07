import React from "react";
const AboutUs = () => {
  const getmaillink=(email)=>{
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Contact`;
  }
  const teamdata = () => {
    return [
        {
            name: "Ritish Katiyar",
            role: "Team Lead",
            email: "2k22.ec.2213567@gmail.com",
            profile: "ritesh.jpeg",
            linkedin: "https://www.linkedin.com/in/ritish-katiyar-612aba260",
            github: "https://github.com/sarp4fri",
            desc: ""
        },
        {
            name: "Arya Mishra",
            role: "Sensor Subsystem Engineer",
            email: "aryasmishra071@gmail.com",
            profile: "arya.jpeg",
            linkedin: "https://www.linkedin.com/in/arya-mishra-43307525a",
            github: "https://github.com/aryasmishra",
            desc: ""
        },
        {
            name: "Rahul Kumar",
            role: "Communication Engineer",
            email: "2k22.ece.2211241@gmail.com",
            profile: "rahul.jpeg",
            linkedin: "www.linkedin.com/in/rahul-kumar-a73533261",
            github: "https://github.com/Rahulk212004",
            desc: ""
        },
        {
            name: "Sparsh Verma",
            role: "Flight Control Engineer",
            email: "sparshverma2004@gmail.com",
            profile: "sparsh.jpeg",
            linkedin: "https://www.linkedin.com/in/ssrvsparsh/",
            github: "https://github.com/ssrvsparsh",
            desc: ""
        },
        {
            name: "Yaggya",
            role: "Ground Control Software Head",
            email: "yaggyachopra01@gmail.com",
            profile: "yagya.jpeg",
            linkedin: "https://www.linkedin.com/in/yaggyachopra/",
            github: "https://github.com/yaggyachopra",
            desc: ""
        },
        {
            name: "Shikha",
            role: "On-Board Computer Engineer",
            email: "2k23.ece2311523@gmail.com",
            profile: "shikha.jpeg",
            linkedin: "https://www.linkedin.com/in/shikha-shikha-30b9aa325",
            github: "https://github.com/shikha274",
            desc: ""
        },
        {
            name: "Anushka",
            role: "Descent Control Engineer",
            email: "2k23.cs2312047@gmail.com",
            profile: "anshuka.jpeg",
            linkedin: "http://www.linkedin.com/in/anushka-v-shukla",
            github: "https://github.com/anu04xe",
            desc: ""
        },
        {
            name: "Gaurav Shahi",
            role: "AI Engineer",
            email: "shahigaurav836@gmail.com",
            profile: "gaurav.jpeg",
            linkedin: "https://www.linkedin.com/in/gaurav-shahi-90a23229b",
            github: "https://github.com/RudeHats",
            desc: ""
        },
        {
            name: "Lavitra Sahu",
            role: "Telemetry and Communication Engineer",
            email: "",
            profile: "lavitra.png",
            linkedin: "",
            github: "",
            desc: ""
        },
        {
            name: "Vaishnavi Chaurasiya",
            role: "Descent Control Engineer",
            email: "vaishnavii0302@gmail.com",
            profile: "vaishnavi.jpeg",
            linkedin: "https://www.linkedin.com/in/vaishnavi-chaurasiya-19917024a",
            github: "https://github.com/Vaishnaviii0302",
            desc: ""
        },
        {
            name: "Anshu Gupta",
            role: "Ground Control Software Head",
            email: "2k22.cscys.2212695@gmail.com",
            profile: "anshu.jpeg",
            linkedin: "http://www.linkedin.com/in/anshugupta370",
            github: "https://github.com/Anshu370",
            desc: ""
        },
        {
            name: "Arjita Sahu",
            role: "Ground Control Software Engineer",
            email: "2k22.cse.2213081@gmail.com",
            profile: "arjita.jpeg",
            linkedin: "https://www.linkedin.com/in/arjita-sahu-578a53259",
            github: "https://github.com/ArjitaSahu123",
            desc: ""
        },
        {
            name: "Riya Verma",
            role: "Descent Control Engineer",
            email: "riyav4532@gmail.com",
            profile: "riya.jpeg",
            linkedin: "https://www.linkedin.com/in/riya-verma",
            github: "https://github.com/intelliboyy",
            desc: ""
        }
    ];
};

  return (<>
    <div className="relative bg-gray-900 text-white min-h-screen flex flex-col items-center p-6">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="./intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="relative mt-28 mb-6 text-center z-10">
        <h1 className="text-4xl font-bold mb-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          About Us
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Welcome to the Vyomnauts Club! PSIT Vyomnauts is a student-led space club committed to sparking curiosity and deepening
knowledge in space science and technology. We offer a platform for students passionate about
astronomy, engineering, and space exploration to come together, learn, and collaborate. Through
solar observations, stargazing nights, workshops, and expert talks, we provide hands-on
experiences that bring cosmic phenomena closer to our members. Our goal is to build a
supportive community where students can develop technical skills, undertake space-related
projects, and share a common love for the mysteries of the universe. Join us as we reach for the
stars, one step at a time!
        </p>
      </div>
      <div className="relative flex flex-wrap justify-center mt-8 z-10">
        <section className="text-white body-font">
          <div className="container px-5 py-14 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-4xl font-bold title-font mb-4 text-white transition-all duration-500 ease-in-out transform hover:scale-105">Our Team</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
            </div>
            <div className="flex flex-wrap -m-4">
              {teamdata().map(element => {
                return (<div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={`./team/${element.profile}`} />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900 rounded-md bg-stone-50 transition-all duration-500 ease-in-out transform hover:scale-105">{element.name}</h2>
                    <h3 className="text-white mb-3">{element.role}</h3>
                    <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                    <span className="inline-flex">
                      <a className="text-white hover:scale-125" href={element.linkedin} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>
                      </a>
                      <a className="ml-2 text-white hover:scale-125" href={getmaillink(element.email)} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>)
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  </>
  );
};

export default AboutUs;
