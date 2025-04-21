"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export default function SocialLinksVertical() {
  const socials = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/yourusername",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/yourhandle",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:youremail@example.com",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col gap-4  top-1/4 right-6 z-50">
      {socials.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer" 
          className="flex items-center gap-2 p-4 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-lg hover:shadow-orange-300 text-gray-700 hover:text-orange-300 transition dark:bg-slate-800 dark:text-slate-300 dark:hover:text-orange-300 scale-110"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
}
