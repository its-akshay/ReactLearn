import {useState, useEffect} from "react"
const useOnline = () => {
  const [isOnline,setIsOnline] = useState(true)
  useEffect(()=>{
    console.log("hi");
    window.addEventListener("online",()=>{
        console.log("hello");
        setIsOnline(true);
    });
    window.addEventListener("offline",()=>{
        console.log("bye");
        setIsOnline(false);
    });
  },[]);
  console.log("hiee");
  return isOnline;
}


export default useOnline