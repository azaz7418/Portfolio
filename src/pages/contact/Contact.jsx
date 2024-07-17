import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { ConfigProvider, Select } from "antd";
import { useState } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+88) 01922 880106",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "azazahamed7418@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Sathalia, Koyra, Khulna",
  },
];
const { Option, OptGroup } = Select;

const Contact = () => {
  //   const handleChange = (event) => {
  //     setSelectedService(event.target.value);
  //   };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeInOut" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row md:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] md:w-[54%] order-2 md:order-none xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h2 className="text-4xl text-accent">Let's work together</h2>
              <p className=" text-white/60">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat aliquam hic sapiente magni sed.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="firstName"
                  placeholder="First name"
                  className="flex h-[48px] rounded-md border-white/10  font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none focus:border focus:border-accent"
                />

                <input
                  type="lastName"
                  placeholder="Last name"
                  className="flex h-[48px] rounded-md border-white/10  font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none focus:border focus:border-accent"
                />

                <input
                  type="email"
                  placeholder="Email address"
                  className="flex h-[48px] rounded-md border-white/10  font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none focus:border focus:border-accent"
                />

                <input
                  type="phone"
                  placeholder="Phone number"
                  className="flex h-[48px] rounded-md border-white/10  font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none focus:border focus:border-accent"
                />
              </div>
              {/* select */}
              <div className="">
                <ConfigProvider
                  theme={{
                    token: {
                        /* here is your global tokens */
                        colorBgContainer: "transparent",
                        colorBgContainerDisabled: "transparent",
                        colorErrorBg: "transparent",
                        colorTextDescription: "white",
                        colorTextPlaceholder: "transparent",
                        colorTextQuaternary: "transparent",
                        controlOutline: "#00ff99",
                        controlOutlineWidth:1,
                        fontFamily:"none",
                        controlHeight:48,
                        colorFillSecondary: "#1c1c22",
                        colorBgElevated: "#1c1c22",
                        colorPrimaryHover: "transparent",
                        colorBorder:"transparent",
                        

                      },
                    components: {
                      Select: {
                        /* here is your component tokens */
                        multipleItemBg: "transparent",
                        multipleItemColorDisabled: "transparent",
                        multipleSelectorBgDisabled: "transparent",
                        optionActiveBg:"#00ff99",
                        optionFontSize: "16px",
                        optionSelectedBg: "#00ff99",
                        optionPadding: "5px",
                        optionSelectedColor:"#1c1c22",
                        selectorBg:"#1c1c22",
                        colorPrimary: "transparent",
                        colorTextPlaceholder: "rgb(255 255 255 / 0.6)",
                        colorIcon: "rgb(255 255 255 / 0.6)",
                        colorBorder: "transparent",
                        fontSize: "18px",
                        colorText: "white",
                        colorFocus:"#00ff99",
                        fontFamily:"none"
                      },
                    },
                  }}
                >
                  <Select className=" w-full " placeholder="Select a service">
                    {/* <Option value="" disabled hidden>
                      Select a service
                    </Option> */}
                    <OptGroup
                      label="Select a service"
                      className="max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-opacity-10 text-white shadow-md"
                    >
                      <Option value="est">Web Development</Option>
                      <Option value="cst">UI/UX Design</Option>
                      <Option value="mst">Logo Design</Option>
                    </OptGroup>
                  </Select>
                </ConfigProvider>
              </div>
              <textarea name="" id="" placeholder="Type your message here" className=" h-[200px] flex min-h-[80px] w-full rounded-md border border-white/10 bg-primary px-4 py-5 text-base placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"/>
              <button className="button max-w-40">Send message</button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1  flex items-center xl:justify-end md:justify-end order-1 xl:order-none md:order-none mb-8 xl:mb-0 md:mb-0">
            <ul className="flex flex-col gap-10">
              {
                info.map((item, index)=>{
                  return <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] md:w-[72px] xl:h-[72px] md:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className=" flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
// flex w-full items-center justify-between rounded-md border border-opacity-10 bg-primary px-4 py-4 text-base text-white placeholder-opacity-10 focus:border-accent outline-none

export default Contact;
