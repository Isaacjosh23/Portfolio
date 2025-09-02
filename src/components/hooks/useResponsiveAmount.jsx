import { useEffect, useState } from "react";

const useResponsiveAmount = () => {
  const [amount, setAmount] = useState(() =>
    window.innerWidth <= 425 ? 0.2 : 0.4
  );

  useEffect(() => {
    const handleResize = () => {
      setAmount(window.innerWidth <= 425 ? 0.05 : 0.4);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return amount;
};

export default useResponsiveAmount;
