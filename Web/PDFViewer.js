import React from 'react';
import { PDFView } from 'react-native-pdf';

const PDFViewer = ({ pdfUrl }) => {
  return (
    <PDFView
      fadeInDuration={250.0}
      style={{ flex: 1 }}
      resource={pdfUrl} // URL of the PDF file
      onLoad={() => console.log(`PDF loaded: ${pdfUrl}`)}
    />
  );
};

export default PDFViewer;