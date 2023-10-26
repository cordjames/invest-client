import React from "react";

function HeroCount() {
  const [timeRemaining, setTimeRemaining] = React.useState(0);

  React.useEffect(() => {
    // export let targetDate;
    const targetDate = new Date("2024-09-24T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const timeLeft = targetDate - now;

      if (timeLeft <= 0) {
        clearInterval(interval);
        setTimeRemaining(0);
      } else {
        setTimeRemaining(timeLeft);
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  // Call the updateCountdown function immediately to avoid initial delay

  function formatTime(ms) {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  const { days, hours, minutes, seconds } = formatTime(timeRemaining);

  return (
    <div class="block max-w-sm p-4 border border-white-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-['Poppins']">
      <div class="columns-4">
        <div class="column">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
            {days}
          </h5>
          <p className="text-xs text-white">DAYS</p>
        </div>
        <div class="column">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white after:content-[':'] after:pl-[2rem] ">
            {hours}
          </h5>
          <p className="text-xs text-white">HOURS</p>
        </div>
        <div class="column">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white after:content-[':'] after:pl-[2rem]">
            {minutes}
          </h5>
          <p className="text-xs text-white">MINUTES</p>
        </div>
        <div class="column">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
            {seconds}
          </h5>
          <p className="text-xs text-white">seconds</p>
        </div>
      </div>
    </div>
  );
}

export default HeroCount;
