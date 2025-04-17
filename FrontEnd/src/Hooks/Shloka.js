import React, { useState, useEffect } from 'react';

export default function useShloka(id, subid = null) {
  const [shlokas, setShlokas] = useState([]);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    let isMounted = true; 

    const fetchData = async () => {
      try {

        const url = subid 
          ? `https://digital-ramayana.onrender.com/balKand/${id}/${subid}` 
          : `https://digital-ramayana.onrender.com/balKand/${id}`;
          const response = await fetch(url, { headers: { 'Authorization': `Bearer ${token}`,},})
        if (!response.ok) {
          throw new Error('Please login first');
        }
        const data = await response.json();

        if (isMounted) {
          if (Array.isArray(data)) {
            setShlokas(data);
          } else {
            setShlokas([data]);
          }
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; 
    };
  }, [id, subid]);

  return { shlokas, error };
}


