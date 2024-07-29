import Image from "next/image";
import Main from '@/components/Main';
import Page2 from "@/components/Page2";
import Page3 from "@/components/Page3";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main style={{fontFamily:'poppins'}}>
      <Navbar />
      <Main />
      <Page2 />
      <Page3 />
     
    </main>
  );
}



