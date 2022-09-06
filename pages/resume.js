
import dynamic from 'next/dynamic';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const FileViewer = dynamic(() => import('react-file-viewer'), {
    ssr: false
});

export default function resume() {
    return (
        <iframe frameBorder="0" height="490" scrolling="no" width="735" className='pdf' src='/resume.pdf'/>
    );
};