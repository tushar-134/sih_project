import React from 'react';

export default function PMFooter() {
  return (
    <footer id="support" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-4 gap-8 mb-8">
          {/* Logos */}
          <div>
            <div className="flex gap-2 mb-8">
              <div className="w-16 h-16 bg-white rounded flex items-center justify-center">
                <span className="text-xs font-bold text-gray-800">MCA</span>
              </div>
              <div className="w-16 h-16 bg-white rounded flex items-center justify-center">
                <span className="text-xs font-bold">BISAG-N</span>
              </div>
            </div>
            <h3 className="font-bold mb-4">Social Media</h3>
            <div className="flex gap-3">
              <button className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">📺</button>
              <button className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center">📷</button>
              <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">in</button>
              <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center">𝕏</button>
            </div>
          </div>

          {/* Get to Know */}
          <div>
            <h3 className="font-bold mb-4">Get to Know</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-500">
                  Partner Companies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Manuals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Videos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <p className="text-sm mb-4">A Wing, 5th Floor, Shastri Bhawan, Dr Rajendra Prasad Rd, New Delhi-110001</p>
            <p className="text-sm mb-2">pminternship[at]mca.gov.in</p>
            <p className="text-lg font-bold">1800 11 6090</p>
          </div>

          {/* Download App */}
          <div>
            <h3 className="font-bold mb-4">Download Mobile App</h3>
            <p className="text-sm mb-4">
              Click the button below to download the app or scan the QR code with your phone.
            </p>
            <button className="w-full bg-orange-500 text-white py-2 rounded font-semibold mb-2 hover:bg-orange-600">
              GET IT ON Google Play
            </button>
            <div className="w-24 h-24 bg-white rounded p-2">
              <div className="w-full h-full bg-orange-300 flex items-center justify-center text-xs">QR</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8 flex justify-between items-center text-sm">
          <p>&copy; 2025 PMIS. All rights reserved.</p>
          <p>Build Version: 1759578763123</p>
        </div>
      </div>
    </footer>
  )
}