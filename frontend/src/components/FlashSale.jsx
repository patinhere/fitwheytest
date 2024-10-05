import { useEffect, useState } from "react";

function FlashSale() {
  const [timeLeft, setTimeLeft] = useState(60 * 60 * 12);

  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div>
      <div class="pd-flash-wrap">
        <span class="flash-header">Flash Sale</span>
        <span class="timer">
          <ul>
            <li>{Math.floor(timeLeft / 60 / 60)}</li> :
            <li>{Math.floor((timeLeft / 60) % 60)}</li> :
            <li>{Math.floor(timeLeft % 60)}</li>
          </ul>
        </span>
      </div>
    </div>
  );
}

export default FlashSale;
