import React, { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LightboxProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  label?: string;
}

export default function Lightbox({ open, onClose, children, label = "Dialog" }: LightboxProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) { 
      if (e.key === "Escape") onClose?.(); 
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  if (!open) return null;
  
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <div 
        className="max-w-5xl w-[95vw] max-h-[90vh] bg-white rounded-xl overflow-auto relative" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold text-forest-green">{label}</h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X size={20} />
          </Button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}