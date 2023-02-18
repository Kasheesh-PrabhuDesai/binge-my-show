import { useEffect, useState } from "react";
const useIsPageAtBottom = () => {
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    const checkPageBottom = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const hasReachedBottom = scrollTop + clientHeight >= scrollHeight;
      if (hasReachedBottom) setPage(prevPage => prevPage + 1);
    };
    window.addEventListener("scroll", checkPageBottom);
    return () => window.removeEventListener("scroll", checkPageBottom);
  }, []);

  return { page };
};

export default useIsPageAtBottom;
