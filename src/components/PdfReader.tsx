import * as React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { toolbarPlugin, ToolbarSlot } from '@react-pdf-viewer/toolbar';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

interface PdfReaderProps {
  fileUrl: string;
}

const PdfReader: React.FC<PdfReaderProps> = ({ fileUrl }) => {
  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;

  return (
    <div
      className={`rpv-core__viewer h-[450px] sm:h-[1100px]`}
      style={{
        border: '1px solid rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        // height: height,
      }}>
      <div
        style={{
          alignItems: 'center',
          backgroundColor: '#eeeeee',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '4px',
        }}>
        <Toolbar>
          {(props: ToolbarSlot) => {
            const {
              CurrentPageInput,
              Download,
              EnterFullScreen,
              GoToNextPage,
              GoToPreviousPage,
              NumberOfPages,
              Print,
              Zoom,
              ZoomIn,
              ZoomOut,
            } = props;
            return (
              <>
                <div style={{ padding: '0px 2px' }} className="hidden sm:block">
                  <ZoomOut />
                </div>
                <div style={{ padding: '0px 2px' }} className="hidden sm:block">
                  <Zoom />
                </div>
                <div style={{ padding: '0px 2px' }} className="hidden sm:block">
                  <ZoomIn />
                </div>
                <div className="flex sm:hidden">
                  <div style={{ padding: '0px 2px' }}>
                    <ZoomOut />
                  </div>
                  <div style={{ padding: '0px 2px' }}>
                    <Zoom />
                  </div>
                  <div style={{ padding: '0px 2px' }}>
                    <ZoomIn />
                  </div>
                </div>
                <div
                  style={{ padding: '0px 2px', marginLeft: 'auto' }}
                  className="hidden sm:block">
                  <GoToPreviousPage />
                </div>
                <div
                  style={{ padding: '0px 2px', width: '4rem' }}
                  className="hidden sm:block">
                  <CurrentPageInput />
                </div>
                <div style={{ padding: '0px 2px' }} className="hidden sm:block">
                  / <NumberOfPages />
                </div>
                <div style={{ padding: '0px 2px' }} className="hidden sm:block">
                  <GoToNextPage />
                </div>
                <div className="flex items-center gap-1 sm:hidden">
                  <div
                    style={{ padding: '0px 2px', marginLeft: 'auto' }}
                    className="hidden sm:block">
                    <GoToPreviousPage />
                  </div>
                  <div style={{ padding: '0px 2px', width: '4rem' }}>
                    <CurrentPageInput />
                  </div>
                  <div style={{ padding: '0px 2px' }}>
                    / <NumberOfPages />
                  </div>
                  <div
                    style={{ padding: '0px 2px' }}
                    className="hidden sm:block">
                    <GoToNextPage />
                  </div>
                </div>
                <div
                  style={{ padding: '0px 2px', marginLeft: 'auto' }}
                  className="hidden sm:block">
                  <EnterFullScreen />
                </div>
                <div style={{ padding: '0px 2px' }}>
                  <Download />
                </div>
                <div style={{ padding: '0px 2px' }} className="hidden sm:block">
                  <Print />
                </div>
              </>
            );
          }}
        </Toolbar>
      </div>
      <div
        style={{
          flex: 1,
          overflow: 'hidden',
        }}>
        <Worker
          workerUrl={`https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js`}>
          {' '}
          <Viewer fileUrl={fileUrl} plugins={[toolbarPluginInstance]} />
        </Worker>
      </div>
    </div>
  );
};

export default PdfReader;
