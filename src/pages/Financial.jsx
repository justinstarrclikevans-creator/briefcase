import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { VIDEOS } from '../config/videos';
import { Video, DollarSign, Calculator, PlayCircle } from 'lucide-react';
import VideoModal from '../components/VideoModal';

const Financial = () => {
  const { currentUser, updateSection, logActivity } = useAppContext();
  const [activeVideo, setActiveVideo] = useState(null);
  
  if (!currentUser) return null;

  const data = currentUser.financial;
  
  const initialBudget = data.budgetData || {};
  const [budget, setBudget] = useState({
    incomeJob: initialBudget.incomeJob || 0,
    incomeOther: initialBudget.incomeOther || initialBudget.income || 0,
    expenseRent: initialBudget.expenseRent || 0,
    expenseGroceries: initialBudget.expenseGroceries || 0,
    expenseUtilities: initialBudget.expenseUtilities || 0,
    expenseTransportation: initialBudget.expenseTransportation || 0,
    expenseChildSupport: initialBudget.expenseChildSupport || 0,
    expenseProbation: initialBudget.expenseProbation || 0,
    expenseOther: initialBudget.expenseOther || initialBudget.expenses || 0,
  });
  
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const inc = (parseFloat(budget.incomeJob) || 0) + (parseFloat(budget.incomeOther) || 0);
    const exp = (parseFloat(budget.expenseRent) || 0) + 
                (parseFloat(budget.expenseGroceries) || 0) + 
                (parseFloat(budget.expenseUtilities) || 0) + 
                (parseFloat(budget.expenseTransportation) || 0) + 
                (parseFloat(budget.expenseChildSupport) || 0) + 
                (parseFloat(budget.expenseProbation) || 0) + 
                (parseFloat(budget.expenseOther) || 0);
    setBalance(inc - exp);
  }, [budget]);

  const handleBudgetChange = (field, value) => {
    setBudget(prev => ({ ...prev, [field]: value }));
  };

  const handleCheck = (field) => {
    updateSection('financial', { [field]: !data[field] }, `Updated financial task: ${field}`);
  };

  const saveBudget = () => {
    // Convert all to floats before saving
    const parsedBudget = Object.keys(budget).reduce((acc, key) => {
      acc[key] = parseFloat(budget[key]) || 0;
      return acc;
    }, {});

    updateSection('financial', {
      budgetData: parsedBudget,
      budgetWorksheetCompleted: true
    }, 'Completed and saved detailed Budget Worksheet');
  };

  const renderInput = (field, label) => (
    <div style={{ marginBottom: '0.75rem' }}>
      <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>{label}</label>
      <div style={{ position: 'relative' }}>
        <DollarSign size={16} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        <input 
          type="number" 
          className="input-field" 
          style={{ paddingLeft: '2rem' }}
          placeholder="0.00"
          value={budget[field] === 0 ? '' : budget[field]}
          onChange={(e) => handleBudgetChange(field, e.target.value)}
        />
      </div>
    </div>
  );

  return (
    <div className="page-container animate-fade-in">
      {activeVideo && <VideoModal videoConfig={activeVideo} onClose={() => setActiveVideo(null)} />}
      <h1 style={{ color: 'var(--primary)' }}>Financial</h1>
      <p className="text-muted">Manage your budget, understand paychecks, and set financial goals.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        
        {/* Budget Worksheet */}
        <div className="glass-card">
          <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calculator size={20} /> Detailed Budget Worksheet
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
            <div>
              <h4 style={{ margin: '0 0 1rem 0', color: 'var(--success)' }}>Monthly Income</h4>
              {renderInput('incomeJob', 'Job / Primary Income')}
              {renderInput('incomeOther', 'Other Income')}
              
              <h4 style={{ margin: '1.5rem 0 1rem 0', color: 'var(--danger)' }}>Monthly Expenses</h4>
              {renderInput('expenseRent', 'Rent / Housing')}
              {renderInput('expenseGroceries', 'Groceries / Food')}
              {renderInput('expenseUtilities', 'Phone / Utilities')}
              {renderInput('expenseTransportation', 'Transportation / Gas')}
              {renderInput('expenseChildSupport', 'Child Support')}
              {renderInput('expenseProbation', 'Probation Fees')}
              {renderInput('expenseOther', 'Other Expenses')}
            </div>

            <div style={{ padding: '1rem', marginTop: '1rem', background: balance >= 0 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
              <h4 style={{ margin: 0, color: balance >= 0 ? 'var(--success)' : 'var(--danger)' }}>
                Remaining Balance: ${balance.toFixed(2)}
              </h4>
            </div>

            <button className="btn-primary" onClick={saveBudget} style={{ marginTop: '0.5rem' }}>Save Budget</button>
            {data.budgetWorksheetCompleted && <p style={{ color: 'var(--success)', fontSize: '0.85rem', textAlign: 'center' }}>Budget saved!</p>}
          </div>
        </div>

        {/* Education & Checklist */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="glass-card">
            <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Financial Education</h3>
            
            <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.03)', borderRadius: '8px', marginTop: '1rem', marginBottom: '1rem' }}>
              <label className="checkbox-wrapper" style={{ padding: 0, paddingBottom: '0.5rem' }}>
                <input type="checkbox" checked={data.understandingPaychecks} onChange={() => handleCheck('understandingPaychecks')} />
                <span>Understanding of Paychecks & Taxes</span>
              </label>
              <button onClick={() => setActiveVideo(VIDEOS.readingPaycheck)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.875rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                <PlayCircle size={16} /> Watch: Reading a Paycheck
              </button>
              <button onClick={() => setActiveVideo(VIDEOS.employeeBenefits)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.875rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                <PlayCircle size={16} /> Watch: Understanding employer benefits
              </button>
            </div>
          </div>

          <div className="glass-card">
            <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Financial Checklist</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
              {[
                { id: 'bankAccountOpened', label: 'Bank Account Opened' },
                { id: 'savingsGoal', label: 'Savings Goal Identified' },
                { id: 'creditReport', label: 'Credit Report Reviewed' },
                { id: 'childSupportReviewed', label: 'Child Support Reviewed' },
                { id: 'probationObligations', label: 'Probation Obligations Reviewed' },
              ].map((item) => (
                <label key={item.id} className="checkbox-wrapper">
                  <input type="checkbox" checked={data[item.id]} onChange={() => handleCheck(item.id)} />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Financial;
