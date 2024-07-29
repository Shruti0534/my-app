import Image from "next/image";
import React from "react";
import profile from "@/public/profile.svg";
import star from "@/public/star.svg";

const review = [
  {
    name: "Scott",
    address: "Bernard Hill, California",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corporis obcaecati quidem ea cumque",
  },
  {
    name: "Scott",
    address: "Bernard Hill, California",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corporis obcaecati quidem ea cumque",
  },
  {
    name: "Scott",
    address: "Bernard Hill, California",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corporis obcaecati quidem ea cumque",
  },
  {
    name: "Scott",
    address: "Bernard Hill, California",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corporis obcaecati quidem ea cumque",
  },
];

const Page3 = () => {
  return (
    <div className=" flex flex-col md:space-y-10 space-y-5 md:p-10 p-3 justify-center items-center w-full h-full min-h-screen">
      <div className=" flex flex-col text-center xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-2xl max-w-lg md:space-y-5 space-y-2">
        <h1 className=" font-extrabold xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
          Trusted by Mental Health Professionals
        </h1>
        <p className=" xl:text-2xl lg:text-xl md:text-lg sm:text-sm text-sm">
          Serenity is used by thousands of psychologists and mental health
          professionals to streamline their practice and provide better care to
          their clients.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-20">
        {review.map((item) => (
          <div key={item.name} className="gap-5 max-w-[400px] w-full flex flex-col lg:text-lg md:text-sm text-xs">
            <div className=" flex items-center justify-evenly">
              <Image src={profile} alt="profile" className=" md:w-10 md:h-10 w-5 h-5" />
              <div>
                <h1 className=" text-center">{item.name}</h1>
                <p className=" whitespace-nowrap">{item.address}</p>
              </div>
            </div>
            <div className=" flex gap-5 items-center justify-evenly">
              <div className=" flex gap-1">
                <Image src={star} alt="profile" className=" md:h-5 md:w-5 h-2 w-2" />
                <Image src={star} alt="profile" className=" md:h-5 md:w-5 h-2 w-2" />
                <Image src={star} alt="profile" className=" md:h-5 md:w-5 h-2 w-2" />
                <Image src={star} alt="profile" className=" md:h-5 md:w-5 h-2 w-2" />
                <Image src={star} alt="profile" className=" md:h-5 md:w-5 h-2 w-2" />
              </div>
              <div>1 week ago</div>
            </div>
            <div className=" text-center px-10">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page3;
