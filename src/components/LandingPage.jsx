import React from "react";
import PropTypes from "prop-types";

import { useState } from "react";

const mainNavbar = [
  {
    id: 1,
    name: "Find Work",
    url: "www.google.com",
    children: [
      { id: 1, name: "home1", url: "www.google.com" },
      { id: 2, name: "home2", url: "www.google.com" },
    ],
  },
  {
    id: 2,
    name: "Find Talent",
    url: "www.google.com",
    children: [
      { id: 1, name: "home1", url: "www.google.com" },
      { id: 2, name: "home2", url: "www.google.com" },
    ],
  },
  {
    id: 3,
    name: "Our Services",
    url: "www.google.com",
    children: [
      { id: 1, name: "home1", url: "www.google.com" },
      { id: 2, name: "home2", url: "www.google.com" },
    ],
  },
  {
    id: 4,
    name: "Blog",
    url: "www.google.com",
    children: [
      { id: 1, name: "home1", url: "www.google.com" },
      { id: 2, name: "home2", url: "www.google.com" },
    ],
  },
];

const companies = [
  {
    id: 1,
    logo: "uploads/company1.png",
  },
  {
    id: 2,
    logo: "uploads/company2.png",
  },
  {
    id: 3,
    logo: "uploads/company3.png",
  },
  {
    id: 4,
    logo: "uploads/company4.png",
  },
];

const jobs = [
  {
    id: 1,
    title: "Technical content writer",
    employer: "Shopify",
    location: "London, UK",
    skills: ["HTML", "CSS3", "Bootstrap", "Redux"],
    salary: "$80K - 110K",
    type: "Full time",
    image: "../../uploads/technical-writer.jpg",
  },
  {
    id: 2,
    title: "Front-end developer",
    employer: "Deezroo",
    location: "Canada, USA",
    skills: ["HTML", "CSS3", "Bootstrap", "Redux"],
    salary: "$80K - 110K",
    type: "Internship",
    image: "../../uploads/technical-writer.jpg",
  },
  {
    id: 3,
    title: "Expert Team Leader",
    employer: "Photoshop",
    location: "Denver, USA",
    skills: ["HTML", "CSS3", "Bootstrap", "Redux"],
    salary: "$80K - 110K",
    type: "Full time",
    image: "../../uploads/technical-writer.jpg",
  },
  {
    id: 4,
    title: "New Shopify Developer",
    employer: "Shopify",
    location: "London, UK",
    skills: ["HTML", "CSS3", "Bootstrap", "Redux"],
    salary: "$80K - 110K",
    type: "Full time",
    image: "../../uploads/technical-writer.jpg",
  },
  {
    id: 5,
    title: "Sr. Magento Developer",
    employer: "Shopify",
    location: "London, UK",
    skills: ["HTML", "CSS3", "Bootstrap", "Redux"],
    salary: "$80K - 110K",
    type: "Full time",
    image: "../../uploads/technical-writer.jpg",
  },
  {
    id: 6,
    title: "Sr. Magento Developer",
    employer: "Shopify",
    location: "London, UK",
    skills: ["HTML", "CSS3", "Bootstrap", "Redux"],
    salary: "$80K - 110K",
    type: "Full time",
    image: "../../uploads/technical-writer.jpg",
  },
  {
    id: 7,
    title: "Sr. Magento Developer",
    employer: "Shopify",
    location: "London, UK",
    skills: ["HTML", "CSS3", "Bootstrap", "Redux"],
    salary: "$80K - 110K",
    type: "Full time",
    image: "../../uploads/technical-writer.jpg",
  },
  {
    id: 8,
    title: "This is just a test",
    employer: "Shopify",
    location: "London, UK",
    skills: ["HTML", "CSS3", "Bootstrap", "Redux"],
    salary: "$80K - 110K",
    type: "Full time",
    image: "../../uploads/technical-writer.jpg",
  },
];

