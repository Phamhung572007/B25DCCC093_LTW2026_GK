import { useEffect, useState } from 'react';

const getRemainingTime = (date) => {
  const targetTime = new Date(`${date}T00:00:00`).getTime();
  const remainingMilliseconds = targetTime - Date.now();

  if (remainingMilliseconds <= 0) {
    return { isPast: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const remainingSeconds = Math.floor(remainingMilliseconds / 1000);

  return {
    isPast: false,
    days: Math.floor(remainingSeconds / 86400),
    hours: Math.floor((remainingSeconds % 86400) / 3600),
    minutes: Math.floor((remainingSeconds % 3600) / 60),
    seconds: remainingSeconds % 60,
  };
};

const Countdown = ({ date }) => {
  const [remainingTime, setRemainingTime] = useState(() => getRemainingTime(date));

  useEffect(() => {
    const updateRemainingTime = () => setRemainingTime(getRemainingTime(date));
    updateRemainingTime();

    const intervalId = setInterval(updateRemainingTime, 1000);
    return () => clearInterval(intervalId);
  }, [date]);

  if (remainingTime.isPast) {
    return <p className="countdown countdown-finished">Sự kiện đã diễn ra</p>;
  }

  const { days, hours, minutes, seconds } = remainingTime;

  return (
    <p className="countdown">
      Còn {days} ngày {hours} giờ {minutes} phút {seconds} giây
    </p>
  );
};

export default Countdown;
