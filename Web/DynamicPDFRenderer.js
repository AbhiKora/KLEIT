// import React, { useEffect, useState } from 'react';
// import { View, WebView } from 'react-native';
// import PDFViewer from './PDFViewer';

// const DynamicPDFRenderer = ({ websiteUrl }) => {
//   const [htmlContent, setHtmlContent] = useState('');

//   useEffect(() => {
//     // Fetch the HTML content of the external website
//     const fetchHTMLContent = async () => {
//       try {
//         const response = await fetch(websiteUrl);
//         const html = await response.text();
//         setHtmlContent(html);
//       } catch (error) {
//         console.error('Error fetching HTML:', error);
//       }
//     };

//     fetchHTMLContent();
//   }, [websiteUrl]);

//   const replaceIframesWithPDFViewers = (htmlContent) => {
//     // Parse the HTML content and replace iframe elements with PDFViewer
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(htmlContent, 'text/html');

//     const iframes = doc.querySelectorAll('iframe');

//     iframes.forEach((iframe) => {
//       const src = iframe.getAttribute('src');
//       const isPDF = src && src.endsWith('.pdf');
//       if (isPDF) {
//         const pdfUrl = iframe.getAttribute('src');
//         const pdfViewer = `<PDFViewer pdfUrl="${pdfUrl}" />`;
//         iframe.outerHTML = pdfViewer;
//       }
//     });

//     return doc.documentElement.outerHTML;
//   };

//   const modifiedHTML = replaceIframesWithPDFViewers(htmlContent);

//   return (
//     <WebView
//       source={{ html: modifiedHTML }}
//       // Additional WebView props
//       startInLoadingState={true}
//       injectedJavaScript={`document.getElementsByClassName('toolbar-container')[0].style.display = 'none';
//       document.getElementsByClassName('thim-nav-wrapper container')[0].style.display = 'none';
//       document.getElementsByClassName(' site-footer')[0].style.display = 'none';`}
//     />
//   );
// };

// export default DynamicPDFRenderer;
