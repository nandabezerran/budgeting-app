import React, { useState } from 'react';

export default function AccountCreate() {
    /**
     * State Management 
     * Initializes formData with default values
     * setFormData: function to update the formData state
    **/
    const [formData, setFormData] = useState({
        name: '',
        type: '',
    });

    // Event Handlers
    /**
     * Updates formData whenever an input field changes
     * e.target.name: refers to the name attribute of the input to identify which field is being updated
     * e.target.value: the new value of the input field
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const [responseMessage, setResponseMessage] = useState('');

    /**
     * Submits formData
     */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Account Submitted:', formData);
        try {
            const response = await fetch('/api/account', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                setResponseMessage('Account created successfully!');
                console.log('Response from API:', data);
            } else {
                const errorData = await response.json();
                setResponseMessage(`Error: ${errorData.error}`);
                console.error('Error creating account:', errorData);
            }
        } catch (error) {
            setResponseMessage('An unexpected error occurred.');
            console.error('Unexpected error:', error);
        }
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
                <h2 style={titleStyle}>Create Account</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label style={labelStyle}>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="Enter account name"
                            required
                        />
                    </div>
                    <div>
                        <label style={labelStyle}>Type</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        >
                            <option value="">Select type</option>
                            <option value="savings">Savings</option>
                            <option value="investing">Investing</option>
                            <option value="checking">Checking</option>
                        </select>
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
                {responseMessage && <p>{responseMessage}</p>}
            </div>
        </div>
    );
}
