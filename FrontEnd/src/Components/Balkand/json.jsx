import React, { useState, useEffect } from 'react';
import Text from './Text.jsx';

function json()  {
  const [slokas, setSlokas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/ramayan/balKand/:id/:subId');
        const data = await response.json();
        setSlokas([data]);
        console.log(data);
      } catch (error) {
        console.error('Error fetching poems:', error);
      }
    };

    fetchData();
  }, []);
    return (  <div>
      
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
export default json;