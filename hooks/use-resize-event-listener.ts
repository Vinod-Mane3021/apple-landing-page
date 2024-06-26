import { useEffect } from "react";

export const useResizeEventListener = (handler: () => void) => {
  useEffect(() => {
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);
};