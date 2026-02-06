import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#F9FAFF]">
      {/* Hero / Intro Section */}
      <section className="relative pt-[80px] min-h-[800px] flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <div className="z-10">
            <h2 className="font-['Nunito'] font-bold text-[#FDC435] uppercase tracking-wider text-xl mb-3">
              UI/UX Designer
            </h2>
            <h1 className="font-['Playfair_Display'] font-bold text-[#25282B] text-5xl md:text-7xl leading-tight mb-8">
              Hello, my name is Madelyn Torff
            </h1>
            <p className="font-['Nunito'] text-[#828282] text-xl max-w-lg mb-12">
              Short text with details about you, what you do or your professional career. You can add more information on the about page.
            </p>
            <div className="flex space-x-4 font-['Roboto']">
              <Link href="#projects" className="bg-[#FDC435] text-[#25282B] px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Projects
              </Link>
              <Link href="https://linkedin.com" className="border-2 border-[#25282B] text-[#25282B] px-8 py-3 rounded-lg font-medium hover:bg-[#25282B] hover:text-white transition-all">
                LinkedIn
              </Link>
            </div>
          </div>
          
          <div className="relative h-[600px] w-full">
            {/* The yellow-bg vector shape represented as a div */}
            <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#FDC435] rounded-full filter blur-[100px] opacity-20" />
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/hero.png" 
                alt="Madelyn Torff" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-['Playfair_Display'] font-bold text-[#25282B] text-5xl text-center mb-20 relative">
            Projects
            <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-24 h-1 bg-[#FDC435] rounded-full" />
          </h2>

          <div className="space-y-32">
            {/* Project 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 flex flex-col items-start">
                <h3 className="font-['Playfair_Display'] font-bold text-[#25282B] text-4xl mb-6">Project Name</h3>
                <p className="font-['Nunito'] text-[#828282] text-lg mb-8 leading-relaxed">
                  I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.
                </p>
                <Link href="#" className="font-['Roboto'] font-medium border-2 border-[#25282B] text-[#25282B] px-8 py-3 rounded-full hover:bg-[#25282B] hover:text-white transition-all">
                  View Project
                </Link>
              </div>
              <div className="order-1 md:order-2 bg-[#FDC435] rounded-3xl overflow-hidden aspect-[4/3] shadow-lg">
                <Image src="/images/project1.png" alt="Project 1" width={600} height={450} className="object-cover w-full h-full opacity-90 mix-blend-multiply" />
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="bg-[#FDC435] rounded-3xl overflow-hidden aspect-[4/3] shadow-lg">
                <Image src="/images/project2.png" alt="Project 2" width={600} height={450} className="object-cover w-full h-full opacity-90 mix-blend-multiply" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="font-['Playfair_Display'] font-bold text-[#25282B] text-4xl mb-6">Project Name</h3>
                <p className="font-['Nunito'] text-[#828282] text-lg mb-8 leading-relaxed">
                  What was your role, your deliverables, if the project was personal, freelancing.
                </p>
                <Link href="#" className="font-['Roboto'] font-medium border-2 border-[#25282B] text-[#25282B] px-8 py-3 rounded-full hover:bg-[#25282B] hover:text-white transition-all">
                  View Project
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 flex flex-col items-start">
                <h3 className="font-['Playfair_Display'] font-bold text-[#25282B] text-4xl mb-6">Project Name</h3>
                <p className="font-['Nunito'] text-[#828282] text-lg mb-8 leading-relaxed">
                  You can also add in this description the type of the project, if it was for web, mobile, electron.
                </p>
                <Link href="#" className="font-['Roboto'] font-medium border-2 border-[#25282B] text-[#25282B] px-8 py-3 rounded-full hover:bg-[#25282B] hover:text-white transition-all">
                  View Project
                </Link>
              </div>
              <div className="order-1 md:order-2 bg-[#FDC435] rounded-3xl overflow-hidden aspect-[4/3] shadow-lg">
                <Image src="/images/project3.png" alt="Project 3" width={600} height={450} className="object-cover w-full h-full opacity-90 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-[600px] mx-auto px-6 flex flex-col items-center">
          <h2 className="font-['Playfair_Display'] font-bold text-[#25282B] text-5xl mb-12">Contact me</h2>
          <form className="w-full flex flex-col space-y-8">
            <div className="flex flex-col space-y-2">
              <label className="font-['Nunito'] font-semibold text-[#25282B]">Name</label>
              <input type="text" className="border-2 border-[#EBEBEB] rounded-lg p-4 focus:border-[#FDC435] outline-none transition-colors" />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-['Nunito'] font-semibold text-[#25282B]">Email</label>
              <input type="email" className="border-2 border-[#EBEBEB] rounded-lg p-4 focus:border-[#FDC435] outline-none transition-colors" />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-['Nunito'] font-semibold text-[#25282B]">Message</label>
              <textarea rows={6} className="border-2 border-[#EBEBEB] rounded-lg p-4 focus:border-[#FDC435] outline-none transition-colors resize-none"></textarea>
            </div>
            <button className="bg-[#FDC435] text-[#25282B] font-['Roboto'] font-medium px-12 py-4 rounded-lg self-end hover:opacity-90 transition-opacity">
              Send
            </button>
          </form>

          <div className="mt-24 flex items-center space-x-6 text-[#25282B]">
            <Link href="#" className="hover:opacity-70"><InstagramIcon /></Link>
            <Link href="#" className="hover:opacity-70"><LinkedInIcon /></Link>
            <Link href="#" className="hover:opacity-70"><MailIcon /></Link>
          </div>
          <p className="mt-8 font-['Nunito'] text-[#828282] text-sm">
            Madelyn Torff 2021
          </p>
        </div>
      </section>
    </div>
  );
}

// Simple Icons
const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
