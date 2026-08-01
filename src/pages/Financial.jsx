import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { VIDEOS } from '../config/videos';
import { Video, DollarSign, Calculator } from 'lucide-react';

const Financial = () => {
  const { currentUser, updateSection } = useAppContext();
  
  if (!currentUser) return null;

  const data = currentUser.financial;
  
  const [income, setIncome] = useState(data.budgetData.income || '');
  const [expenses, setExpenses] = useState(data.budgetData.expenses || '');
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const inc = parseFloat(income) || 0;
    const exp = parseFloat(expenses) || 0;
    setBalance(inc - exp);
  }, [income, expenses]);

  const handleCheck = (field) => {
    updateSection('financial', { [field]: !data[field] }, `Updated financial task: ${field}`);
  };

  const saveBudget = () => {
    updateSection('financial', {
      budgetData: { income: parseFloat(income) || 0, expenses: parseFloat(expenses) || 0 },
      budgetWorksheetCompleted: true
    });
  };

  return (
    <div className="page-container animate-fade-in">
      <h1 style={{ color: 'var(--primary)' }}>Financial</h1>
      <p className="text-muted">Manage your budget, understand paychecks, and set financial goals.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        
        {/* Budget Worksheet */}
        <div className="glass-card">
          <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calculator size={20} /> Interactive Budget Worksheet
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Total Monthly Income</label>
              <div style={{ position: 'relative' }}>
                <DollarSign size={16} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input 
                  type="number" 
                  className="input-field" 
                  style={{ paddingLeft: '2rem' }}
                  placeholder="0.00"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Total Monthly Expenses (Rent, Food, Phone, etc.)</label>
              <div style={{ position: 'relative' }}>
                <DollarSign size={16} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input 
                  type="number" 
                  className="input-field" 
                  style={{ paddingLeft: '2rem' }}
                  placeholder="0.00"
                  value={expenses}
                  onChange={(e) => setExpenses(e.target.value)}
                />
              </div>
            </div>

            <div style={{ padding: '1rem', background: balance >= 0 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
              <h4 style={{ margin: 0, color: balance >= 0 ? 'var(--success)' : 'var(--danger)' }}>
                Remaining Balance: ${balance.toFixed(2)}
              </h4>
            </div>

            <button className="btn-primary" onClick={saveBudget}>Save Budget</button>
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
              <a href={VIDEOS.readingPaycheck} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.875rem' }}>
                <Video size={16} /> Watch: How to read a paycheck
              </a>
              <a href={VIDEOS.employeeBenefits} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.875rem' }}>
                <Video size={16} /> Watch: Understanding employer benefits
              </a>
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
