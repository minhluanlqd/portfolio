import React from 'react'
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import Resume from '../../assets/pdf/Resume.pdf';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
 
const ExamplePDFViewer = () => {
    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
            <div style={{ height: '750px' }}>
                <Viewer fileUrl={Resume} />
            </div>
        </Worker>
    )
}
 
export default ExamplePDFViewer