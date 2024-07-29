import React from "react";

const items = [
    {
        name: 'Mental Health Assessments',
        desc: 'Administer a wide range of validated psychological assessments to your clients, with automatic scoring and reporting.'
    },
    {
        name: 'Appointment Booking',
        desc: 'Allow your clients to easily book appointments online, with automatic reminders and calendar integration.'
    },
    {
        name: 'Secure Payments',
        desc: 'Seamlessly process payments from yout clients, including insurance claims, with our HIPAA-compliant payment processing.'
    },
]
const Page2 = () => {
  return (
    <div className="bg-neutral-300 px-10 flex flex-col justify-center items-center w-full h-screen">
      <div className="flex flex-col justify-center items-center space-y-5">

      <div>Key Features</div>
      <h1 className=" xl:text-7xl md:text-5xl text-2xl font-[900] text-center">
        Streamline Your Practice
      </h1>
      <p className=" text-center max-w-7xl w-full xl:text-2xl md:text-xl">
        Serenity offers a suite of tools to help psychologists and mental health
        professionals manage their practice more efficiently, from mental health
        assessments to appointment booking and secure payment processing.
      </p>
      </div>
      <div className=" mt-16 space-y-6">
        {
            items.map((item, index) => (
                <div key={item.name} className=" space-y-1">
                    <h1 className=" md:text-xl font-extrabold">{item.name}</h1>
                    <h1 className=" md:text-lg text-sm">{item.desc}</h1>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Page2;
