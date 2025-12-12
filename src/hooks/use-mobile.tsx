import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    checkIsMobile();
    mql.addEventListener("change", checkIsMobile);

    return () => {
      mql.removeEventListener("change", checkIsMobile);
    };
  }, []);

  return isMobile;
}
