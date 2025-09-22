import usePing from "../../hooks/apis/queries/usePing"

export default function Ping(){
  const {data, isLoading, isError, error} = usePing();

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error: {error.message}</div>

  return (
    <>
      <h1>Ping { data.message }</h1>
    </>
  )
}