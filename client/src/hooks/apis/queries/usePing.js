import { useQuery } from "@tanstack/react-query";
import { pingApi } from "../../../apis/ping.js";


export default function usePing(){
  const {data, isLoading, isError, error} = useQuery({
    queryFn: pingApi,
    queryKey: ['ping'],
    staleTime: 10000,
  })

  return {data, isLoading, isError, error};
}