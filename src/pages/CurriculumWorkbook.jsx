import React from 'react';
import { WORKORDERS, STATIONS } from '../data/curriculumData';

export default function CurriculumWorkbook() {
  return (
    <div style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh' }}>
      {/* Print styles */}
      <style>{`
        @media print {
          body { background-color: white !important; }
          .page-break { page-break-after: always; }
          .no-print { display: none !important; }
          .print-header { margin-top: 0 !important; padding-top: 0 !important; }
        }
        .workbook-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          font-family: serif;
        }
        .wo-header {
          border-bottom: 2px solid black;
          padding-bottom: 1rem;
          margin-bottom: 1.5rem;
        }
        .blank-lines {
          border-bottom: 1px solid #ccc;
          height: 24px;
          margin-top: 8px;
          width: 100%;
        }
        .checkbox-box {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 1px solid black;
          margin-right: 8px;
          vertical-align: middle;
        }
      `}</style>

      <div className="no-print" style={{ padding: '1rem', backgroundColor: '#f0f0f0', textAlign: 'center', borderBottom: '1px solid #ccc' }}>
        <button onClick={() => window.print()} style={{ padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: '4px' }}>
          Print Workbook
        </button>
        <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', color: '#666' }}>Tip: In your print dialog, choose "Save as PDF" or select your printer. Check "Background graphics" if necessary.</p>
      </div>

      <div className="workbook-container">
        {/* Cover Page */}
        <div className="page-break" style={{ textAlign: 'center', paddingTop: '30vh' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Trades Curriculum Workbook</h1>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'normal', color: '#555' }}>90 Core Competency Workorders</h2>
          
          <div style={{ marginTop: '5rem', textAlign: 'left', width: '300px', margin: '5rem auto 0 auto' }}>
            <p><strong>Participant Name:</strong></p>
            <div className="blank-lines"></div>
            <p style={{ marginTop: '2rem' }}><strong>Start Date:</strong></p>
            <div className="blank-lines"></div>
          </div>
        </div>

        {/* Workorders */}
        {WORKORDERS.map((wo, index) => {
          const station = STATIONS.find(s => s.id === wo.station);
          return (
            <div key={wo.num} className="page-break print-header" style={{ marginTop: index === 0 ? 0 : '2rem' }}>
              <div className="wo-header">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div>
                    <span style={{ fontSize: '1rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#555' }}>
                      Workstation: {station?.name}
                    </span>
                    <h2 style={{ margin: '0.25rem 0 0 0', fontSize: '1.8rem' }}>
                      WO #{wo.num}: {wo.title}
                    </h2>
                  </div>
                  <div style={{ border: '2px solid black', padding: '0.5rem', textAlign: 'center', minWidth: '100px' }}>
                    <div style={{ fontSize: '0.7rem', textTransform: 'uppercase' }}>Date Completed</div>
                    <div style={{ height: '20px' }}></div>
                  </div>
                </div>
              </div>

              {/* Theory */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.2rem', backgroundColor: '#eee', padding: '0.25rem 0.5rem', display: 'inline-block', margin: '0 0 1rem 0' }}>1. Theory & Safety</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <strong>Technical Overview:</strong>
                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.95rem' }}>{wo.studySheet.overview}</p>
                  </div>
                  <div>
                    <strong>Key Concepts:</strong>
                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.95rem' }}>{wo.studySheet.keyConcepts}</p>
                  </div>
                  <div>
                    <strong>Safety & Codes:</strong>
                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.95rem' }}>{wo.studySheet.codesSafety}</p>
                  </div>
                  <div>
                    <strong>Guidelines:</strong>
                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.95rem' }}>{wo.studySheet.guidelines}</p>
                  </div>
                </div>
              </div>

              {/* Research */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.2rem', backgroundColor: '#eee', padding: '0.25rem 0.5rem', display: 'inline-block', margin: '0 0 1rem 0' }}>2. Research Questions</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <strong>Q1: {wo.q1}</strong>
                    <div style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic', marginBottom: '0.5rem' }}>Search keyword: {wo.p1}</div>
                    <div className="blank-lines"></div>
                    <div className="blank-lines"></div>
                    <div className="blank-lines"></div>
                  </div>
                  <div>
                    <strong>Q2: {wo.q2}</strong>
                    <div style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic', marginBottom: '0.5rem' }}>Search keyword: {wo.p2}</div>
                    <div className="blank-lines"></div>
                    <div className="blank-lines"></div>
                    <div className="blank-lines"></div>
                  </div>
                  <div>
                    <strong>Q3: {wo.q3}</strong>
                    <div style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic', marginBottom: '0.5rem' }}>Search keyword: {wo.p3}</div>
                    <div className="blank-lines"></div>
                    <div className="blank-lines"></div>
                    <div className="blank-lines"></div>
                  </div>
                </div>
              </div>

              {/* Steps */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.2rem', backgroundColor: '#eee', padding: '0.25rem 0.5rem', display: 'inline-block', margin: '0 0 1rem 0' }}>3. Hands-On Activity</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {wo.steps.map((step, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start' }}>
                      <div className="checkbox-box" style={{ marginTop: '4px' }}></div>
                      <span style={{ fontSize: '0.95rem', flex: 1 }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signoff */}
              <div>
                <h3 style={{ fontSize: '1.2rem', backgroundColor: '#eee', padding: '0.25rem 0.5rem', display: 'inline-block', margin: '0 0 1rem 0' }}>4. Quality & Sign-Off</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {wo.signoff.map((sign, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start' }}>
                      <div className="checkbox-box" style={{ marginTop: '4px' }}></div>
                      <span style={{ fontSize: '0.95rem', flex: 1 }}>{sign}</span>
                    </div>
                  ))}
                </div>
                
                <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem' }}>
                  <div style={{ flex: 1 }}>
                    <p><strong>Participant Signature:</strong></p>
                    <div className="blank-lines"></div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p><strong>Manager/Instructor Sign-Off:</strong></p>
                    <div className="blank-lines"></div>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
