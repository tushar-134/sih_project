import React, { useState, useEffect } from "react";

export default function MobileVerification({ onVerified }) {
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);

  // TIMER COUNTDOWN
  useEffect(() => {
    let interval;

    if (otpSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [otpSent, timer]);

  // SEND OTP Handler
  const handleSendOtp = () => {
    if (mobile.length !== 10) {
      alert("Enter a valid 10-digit mobile number.");
      return;
    }

    setOtpSent(true);
    setTimer(60);
    console.log("OTP sent to:", mobile);
  };

  // VERIFY OTP Handler
  const handleVerifyOtp = () => {
    if (otp.length === 6) {
      onVerified();
    } else {
      alert("Enter valid 6-digit OTP.");
    }
  };

  return (
    <div className="bg-white/40 backdrop-blur-2xl p-14 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] w-full max-w-2xl transition-all animate-fadeIn">
      
      <h1 className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent drop-shadow-sm">
        Youth Registration
      </h1>

      {/* MOBILE INPUT */}
      {!otpSent ? (
        <div className="animate-fadeIn">
          <label className="font-semibold text-lg text-gray-800">
            Mobile Number
          </label>

          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength="10"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full p-5 border-2 border-gray-300 rounded-2xl mt-3 mb-7 text-xl outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition-all"
            placeholder="Enter your mobile number"
          />

          <button
            onClick={handleSendOtp}
            className="w-full bg-orange-500 text-white py-4 rounded-2xl text-xl font-bold shadow-lg hover:bg-orange-600 hover:shadow-xl active:scale-[0.98] transition-all"
          >
            Send OTP
          </button>
        </div>
      ) : (
        <div className="animate-fadeIn">
          {/* OTP INPUT */}
          <label className="font-semibold text-lg text-gray-800">
            Enter OTP
          </label>

          <input
            type="text"
            maxLength="6"
            inputMode="numeric"
            pattern="[0-9]*"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-5 border-2 border-gray-300 rounded-2xl mt-3 mb-5 text-xl outline-none focus:border-green-500 focus:ring-2 focus:ring-green-300 transition-all"
            placeholder="Enter 6-digit OTP"
          />

          {/* TIMER */}
          <p className="text-center text-gray-700 mb-4 text-lg">
            {timer > 0 ? (
              <>Resend OTP in <span className="font-bold text-orange-600">{timer}s</span></>
            ) : (
              <button
                onClick={handleSendOtp}
                className="text-blue-700 font-bold underline text-lg"
              >
                Resend OTP
              </button>
            )}
          </p>

          <button
            onClick={handleVerifyOtp}
            className="w-full bg-green-600 text-white py-4 rounded-2xl text-xl font-bold shadow-lg hover:bg-green-700 hover:shadow-xl active:scale-[0.98] transition-all"
          >
            Verify OTP
          </button>

          <button
            onClick={() => setOtpSent(false)}
            className="w-full mt-5 text-blue-700 underline text-lg font-semibold"
          >
            Change number
          </button>
        </div>
      )}
    </div>
  );
}
