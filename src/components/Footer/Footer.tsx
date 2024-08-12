import { useEffect, useState } from 'react';
import { LoaderPinwheel } from 'lucide-react';

const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
};

function Footer() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState('NA');
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://wi2ghpsmcf.execute-api.ap-southeast-2.amazonaws.com/Prod/update',
          requestOptions
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setCount(result.visits);
        setLoading(false);
      } catch (error) {
        setCount('NA');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <footer className="w-full text-center p-1 mt-10">
      <div className="text-sm flex justify-center items-center">
        Visitor count:{' '}
        {loading ? <LoaderPinwheel className="h-4 animate-spin" /> : count}
      </div>
      <p className="text-xs">&copy; {currentYear} JTM. All rights reserved</p>
    </footer>
  );
}

export default Footer;
