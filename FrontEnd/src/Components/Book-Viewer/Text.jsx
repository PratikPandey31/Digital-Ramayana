import React from 'react';
import DOMPurify from 'dompurify';

function Text({ text }) {
  const cleanedText = text.replace(/<br\s*\/?>/gi, '');
  const sanitizedHTML = DOMPurify.sanitize(cleanedText);

  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
  );
}

export default Text;
