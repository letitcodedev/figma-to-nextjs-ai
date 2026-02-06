import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-[#F9FAFF] min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 flex flex-col items-start">
            <h1 className="font-['Playfair_Display'] font-bold text-[#25282B] text-5xl md:text-7xl mb-8">
              About me
            </h1>
            <p className="font-['Nunito'] text-[#828282] text-xl leading-relaxed mb-12 max-w-lg">
              Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed cras sed. Aliquet risus posuere aliquet imperdiet sit.
            </p>
            <Link 
              href="#" 
              className="bg-[#FDC435] text-[#25282B] font-['Roboto'] font-medium px-12 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-sm"
            >
              Resume
            </Link>
          </div>
          
          <div className="order-1 md:order-2 relative h-[500px] w-full">
            <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#FDC435] rounded-full filter blur-[80px] opacity-10" />
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/about-me.png" 
                alt="Madelyn Torff" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Reusing the Footer / Contact Section as it appears in the Figma "About with Form" frame */}
        <section className="mt-32 pt-24 border-t border-gray-100">
          <div className="max-w-[600px] mx-auto flex flex-col items-center">
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
    </div>
  );
}

// Reusing Icons
const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);