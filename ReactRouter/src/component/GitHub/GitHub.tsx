import { useEffect, useState } from "react"


function GitHub() {

    const [data , setData] = useState<any>(null)

    useEffect(()=>{
        fetch("https://api.github.com/users/happy0945")
        .then(response => response.json())
        .then(data =>{
            setData(data)
        })
    },[])

  return (
    
    <div className="text-center m-4 bg-grey-600 text-black p-4 text-3xl" >GitHub Followers : {data?.followers}
    <img src= {data?.avatar_url} alt="Git Photo" width={300} />
     </div>
    
  )
}

export default GitHub