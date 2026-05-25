"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { assets } from "@/public/assets";

export const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if the user has closed the tooltip before
    const isClosed = localStorage.getItem("whatsapp_tooltip_closed");
    if (!isClosed) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 3000); // Show tooltip after 3 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  if (!mounted) return null;

  const handleCloseTooltip = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setShowTooltip(false);
    localStorage.setItem("whatsapp_tooltip_closed", "true");
  };

  const whatsappUrl = "https://wa.me/919455289155?text=Hi%20Aryan%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20regarding%20a%20project%21";

  return (
    <div className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-3 font-sans select-none">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative flex flex-col gap-2 p-4 rounded-2xl bg-[#0c0c0c]/90 border border-white/10 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] w-72 text-left"
          >
            {/* Header info */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src={assets.avatar.logo.src}
                  alt="Aryan"
                  width={36}
                  height={36}
                  className="rounded-full border border-white/20 object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#0c0c0c] animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">Aryan Vishwakarma</span>
                <span className="text-xs text-white/50">Typically replies instantly</span>
              </div>
              <button
                onClick={handleCloseTooltip}
                className="ml-auto p-1 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                aria-label="Close message"
              >
                <X className="size-3.5" />
              </button>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 my-1" />

            {/* Message Body */}
            <p className="text-xs text-white/80 leading-relaxed font-normal">
              Hey! 👋 Need help with AI Automation, Web/Mobile Apps, or custom software? Let's connect and discuss your project.
            </p>

            {/* Action Link inside tooltip */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-green-600/20 text-[#25D366] hover:bg-green-600/30 text-xs font-semibold transition-all border border-green-500/20"
            >
              Start Chat
            </a>

            {/* Tooltip triangle indicator */}
            <div className="absolute bottom-[-6px] right-5 w-3 h-3 bg-[#0c0c0c]/90 border-r border-b border-white/10 rotate-45 backdrop-blur-xl" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
        whileHover={{ scale: 1.08, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.6)] cursor-pointer transition-shadow duration-300 group"
        title="Chat on WhatsApp"
        aria-label="Connect on WhatsApp"
      >
        {/* Pulsing ring outer effect */}
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366]/40 animate-ping opacity-75 group-hover:animate-none group-hover:scale-110 group-hover:opacity-0 transition-all duration-300" />
        
        {/* WhatsApp Icon */}
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={assets.logos.whatsapp}
            alt="WhatsApp"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </motion.a>
    </div>
  );
};
