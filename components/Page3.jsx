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
    <div className=" flex flex-col justify-center items-center w-full h-screen">
      <div className=" flex flex-col justify-center items-center space-y-5">
        <h1 className=" xl:text-7xl md:text-5xl text-2xl font-[900] text-center">
          Trusted by Mental Health Professionals
        </h1>
        <p className=" text-center max-w-7xl w-full xl:text-2xl md:text-xl ">
          Serenity is used by thousands of psychologists and mental health
          professionals to streamline their practice and provide better care to
          their clients.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 mt-20">
        {review.map((item) => (
          <div key={item.name} className="md:w-[500px] md:h-[250px] gap-5 flex flex-col">
            <div className=" flex items-center justify-evenly">
              <Image src={profile} alt="profile" className=" w-10 h-10" />
              <div>
                <h1 className=" text-center">{item.name}</h1>
                <p className=" whitespace-nowrap">{item.address}</p>
              </div>
            </div>
            <div className=" flex gap-5 items-center justify-evenly">
              <div className=" flex gap-1">
                <Image src={star} alt="profile" className=" h-5 w-5" />
                <Image src={star} alt="profile" className=" h-5 w-5" />
                <Image src={star} alt="profile" className=" h-5 w-5" />
                <Image src={star} alt="profile" className=" h-5 w-5" />
                <Image src={star} alt="profile" className=" h-5 w-5" />
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
