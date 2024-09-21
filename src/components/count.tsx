import { useState , useEffect } from "react";


export default function Count() {

    const [count, setCount] = useState<Number>(0);


    useEffect(() => {
        const fetchCount = async () => {
          const response = await fetch('https://muhammad_owais_warsi-depressedyellowmarten.web.val.run/count-visitor?url=owais-warsi.vercel.app');
          if (response.ok) {
            const { count } = await response.json();
            setCount(count);
          }
        };
    
        fetchCount();
      }, []);
    

    return (
        <div>
           Number of visits: {count.toString()}
        </div>
    )
}