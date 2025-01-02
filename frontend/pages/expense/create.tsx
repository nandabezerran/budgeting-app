import React, { useState } from 'react';

export default function ExpenseCreate() {
    /**
     * State Management 
     * Initializes formData with default values
     * setFormData: function to update the formData state
    **/
    const [formData, setFormData] = useState({
        value: '',
        date: '',
        description: '',
        accountId: '',
    });

    //Event Handlers
    /**
     * Updates formData whenever an input field changes
     * e.target.name: refers to the name attribute of the input to identify which field is being updated
     * e.target.value: the new value of the input field
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    /**
     * Submits formData
     */
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Expense Submitted:', formData);
        // Add API integration here
    };

    const containerStyle = {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f4f6',
    };

    const cardStyle = {
        width: '100%',
        maxWidth: '500px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '32px',
    };

    const titleStyle = {
        fontSize: '24px',
        fontWeight: '600',
        color: '#1f2937',
        marginBottom: '24px',
    };

    const labelStyle = {
        display: 'block',
        fontSize: '14px',
        fontWeight: '500',
        color: '#4b5563',
        marginBottom: '8px',
    };

    const inputStyle = {
        display: 'block',
        width: '100%',
        border: '1px solid #d1d5db',
        borderRadius: '4px',
        padding: '8px',
        fontSize: '14px',
        color: '#1f2937',
        marginBottom: '16px',
    };

    const buttonStyle = {
        width: '100%',
        padding: '12px 16px',
        backgroundColor: '#4f46e5',
        color: 'white',
        fontSize: '16px',
        fontWeight: '500',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
    };

    const buttonHoverStyle = {
        backgroundColor: '#4338ca',
    };

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h2 style={titleStyle}>Create Expense</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label style={labelStyle}>Value</label>
                        <input
                            type="number"
                            name="value"
                            value={formData.value}
                            onChange={handleChange}
                            step="0.01"
                            style={inputStyle}
                            placeholder="Enter value"
                            required
                        />
                    </div>
                    <div>
                        <label style={labelStyle}>Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    </div>
                    <div>
                        <label style={labelStyle}>Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="Enter description (optional)"
                        />
                    </div>
                    <div>
                        <label style={labelStyle}>Account ID</label>
                        <input
                            type="number"
                            name="accountId"
                            value={formData.accountId}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="Enter account ID"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        style={buttonStyle}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
