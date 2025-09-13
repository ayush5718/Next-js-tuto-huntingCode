import Image from "next/image";
import Head from "next/head";



export default function Home() {
  return (
    <div>
      <Head>
        <title>Hunting coder</title>
        <link rel="icon" href="/icons8-blog-24.ico"/>
      </Head>
       
<nav className=" ">
  <ul className="flex gap-8 p-4 justify-center items-center font-bold text-2xl">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li></li>
  </ul>
</nav>


<div className="blogs flex justify-center p-16 bg-red-200 h-[50%]  mx-auto">

  <div>
        <Image src="/blogCover.jpg" width={500} height={500}  />
        <h2 className="font-bold text-xl">Popular blogs</h2>
        <div className="blogsItem mx-auto">
          <h3 className="font-bold">How to learn javascript in 2022</h3>
          <p>Javascript is the language used to design logic for the webpage</p>
        </div>

         <div className="blogsItem mx-auto">
          <h3 className="font-bold">How to learn javascript in 2022</h3>
          <p>Javascript is the language used to design logic for the webpage</p>
        </div>

        </div>
      </div>
      
    </div>
  );
}
