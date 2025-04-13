import DOMPurify from 'dompurify';

function usePurify({text}) {
  const cleanedText = text.replace(/<br\s*\/?>/gi, '');
  const sanitizedHTML = DOMPurify.sanitize(cleanedText);
  return sanitizedHTML;
}

export default usePurify