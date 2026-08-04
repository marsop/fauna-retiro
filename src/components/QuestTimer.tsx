import React, { useEffect, useState } from 'react';
import { useQuestStore } from '../hooks/useQuestStore';

export const QuestTimer: React.FC = () => {
  const { questStarted, startTime, endTime } = useQuestStore();
  const [now, setNow] = useState<number>(Date.now());

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (questStarted && startTime && !endTime) {
      interval = setInterval(() => {
        setNow(Date.now());
      }, 1000);
    } else if (endTime) {
      // Ensure we display the exact final time when completed
      setNow(endTime);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [questStarted, startTime, endTime]);

  if (!questStarted || !startTime) {
    return null;
  }

  // Calculate elapsed time in seconds
  const elapsedMs = Math.max(0, (endTime || now) - startTime);
  const totalSeconds = Math.floor(elapsedMs / 1000);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="flex items-center gap-1.5 bg-primary-foreground/20 px-2 py-1 rounded-md text-sm font-bold font-mono tracking-wider min-w-[70px] justify-center text-primary-foreground shadow-sm">
      <span className="text-xs mr-0.5">⏱</span>
      {formattedTime}
    </div>
  );
};
