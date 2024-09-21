import { Button } from "@nextui-org/react";
import { useState , useEffect } from "react";


export default function Count() {

    const [count, setCount] = useState<Number>(0);


    useEffect(() => {
        const fetchCount = async () => {
          const response = await fetch('https://muhammad_owais_warsi-count_visits.web.val.run/count-visitor?url=owais-warsi.vercel.app');
          if (response.ok) {
            const { count } = await response.json();
            setCount(count);
          }
        };
    
        fetchCount();
      }, []);
    

    return (
        <div>
            <Button disabled>
                 Number of visits: {count.toString()}
            </Button>
        </div>
    )
}