const jobCategories = [
  {
    id: 1,
    icon: "../../uploads/file-invoice-solid.svg",
    title: "Accounting & Finance",
    description: "You can view all popular jobs according your future careers.",
    active_jobs: "122",
  },
  {
    id: 2,
    icon: "../../uploads/file-invoice-solid.svg",
    title: "Automotive Jobs",
    description: "You can view all popular jobs according your future careers.",
    active_jobs: "122",
  },
  {
    id: 3,
    icon: "../../uploads/file-invoice-solid.svg",
    title: "Business & Tech",
    description: "You can view all popular jobs according your future careers.",
    active_jobs: "122",
  },
  {
    id: 4,
    icon: "../../uploads/file-invoice-solid.svg",
    title: "Education Training",
    description: "You can view all popular jobs according your future careers.",
    active_jobs: "122",
  },
  {
    id: 5,
    icon: "../../uploads/file-invoice-solid.svg",
    title: "Healthcare",
    description: "You can view all popular jobs according your future careers.",
    active_jobs: "122",
  },
  {
    id: 6,
    icon: "../../uploads/file-invoice-solid.svg",
    title: "Restaurant & Food",
    description: "You can view all popular jobs according your future careers.",
    active_jobs: "122",
  },
  {
    id: 7,
    icon: "../../uploads/file-invoice-solid.svg",
    title: "Restaurant & Food",
    description: "You can view all popular jobs according your future careers.",
    active_jobs: "122",
  },
  {
    id: 8,
    icon: "../../uploads/file-invoice-solid.svg",
    title: "This is a test",
    description: "You can view all popular jobs according your future careers.",
    active_jobs: "122",
  },
];

const talents = [
  {
    id: 1,
    name: "Sr. Shaurya Peet",
    jobtitle: "Sr. Web Designer",
    salary: "70 / H",
    experience: "5 Years",
    score: "4.6",
    photoname: "../../uploads/img1.jpg",
  },
  {
    id: 2,
    name: "Leila T lindsey",
    jobtitle: "Sr. Web Designer",
    salary: "70 / H",
    experience: "5 Years",
    score: "4.6",
    photoname: "../../uploads/img1.jpg",
  },
  {
    id: 3,
    name: "Sr. Shaurya Peet",
    jobtitle: "Sr. Web Designer",
    salary: "70 / H",
    experience: "5 Years",
    score: "4.6",
    photoname: "../../uploads/img1.jpg",
  },
  {
    id: 4,
    name: "Sr. Shaurya Peet",
    jobtitle: "Sr. Web Designer",
    salary: "70 / H",
    experience: "5 Years",
    score: "4.6",
    photoname: "../../uploads/img1.jpg",
  },
  {
    id: 5,
    name: "Sr. Shaurya Peet",
    jobtitle: "Sr. Web Designer",
    salary: "70 / H",
    experience: "5 Years",
    score: "4.6",
    photoname: "../../uploads/img1.jpg",
  },
  {
    id: 6,
    name: "Sr. Shaurya Peet",
    jobtitle: "Sr. Web Designer",
    salary: "70 / H",
    experience: "5 Years",
    score: "4.6",
    photoname: "../../uploads/img1.jpg",
  },
  {
    id: 7,
    name: "Sr. Shaurya Peet",
    jobtitle: "Sr. Web Designer",
    salary: "70 / H",
    experience: "5 Years",
    score: "4.6",
    photoname: "../../uploads/img1.jpg",
  },
  {
    id: 8,
    name: "Sr. Shaurya Peet",
    jobtitle: "Sr. Web Designer",
    salary: "70 / H",
    experience: "5 Years",
    score: "4.6",
    photoname: "../../uploads/img1.jpg",
  },
];
function LandingPage(props) {
  return (
    <div className="text-primary-300">
      <Header />
      <Banner />
      <CompaniesGrid />
      <JobGrid />
      <Showcase />
      <VisitorCTA2 />
      <JobCategoriesGrid />
      <VisitorCTA />
      <TalentsGrid />
      <PackagePlans />
      <EmailSubscribe />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <NavigationBar />
    </header>
  );
}

