import React from "react";

const items = [
  {
    name: "Mental Health Assessments",
    desc: "Administer a wide range of validated psychological assessments to your clients, with automatic scoring and reporting.",
  },
  {
    name: "Appointment Booking",
    desc: "Allow your clients to easily book appointments online, with automatic reminders and calendar integration.",
  },
  {
    name: "Secure Payments",
    desc: "Seamlessly process payments from yout clients, including insurance claims, with our HIPAA-compliant payment processing.",
  },
];
const Page2 = () => {
  return (
    <div className="bg-neutral-100 p-3 md:p-10 flex flex-col justify-center items-center w-full h-full min-h-screen">
      <div className=" flex flex-col text-center xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-2xl max-w-lg md:space-y-5 space-y-2">
        <div className=" md:text-lg text-xs">Key Features</div>
        <h1 className=" font-extrabold xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
          Streamline Your Practice
        </h1>
        <p className=" xl:text-2xl lg:text-xl md:text-lg sm:text-sm text-sm">
          Serenity offers a suite of tools to help psychologists and mental
          health professionals manage their practice more efficiently, from
          mental health assessments to appointment booking and secure payment
          processing.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center space-y-5"></div>
      <div className=" mt-16 space-y-6">
        {items.map((item, index) => (
          <div key={item.name} className=" space-y-1">
            <h1 className=" xl:text-2xl md:text-lg text-sm font-extrabold">{item.name}</h1>
            <h1 className=" xl:text-lg md:text-sm text-xs">{item.desc}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page2;
