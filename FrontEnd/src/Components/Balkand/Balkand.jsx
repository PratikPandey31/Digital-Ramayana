import React, { useState, useEffect } from 'react';
import Text from './Text.jsx';

function Balkand() {
  const [slokas, setSlokas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://digital-ramayana.onrender.com/ramayana/balKand', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json', 
          },
        });
        
        const data = await response.json();
        setSlokas([data]);
      } catch (error) {
        console.error('Error fetching poems:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>

      <div>
        jai shree Ram

        {slokas.map((poem) => (
          <div key={poem.id}>
            <Text text={poem.text} />
            <Text text={poem.translation} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Balkand;
