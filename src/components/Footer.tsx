import React from 'react';
import { Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-blue-300 mb-4 flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Emergency Helpline Numbers
          </h3>
          <ul className="space-y-2 text-blue-100">
            <li className="flex items-center gap-2">
              <span className="font-semibold">National Cyber Crime Helpline:</span>
              <span className="text-blue-300">1930</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="font-semibold">Chandigarh Cyber Crime Helpline:</span>
              <span className="text-blue-300">0172-2749900</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="font-semibold">National Police Helpline:</span>
              <span className="text-blue-300">112</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="font-semibold">National Women Helpline:</span>
              <span className="text-blue-300">181</span>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center md:justify-end">
          <div className="text-center md:text-right">
            <p className="text-sm text-blue-200">
              © {new Date().getFullYear()} Raksha AI
            </p>
            <p className="text-xs text-blue-300 mt-1">
              Protecting Digital Lives
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;