const about = {
  title: "About me",
  description:
    "Hello! I'm Azaz Ahamed, a passionate front-end developer with a knack for creating engaging and user-friendly web experiences. I specialize in transforming ideas into beautiful, responsive, and functional websites using HTML, CSS, JavaScript, and modern front-end frameworks.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Azaz Ahamed",
    },
    {
      fieldName: "Phone",
      fieldValue:  <a href="tel:+8801922 880106">(+88) 01922 880106</a>,
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ years",
    },
    {
      fieldName: "Skype",
      fieldValue: "Azaz.o1",
    },
    {
      fieldName: "Email",
      fieldValue: <a href="mailto:azazahamed7418@gmail.com">azazahamed7418@gmail.com</a>,
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "Bangla, English",
    },
  ],
};

const About = () => {
  return (
    <div className="w-full text-center md:text-left">
      <div className="flex flex-col gap-[30px]">
        <h2 className="text-4xl font-bold">{about.title}</h2>
        <p className="max-w-[700px] text-white/60 mx-auto md:mx-0 text-justify">{about.description}</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-x-6 gap-y-6 max-w-[750px] mx-auto xl:mx-0 md:mx-0">
          {about.info.map((item, index) => {
            return (
              <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                <span className=" text-white/60">{item.fieldName}</span>
                <span className=" text-xl">{item.fieldValue}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default About;
