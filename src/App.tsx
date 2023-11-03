import hero from "./assets/images/newsletter-mobile.png";
import heroDesktop from "./assets/images/newsletter-desktop.png";
import tick from "./assets/images/red-tick.png";
import Input from "@mui/joy/Input";
import { useState, ChangeEvent } from "react";
import ThankYouPage from "./components/ThankYouPage";

function isValidEmail(email: string): boolean {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return emailRegex.test(email);
}

function App() {
  const [openThankYou, setOpenThankYou] = useState(false);
  const [input, setInput] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleOpenThankYou = () => {
    if (input.trim() === '' || !isValidEmail(input)) {
      setEmailError(true);
      return;
    }
    setOpenThankYou(true);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (emailError) {
      setEmailError(false);
    }
  };

  return (
    <div className=" md:bg-blue-950 md:min-h-screen flex items-center justify-center">
      {openThankYou ? (
        <ThankYouPage setOpenThankYou={setOpenThankYou} />
      ) : (
        <div className="bg-white md:flex md:flex-row md:align-middle md:justify-between md:rounded-2xl md:max-w-3xl">
          <img src={hero} alt="hero-image" className="md:hidden w-full" />
          <div className="px-5 flex flex-col gap-3 md:justify-center md:gap-8 md:w-1/2">
            <h1 className="my-4 text-3xl font-bold">Stay updated!</h1>
            <p className="py-3">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <div className="flex gap-3 py-1 min-w-390 align-top justify-start">
              <img src={tick} alt="tick" className="w-6 h-6" />
              <p>Product discovery and building what matters</p>
            </div>
            <div className="flex gap-3 py-1 min-w-390 align-top justify-start">
              <img src={tick} alt="tick" className="w-6 h-6" />
              <p>Measuring to ensure updates are a success</p>
            </div>
            <div className="flex gap-3 py-1 min-w-390 align-top justify-start">
              <img src={tick} alt="tick" className="w-6 h-6" />
              <p>Product discovery and building what matters</p>
            </div>
            <div className="pt-3">
              <div className="flex justify-between align-middle pb-2">
                <p className="text-xs font-bold">Email address</p>
                {emailError && (
                  <p className="text-xs font-bold text-red-600">
                    Valid email required
                  </p>
                )}
              </div>
              <Input
                id="email"
                type="email"
                placeholder="email@company.com"
                value={input}
                onChange={handleInputChange}
                color={emailError ? "danger" : "neutral"}
              />
              <button
                onClick={handleOpenThankYou}
                type="submit"
                className="bg-blue-950 text-white w-full p-3 my-3 rounded-md hover:shadow-2xl hover:shadow-red-500 hover:bg-red-500 ease-in-out duration-150 active:scale-95"
              >
                Subscribe to the monthly newsletter
              </button>
            </div>
          </div>
          <img
            src={heroDesktop}
            alt="hero-desktop"
            className="hidden md:block object-cover w-1/2"
          />
        </div>
      )}
    </div>
  );
}

export default App;
