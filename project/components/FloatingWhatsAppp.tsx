
"use client";

import { MessageCircle } from "lucide-react";
import Image from "next/image";

const WHATSAPP_NUMBER = "919873711591";

const WHATSAPP_MESSAGE =
  "Hi, I am interested in your services. I would like to discuss my requirements and get a quotation.";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed
        right-5
        bottom-5
        z-[9999]
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
       
        shadow-lg
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-xl
        md:right-6
        md:bottom-6
      "
    >
      {/* <MessageCircle size={30} strokeWidth={2.2} /> */}
      <Image className="rounded-full" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZRR41jUmacEK0f2jajsAemwyelOyZ-8dAZEI8tNIrQ&s=10'} alt="icon" width={105} height={105}/>
    </a>
  );
}

