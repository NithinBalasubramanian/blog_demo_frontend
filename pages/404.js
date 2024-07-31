import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {

    const router = useRouter(); 

    useEffect(() => {
      const timer = setTimeout(() => {
         router.push('/')
        }, 2000);

      return () => clearTimeout(timer);
      
    }, [])

    return (
        <div className="ErrorPage">
            <h1>Page Not Found</h1>
        </div>
    );
}

export default NotFound;
