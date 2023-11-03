import thankyou from "../assets/images/thankyou.png";

interface ThankYouPageProps {
  setOpenThankYou: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThankYouPage = ({ setOpenThankYou }: ThankYouPageProps) => {
  return (
    <div className="flex flex-col px-6 py-10 h-screen justify-around max-w-screen-sm md:justify-center bg-white md:h-fit md:rounded-lg md:w-2/4">
      <div className="flex flex-col gap-8 mt-5">
        <img src={thankyou} alt="tick-icon" className="w-16 h-16" />
        <h1 className="text-4xl font-bold">Thank you for Subscribing</h1>
        <p className="md:mb-5">
          A confirmation email has been sent to{" "}
          <strong>ash@loremcompany.com</strong>. Please open it and click the
          button inside to confirm your subscription
        </p>
      </div>
      <button
        onClick={() => setOpenThankYou(false)}
        type="submit"
        className="bg-blue-950 text-white w-full p-3 my-3 rounded-md hover:shadow-2xl hover:shadow-red-500 hover:bg-red-500 ease-in-out duration-150 active:scale-95"
      >
        Dismiss message
      </button>
    </div>
  );
};

export default ThankYouPage;
