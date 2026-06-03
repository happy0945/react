import { useParams } from "react-router-dom"

function User() {
    const {userId} = useParams();
  return (
    <div className="text-center text-black bg-grey-700 text-3xl m-4" >User : {userId} </div>
  )
}

export default User