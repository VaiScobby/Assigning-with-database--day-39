import React, { useState } from 'react';
import { createMentor } from '../services/api';

const MentorForm = () => {
    const [mentorName, setMentorName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createMentor({ name: mentorName });
            alert('Mentor created successfully!');
            setMentorName('');
        } catch (err) {
            console.error(err);
            alert('Failed to create mentor');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Mentor Name:
                <input
                    type="text"
                    value={mentorName}
                    onChange={(e) => setMentorName(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Create Mentor</button>
        </form>
    );
};

export default MentorForm;
