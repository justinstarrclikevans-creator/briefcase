import React, { useState } from 'react';
import { Grid, Check, CheckCircle2 } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

export default function SheetsApp() {
  const { updateSection, currentUser } = useAppContext();
  const [formula, setFormula] = useState('');
  const [result, setResult] = useState('');
  
  const isCompleted = currentUser?.training?.simSheets;

  const handleApply = () => {
    const f = formula.trim().toUpperCase();
    if (f === '=SUM(B2:B3)' || f === '=SUM(B2,B3)' || f === '=SUM(150,50)' || f === '=B2+B3' || f === '200') {
      setResult('200');
      updateSection('training', { simSheets: true }, 'Completed Google Sheets Simulation');
    } else {
      alert('Try typing =SUM(B2:B3) to calculate the total expense.');
    }
  };

  if (isCompleted) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'white', height: '100%' }}>
        <CheckCircle2 size={48} color="var(--success)" style={{ margin: '0 auto 1rem auto' }} />
        <h3 style={{ color: '#333' }}>Spreadsheet Saved!</h3>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>You successfully practiced using basic spreadsheet formulas.</p>
        <button onClick={() => updateSection('training', { simSheets: false })} style={{ marginTop: '1rem', padding: '0.5rem 1rem', borderRadius: '20px', border: '1px solid #ccc', background: 'white', cursor: 'pointer' }}>
          Practice Again
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#f1f3f4', color: '#333' }}>
      <div style={{ padding: '0.75rem 1rem', backgroundColor: 'white', display: 'flex', alignItems: 'center', borderBottom: '1px solid #e0e0e0', gap: '0.5rem' }}>
        <Grid size={20} color="#0f9d58" />
        <span style={{ fontWeight: 'bold', color: '#333', fontSize: '0.9rem' }}>Budget Tracker</span>
      </div>
      
      {/* Formula Bar */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '0.5rem', backgroundColor: 'white', borderBottom: '1px solid #e0e0e0' }}>
        <span style={{ fontStyle: 'italic', color: '#5f6368', marginRight: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold' }}>fx</span>
        <input 
          type="text" 
          placeholder="Type =SUM(B2:B3) here..."
          value={formula}
          onChange={(e) => setFormula(e.target.value)}
          style={{ flex: 1, border: '1px solid #ddd', borderRadius: '4px', padding: '0.25rem 0.5rem', outline: 'none', fontSize: '0.85rem' }}
        />
        <button onClick={handleApply} style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '0.5rem', color: '#0f9d58' }}>
          <Check size={18} />
        </button>
      </div>

      <div style={{ flex: 1, backgroundColor: 'white', overflow: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
          <thead>
            <tr>
              <th style={{ width: '30px', border: '1px solid #ccc', background: '#f8f9fa', color: '#666', fontWeight: 'normal', textAlign: 'center' }}></th>
              <th style={{ border: '1px solid #ccc', background: '#f8f9fa', color: '#666', fontWeight: 'normal', padding: '0.25rem' }}>A</th>
              <th style={{ border: '1px solid #ccc', background: '#f8f9fa', color: '#666', fontWeight: 'normal', padding: '0.25rem' }}>B</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ccc', background: '#f8f9fa', color: '#666', textAlign: 'center' }}>1</td>
              <td style={{ border: '1px solid #ccc', padding: '0.25rem 0.5rem', fontWeight: 'bold' }}>Item</td>
              <td style={{ border: '1px solid #ccc', padding: '0.25rem 0.5rem', fontWeight: 'bold' }}>Cost</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', background: '#f8f9fa', color: '#666', textAlign: 'center' }}>2</td>
              <td style={{ border: '1px solid #ccc', padding: '0.25rem 0.5rem' }}>Work Boots</td>
              <td style={{ border: '1px solid #ccc', padding: '0.25rem 0.5rem', textAlign: 'right' }}>150</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', background: '#f8f9fa', color: '#666', textAlign: 'center' }}>3</td>
              <td style={{ border: '1px solid #ccc', padding: '0.25rem 0.5rem' }}>Hard Hat</td>
              <td style={{ border: '1px solid #ccc', padding: '0.25rem 0.5rem', textAlign: 'right' }}>50</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', background: '#f8f9fa', color: '#666', textAlign: 'center' }}>4</td>
              <td style={{ border: '1px solid #ccc', padding: '0.25rem 0.5rem', fontWeight: 'bold' }}>Total</td>
              <td style={{ border: '2px solid #1a73e8', padding: '0.25rem 0.5rem', textAlign: 'right', backgroundColor: '#e8f0fe', fontWeight: 'bold' }}>
                {result || formula}
              </td>
            </tr>
          </tbody>
        </table>
        
        <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#e8f0fe', color: '#1a73e8', fontSize: '0.8rem', margin: '1rem', borderRadius: '4px' }}>
          <strong>Task:</strong> Select cell B4 and calculate the total cost using the <code>=SUM()</code> formula in the fx bar above, then tap the checkmark.
        </div>
      </div>
    </div>
  );
}