function NavigationBar() {
  return (
    <nav className="py-4 page-px border-b border-slate-200 transition-all duration-500">
      <div className="mx-auto max-w-screen-xl overflow-hidden">
        <div className="flex items-center -mx-4">
          <div className="xl:hidden px-4">
            <div className="w-9 cursor-pointer px-1 py-1.5">
              <div className="w-full h-0.5 bg-slate-500"></div>
              <div className="w-full h-0.5 my-1.5 bg-slate-500"></div>
              <div className="w-full h-0.5 bg-slate-500"></div>
            </div>
          </div>

          <div className="px-4">
            <Logo />
          </div>

          <ul className="hidden xl:flex items-center px-4 font-semibold">
            {mainNavbar.map((item) => (
              <li className="py-3.5 px-3 cursor-pointer hover:text-primary-200" key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>

          <div className="ml-auto px-4 overflow-hidden">
            <ul className="flex items-center -mx-3">
              <li className="px-3">
                <div className="py-3.5 px-3 flex items-center cursor-pointer hover:text-primary-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.2,5l5.8,5.8c0.3,0.3,0.5,0.8,0.5,1.3c0,0.5-0.2,0.9-0.5,1.3L10.2,19c-0.3,0.3-0.7,0.5-1.1,0.5c-0.9,0-1.6-0.7-1.6-1.6 V15h-6C0.7,15,0,14.3,0,13.5v-3C0,9.7,0.7,9,1.5,9h6V6.1c0-0.9,0.7-1.6,1.6-1.6C9.5,4.5,9.9,4.7,10.2,5z M16.5,19.5h3 c0.8,0,1.5-0.7,1.5-1.5V6c0-0.8-0.7-1.5-1.5-1.5h-3C15.7,4.5,15,3.8,15,3s0.7-1.5,1.5-1.5h3C22,1.5,24,3.5,24,6v12 c0,2.5-2,4.5-4.5,4.5h-3c-0.8,0-1.5-0.7-1.5-1.5S15.7,19.5,16.5,19.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="hidden md:block ml-3">Sign In</div>
                </div>
              </li>

              <li className="px-3">
                <button className="btn-primary-200 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.4,20.4C2.4,20.4,0,18,0,15c0-2.4,1.5-4.4,3.6-5.1c0-0.1,0-0.2,0-0.3c0-3.3,2.7-6,6-6c2.2,0,4.2,1.2,5.2,3	c0.6-0.4,1.3-0.6,2-0.6c2,0,3.6,1.6,3.6,3.6c0,0.5-0.1,0.9-0.2,1.3c2.2,0.4,3.8,2.4,3.8,4.7c0,2.7-2.1,4.8-4.8,4.8H5.4z M8.4,12.3 c-0.4,0.4-0.4,0.9,0,1.3c0.4,0.3,0.9,0.4,1.3,0l1.5-1.5v5c0,0.5,0.4,0.9,0.9,0.9c0.5,0,0.9-0.4,0.9-0.9v-5l1.5,1.5 c0.4,0.4,0.9,0.4,1.3,0c0.3-0.4,0.4-0.9,0-1.3l-3-3c-0.4-0.4-0.9-0.4-1.3,0L8.4,12.3L8.4,12.3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="hidden md:block ml-3">Upload Resume</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Logo() {
  return <img className="w-40 max-w-[10rem]" src="./src/assets/logo-main-version.svg" />;
}

function Banner() {
  return (
    <div className="relative">
      {/* <video
          autoPlay
          muted
          loop
          className="z-0 absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="assets/freelancer.mp4" type="video/mp4" />
        </video> */}

      <img
        className="z-0 absolute inset-0 w-full h-full object-cover object-center"
        src="assets/banner.jpg"
        alt="banner"
      />

      <div className="z-10 relative page-px flex bg-slate-800/20 text-black h-screen transition-all duration-500">
        <div className="flex-1 max-w-screen-xl m-auto">
          <div className="max-w-screen-lg mx-auto mb-16 text-primary-300 text-center">
            <h1 className="text-5xl font-bold capitalize mb-4">
              Find the great jobs
              <br />
              offer for you
            </h1>
            <p className="text-xl">
              Getting a new job is never easy. Check what new jobs we have in store for you on
              Devadoot.
            </p>
          </div>

          <form>
            <div className="max-w-screen-lg mx-auto flex items-center p-2 bg-white border border-transparent focus-within:border-primary-200 rounded transition-all duration-300">
              <div className="flex-1 flex items-center">
                <div className="px-2 text-slate-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>

                <input
                  type="text"
                  className="flex-1 p-4 text-base outline-none transition-all duration-300"
                  placeholder="Skills, Designations, Keyword"
                />
              </div>

              <div className="w-px h-12 mx-4 bg-slate-200"></div>

              <DropdownMenu />

              <button className="btn-primary-200 px-8 ml-2">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function DropdownMenu({ display }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    console.log(option);
  };

  const options = jobCategories;

  return (
    <div className="flex-1 flex items-center relative">
      <div className="px-2 text-slate-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
          <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
        </svg>
      </div>

      <div className="flex-1 p-4 transition-all duration-300" onClick={toggleDropdown}>
        {selectedOption || "Select a job category"}
      </div>

      <div
        className={`${
          isOpen ? "origin-center	rotate-[-180deg] " : ""
        }px-2 text-slate-500 transition-all duration-300`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={4}
          stroke="currentColor"
          className="w-3 h-3"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>

      {isOpen && (
        <ul className="absolute top-full inset-x-0 bg-white border border-primary-100 rounded">
          {options.map((item) => (
            <li
              key={item.id}
              className="px-4 py-2 hover:bg-primary-200 hover:text-white transition-all duration-300"
              onClick={() => handleOptionClick(item.title)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function CompaniesGrid() {
  return (
    <div className="page-px py-12 bg-primary-200 text-white">
      <div className="max-w-screen-xl mx-auto overflow-hidden">
        <h1 className="text-3xl font-semibold text-center mb-8">
          The fastest-growing companies use Devadoot
        </h1>

        <div className="text-xl text-center">
          At vero eos et accusamus et iusto odio dignimissomos ducimos qui blanditis praesentium
          <br /> volumptum deleniti atque quos dolores
        </div>

        {/* <div className="flex flex-wrap justify-center -m-4">
            {companies.map((item) => (
              <div className="p-4 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5" key={item.id}>
                <div className="w-full h-full">
                  <img
                    className="w-full h-full object-cover object-center"
                    src="uploads/logo.png"
                  />
                </div>
              </div>
            ))}
          </div> */}
      </div>
    </div>
  );
}

function JobGrid() {
  return (
    <div className="my-16 page-px">
      <div className="max-w-screen-xl mx-auto overflow-hidden">
        <div className="max-w-screen-lg mx-auto mb-8">
          <h1 className="text-3xl font-bold text-center">Featured Jobs</h1>
          <p className="text-center mt-4">
            At vero eos et accusamus et iusto odio dignimissomos ducimos qui
            <br />
            blanditis praesentium volumptum deleniti atque quos dolores
          </p>
        </div>

        <div className="flex flex-wrap justify-center -mx-2 -my-4">
          {jobs.map((item) => (
            <div className="px-2 py-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" key={item.id}>
              <JobItem jobObject={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function JobItem({ jobObject }) {
  return (
    <div className="border border-primary-100 hover:border-primary-200 rounded transition-all duration-300">
      <div className="flex items-center mt-2 mr-2 mb-2 text-xs">
        <div className="px-6 py-2 bg-secondary-100/20 text-secondary-100 rounded-r-full">
          Featured
        </div>
        <div className="px-6 py-2 ml-auto bg-primary-100/50 text-primary-200 rounded">
          {jobObject.type}
        </div>
      </div>

      <div className="m-2 relative pt-[56.25%]">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={jobObject.image}
        />
      </div>

      <p className="m-2 text-slate-600 text-sm text-center">{jobObject.employer}</p>

      <h5 className="m-2 text-base font-bold text-center">{jobObject.title}</h5>

      <p className="m-2 flex items-center text-slate-500 text-sm justify-center">
        <span className="pr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span>{jobObject.location}</span>
      </p>

      <div className="m-2 overflow-hidden">
        <div className="flex flex-wrap justify-center -m-2">
          {jobObject.skills.map((skill) => (
            <div className="p-2" key={skill}>
              <div className="px-2 py-1 text-xs text-slate-600 bg-slate-200 rounded">{skill}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-2 my-4 overflow-hidden">
        <div className="flex flex-wrap items-center justify-center -m-2">
          <div className="p-2 flex-1">
            <span className="font-bold">{jobObject.salary}</span>
            <span className="text-slate-500">\Year</span>
          </div>
          <div className="p-2">
            <button className="btn-primary-100 py-2 text-sm">Quick Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Showcase() {
  const servicesShowcase = [
    "Corporate Business jobs",
    "Company Showcase",
    "Creative Services",
    "News & Updates",
    "New Business Innovation",
    "Online Bookings",
    "Online E-commerce",
    "and much more...",
    "Residential Services",
  ];

  return (
    <div className="my-16 flex">
      <div className="flex-1 bg-gray-300">
        <img
          className="w-full h-full object-cover object-center"
          src="assets/showcase.jpg"
          alt="Company showcase"
        />
      </div>

      <div className="flex-1 page-px py-12">
        <div className="mb-4">
          <span className="px-4 py-2 bg-primary-100/50 text-primary-200 rounded">Our showcase</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">Best Job Search Platform Experience for you</h1>
        <p>
          Lorem ipsum dolor sit amet, consecttur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div className="mt-8 overflow-hidden">
          <ul className="flex flex-wrap -mx-16 -my-1">
            {servicesShowcase.map((item) => (
              <li key={item} className="px-16 py-1 w-1/2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-primary-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="ml-1 text-slate-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <button className="mt-8 btn-primary-200 px-8">Get Started</button>
      </div>
    </div>
  );
}

function VisitorCTA2() {
  const servicesShowcase = [
    "Corporate Business jobs",
    "Company Showcase",
    "Creative Services",
    "News & Updates",
    "New Business Innovation",
    "Online Bookings",
    "Online E-commerce",
    "and much more...",
    "Residential Services",
  ];

  return (
    <div className="my-16 page-px overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex -m-8">
          <div className="p-8 flex-1">
            <div className="relative h-full">
              <div
                className="z-0 absolute top-0 left-0 w-36 h-52"
                style={{
                  backgroundImage: "radial-gradient(#0054ff 2px,transparent 2.5px)",
                  backgroundSize: "0.75rem 0.75rem",
                }}
              ></div>

              <div className="z-20 relative h-full min-h-[40rem] pr-8 pb-8">
                <div className="z-20 relative h-full rounded-t-full overflow-hidden">
                  <img
                    src="assets/showcase.jpg"
                    className="w-full h-full object-cover object-right-bottom"
                  />
                </div>
              </div>

              <div
                className="z-10 absolute bottom-0 right-0 w-36 h-52"
                style={{
                  backgroundImage: "radial-gradient(#0054ff 2px,transparent 2.5px)",
                  backgroundSize: "0.75rem 0.75rem",
                }}
              ></div>
            </div>
          </div>

          <div className="px-8 py-24 flex-1">
            <div className="mb-4">
              <span className="px-4 py-2 bg-primary-100/50 text-primary-200 rounded">
                Our showcase
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-4">Best Job Search Platform Experience for you</h1>
            <p>
              Lorem ipsum dolor sit amet, consecttur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="mt-8 overflow-hidden">
              <ul className="flex flex-wrap -mx-16 -my-1">
                {servicesShowcase.map((item) => (
                  <li key={item} className="px-16 py-1 w-1/2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-primary-200"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="ml-1 text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-8 btn-primary-200 px-8">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function JobCategoriesGrid() {
  return (
    <div className="my-16 page-px py-16 bg-slate-100">
      <div className="max-w-screen-xl mx-auto overflow-hidden">
        <div className="max-w-screen-lg mx-auto mb-8">
          <h1 className="text-3xl font-bold text-center">Explore Top jobCategories</h1>
          <p className="text-lg text-center mt-4">
            At vero eos et accusamus et iusto odio dignimissomos ducimos qui blanditis preesentium
            voluptatum delenti atque corrupti quos dolores
          </p>
        </div>

        <div className="flex flex-wrap -mx-2 -my-4">
          {jobCategories.map((item) => (
            <div className="p-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" key={item.id}>
              <CategoryItem categoryObject={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CategoryItem({ categoryObject }) {
  return (
    <div className="p-4 bg-white rounded">
      <img className="w-10 h-10 object-contain object-center" src={categoryObject.icon} />

      <h5 className="my-4 text-lg font-bold hover:text-primary-200 transition-all duration-300">
        {categoryObject.title}
      </h5>

      <p className="my-4">{categoryObject.description}</p>

      <p className="text-slate-600 text-sm">
        {categoryObject.active_jobs}{" "}
        {categoryObject.active_jobs === 1 ? "Active job" : "Active jobs"}
      </p>
    </div>
  );
}

function VisitorCTA() {
  return (
    <div className="bg-primary-200 text-white page-px my-16">
      <div className="max-w-screen-xl mx-auto py-16 text-white">
        <h1 className="text-3xl font-bold text-center capitalize text-primary-300">
          Choose what you need
        </h1>
        <p className="text-center mt-4 text-primary-300">
          At vero eos et accusamus et iusto odio dignissimos duc imus qui blanditiis praesentium
          voluptatum
          <br /> deleniti atque corrupti quos dolores
        </p>

        <div className="mt-8 overflow-hidden">
          <div className="flex flex-wrap -m-2">
            <div className="w-1/3 p-2">
              <div className="group bg-white/30 hover:bg-white/40 rounded-lg p-8 transition-all duration-300">
                <h1 className="group-hover:text-primary-200 text-5xl font-bold mb-4 transition-all duration-300">
                  01.
                </h1>
                <h5 className="text-xl font-bold my-2 transition-all duration-300">
                  Create an account
                </h5>
                <p>
                  Post A Job To Tell Us About Your Project. We'll Quickly Match You With The Right
                  Freelancers Find Place Best. Nor again is there anyone who loves.
                </p>
              </div>
            </div>

            <div className="w-1/3 p-2">
              <div className="group bg-white/30 hover:bg-white/40 rounded-lg p-8 transition-all duration-300">
                <h1 className="text-white group-hover:text-primary-200 text-5xl font-bold mb-4 transition-all duration-300">
                  02.
                </h1>
                <h5 className="text-xl font-bold my-2 transition-all duration-300">Search jobs</h5>
                <p>
                  Post A Job To Tell Us About Your Project. We'll Quickly Match You With The Right
                  Freelancers Find Place Best. Nor again is there anyone who loves.
                </p>
              </div>
            </div>

            <div className="w-1/3 p-2">
              <div className="group bg-white/30 hover:bg-white/40 rounded-lg p-8 transition-all duration-300">
                <h1 className="text-white group-hover:text-primary-200 text-5xl font-bold mb-4 transition-all duration-300">
                  03.
                </h1>
                <h5 className="text-xl font-bold my-2 transition-all duration-300">
                  Save & apply Jobs
                </h5>
                <p>
                  Post A Job To Tell Us About Your Project. We'll Quickly Match You With The Right
                  Freelancers Find Place Best. Nor again is there anyone who loves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TalentsGrid() {
  return (
    <div className="bg-slate-200 page-px my-16">
      <div className="max-w-screen-xl mx-auto py-16">
        <h1 className="text-3xl font-bold text-center mb-4">Hire Talents & Experts</h1>
        <p className="text-center">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores
        </p>

        <div className="my-8 overflow-hidden">
          <div className="flex flex-wrap -m-3">
            {talents.map((item) => (
              <div className="w-1/4 p-3" key={item.id}>
                <div className="bg-white rounded-lg p-4">
                  <div className="bg-gray-300 w-24 h-24 rounded-full mx-auto"></div>
                  <div className="text-center my-1">{item.score}</div>
                  <h5 className="font-bold text-center">{item.name}</h5>
                  <p className="text-slate-500 text-sm text-center">{item.jobtitle}</p>

                  <div className="my-8 overflow-hidden">
                    <div className="flex items-center text-sm -m-2">
                      <div className="flex-1 p-2">{item.salary}</div>
                      <div className="p-2">{item.experience} exp.</div>
                    </div>
                  </div>

                  <div className="my-8 overflow-hidden">
                    <div className="flex items-center text-sm -m-2">
                      <div className="flex-1 p-2">
                        <button className="bg-slate-200 px-4 py-2 rounded">Message</button>
                      </div>
                      <div className="p-2">
                        <button className="bg-primary-200 text-white px-4 py-2 rounded">
                          View Detail
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PackagePlans() {
  return (
    <div className="page-px">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">Choose your Package</h1>
        <p className="text-center">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum
          <br /> deleniti atque corrupti quos dolores
        </p>

        <div className="mt-8 overflow-hidden">
          <div className="flex flex-wrap -m-3">
            <div className="w-1/3 p-3">
              <div className="border border-slate-400 rounded p-2">
                <div className="bg-primary-300 text-white px-4 py-8 rounded">
                  <h5 className="text-2xl font-bold uppercase text-center">Basic</h5>

                  <div className="font-bold text-center mt-8">
                    <span className="text-2xl font-semibold">$</span>
                    <span className="text-7xl font-bold">29</span>
                    <span className="text-2xl font-semibold">/Mon</span>
                  </div>
                </div>

                <div className="p-6">
                  <ul className="text-center">
                    <li className="my-3">1 GB Ram</li>
                    <li className="my-3">2 GB Memory</li>
                    <li className="my-3">1 Core Processor</li>
                    <li className="my-3">32 GB SSD Disk</li>
                    <li className="my-3">1 TB Transfer</li>
                  </ul>

                  <button className="mt-6 border border-primary-300 hover:bg-primary-300 text-primary-300 hover:text-white p-4 w-full rounded transition-all duration-300">
                    Get started
                  </button>
                </div>
              </div>
            </div>

            <div className="w-1/3 p-3">
              <div className="border border-slate-400 rounded p-2">
                <div className="bg-primary-200 text-white px-4 py-8 rounded">
                  <h5 className="text-2xl font-bold uppercase text-center">PREMIUM</h5>

                  <div className="font-bold text-center mt-8">
                    <span className="text-2xl font-semibold">$</span>
                    <span className="text-7xl font-bold">40</span>
                    <span className="text-2xl font-semibold">/Mon</span>
                  </div>
                </div>

                <div className="p-6">
                  <ul className="text-center">
                    <li className="my-3">1 GB Ram</li>
                    <li className="my-3">2 GB Memory</li>
                    <li className="my-3">1 Core Processor</li>
                    <li className="my-3">32 GB SSD Disk</li>
                    <li className="my-3">1 TB Transfer</li>
                  </ul>

                  <button className="mt-6 border border-primary-200 bg-primary-200 text-white p-4 w-full rounded transition-all duration-300">
                    Get started
                  </button>
                </div>
              </div>
            </div>

            <div className="w-1/3 p-3">
              <div className="border border-slate-400 rounded p-2">
                <div className="bg-primary-300 text-white px-4 py-8 rounded">
                  <h5 className="text-2xl font-bold uppercase text-center">ULTIMATE</h5>

                  <div className="font-bold text-center mt-8">
                    <span className="text-2xl font-semibold">$</span>
                    <span className="text-7xl font-bold">120</span>
                    <span className="text-2xl font-semibold">/Mon</span>
                  </div>
                </div>

                <div className="p-6">
                  <ul className="text-center">
                    <li className="my-3">1 GB Ram</li>
                    <li className="my-3">2 GB Memory</li>
                    <li className="my-3">1 Core Processor</li>
                    <li className="my-3">32 GB SSD Disk</li>
                    <li className="my-3">1 TB Transfer</li>
                  </ul>

                  <button className="mt-6 border border-primary-300 hover:bg-primary-300 text-primary-300 hover:text-white p-4 w-full rounded transition-all duration-300">
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmailSubscribe() {
  return (
    <div className="my-16 page-px bg-green-600 text-white">
      <div className="max-w-screen-md mx-auto py-12">
        <h1 className="text-3xl font-bold text-center">Are you already working with us?</h1>
        <p className="my-4 text-center">
          At vero et accusamos et iusoto odio dignnissimos ducimos qui blanditis praesentium
          volumptatum deleniti atque quos doloures et quas molestias{" "}
        </p>

        <form className="py-8">
          <div className="mx-auto flex items-center p-2 bg-white border border-transparent focus-within:border-primary-200 rounded">
            <input
              type="text"
              className="flex-1 p-4 text-base outline-none transition-all duration-500"
              placeholder="Enter Your Email"
            />

            <button className="btn-primary-200">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function CardsFull() {
  return (
    <div className="flex flex-wrap">
      <div className="lg:flex-1 w-full page-px py-12 bg-primary-300 text-white">
        <h1 className="text-3xl font-bold text-center">
          Hire talents & experts for your web development
        </h1>
        <p className="text-xl text-center my-8">
          Sed ut perspiciatis unde omnis iste natus errorr sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam
        </p>
        <button className="btn-white block mx-auto">Hire Us</button>
      </div>

      <div className="lg:flex-1 w-full page-px py-12 bg-primary-200 text-white">
        <h1 className="text-3xl font-bold text-center">
          We are experts in web design and development
        </h1>
        <p className="text-xl text-center my-8">
          Sed ut perspiciatis unde omnis iste natus errorr sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam
        </p>
        <button className="btn-white block mx-auto">Join Us</button>
      </div>

      <div className="lg:flex-1 w-full page-px py-12 bg-primary-100 text-primary-300">
        <h1 className="text-3xl font-bold text-center">
          You are a visitor with an HR need and you want to review CVs
        </h1>
        <p className="text-xl text-center my-8">
          Sed ut perspiciatis unde omnis iste natus errorr sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam
        </p>
        <button className="btn-white block mx-auto">Browse CVs</button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="my-12 page-px">
      <div className="max-w-screen-xl mx-auto overflow-hidden">
        <div className="flex -m-8">
          <div className="p-8">
            <div>
              <Logo />
            </div>
            <p className="my-4 text-slate-600">
              Collins Street West, Victoria Near Bank Road
              <br />
              Australia QHR1254
            </p>

            <div className="mt-12">
              <ul className="flex flex-wrap -m-1">
                <li className="p-1">
                  <div className="p-2 bg-slate-200 text-slate-500 rounded-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                    </svg>
                  </div>
                </li>

                <li className="p-1">
                  <div className="p-2 bg-slate-200 text-slate-500 rounded-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </div>
                </li>

                <li className="p-1">
                  <div className="p-2 bg-slate-200 text-slate-500 rounded-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M256 8C119.1 8 8 119.1 8 256S119.1 504 256 504 504 392.9 504 256 392.9 8 256 8zM185.3 380a124 124 0 0 1 0-248c31.3 0 60.1 11 83 32.3l-33.6 32.6c-13.2-12.9-31.3-19.1-49.4-19.1-42.9 0-77.2 35.5-77.2 78.1S142.3 334 185.3 334c32.6 0 64.9-19.1 70.1-53.3H185.3V238.1H302.2a109.2 109.2 0 0 1 1.9 20.7c0 70.8-47.5 121.2-118.8 121.2zM415.5 273.8v35.5H380V273.8H344.5V238.3H380V202.8h35.5v35.5h35.2v35.5z" />
                    </svg>
                  </div>
                </li>

                <li className="p-1">
                  <div className="p-2 bg-slate-200 text-slate-500 rounded-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                    </svg>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-8">
            <div className="font-bold text-primary-200 mb-4">For Clients</div>
            <ul>
              <li className="my-2">Talent Marketplace</li>
              <li className="my-2">Payroll Services</li>
              <li className="my-2">Direct Contracts</li>
              <li className="my-2">Hire Worldwide</li>
              <li className="my-2">Hire in the USA</li>
              <li className="my-2">How to Hire</li>
            </ul>
          </div>

          <div className="p-8">
            <div className="font-bold text-primary-200 mb-4">Our Resources</div>
            <ul>
              <li className="my-2">Free Business tools</li>
              <li className="my-2">Affiliate Program</li>
              <li className="my-2">Success Stories</li>
              <li className="my-2">Upwork Reviews</li>
              <li className="my-2">Resources</li>
              <li className="my-2">Help & Support</li>
            </ul>
          </div>

          <div className="p-8">
            <div className="font-bold text-primary-200 mb-4">The company</div>
            <ul>
              <li className="my-2">About Us</li>
              <li className="my-2">Leadership</li>
              <li className="my-2">Contact Us</li>
              <li className="my-2">Investor Relations</li>
              <li className="my-2">Trust, Safety & Security</li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-sm text-slate-500">© 2023 Devadoot</p>
        </div>
      </div>
    </div>
  );
}

LandingPage.propTypes = {};

export default LandingPage;
