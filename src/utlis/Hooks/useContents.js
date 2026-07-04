import { useQuery } from "@tanstack/react-query";
import { getAllContents } from "../../api/api";


const useContents = () => {
  return useQuery({
    queryKey: ["contents",],
    queryFn: () => getAllContents(),
    staleTime: 1000 * 60 * 5,
  });
};

export default useContents;