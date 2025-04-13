import React from 'react';
import DOMPurify from 'dompurify';


function Text({ text }) {
  const sanitizedHTML = DOMPurify.sanitize(text);

  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
  );
}

export default Text;
