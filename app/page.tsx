import Image from "next/image";

export default function Home() {
  return (
   <>
   <div className="h-64 w-90% bg-blue-400">
    <div className=" grid align-bottom">    
    <Image 
    src="\vercel.svg"
    height={67}
    width={86}
    alt="icon image"
    className="algin bottom-0"/>
    </div>
    
    </div>
    <div className="flex items-center ">
     <div className=" flex ">
     <p className="ml-10 align-middle ">
        Welcome to Acme : This is the example for the Next
      </p>

      </div> 
      <div className="grid justify-end ml-96">
        <Image
        src="/image.png"
        alt="this is dashbord"
        width={700}
        height={100}
        className="hidden md:block"
        />
        <Image
        src="/image.png"
        alt="this is mobile vala"
        height={260}
        width={500}
        className="block md:hidden"/>
      </div>
    </div>
   </>
  );
}
