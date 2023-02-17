import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RecruiterProfile = () => {
  return (
    <div className="recruiter-profile">
      <div className="profile-header">
        Fill up the form below and find the best profiles matching your requirement
      </div>
      <div className="profile-form">
        <Form>
          <Form.Group className="mb-3" controlId="primaryskill">
            <Form.Label>Primary Skill</Form.Label>
            <Form.Control type="text" placeholder="Enter the skill you are looking for" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="secondarySkill">
            <Form.Label>Secondary Skills</Form.Label>
            <Form.Control type="text" placeholder="Enter multiple comma separate skills" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="years">
            <Form.Label>Year(s) of Experience</Form.Label>
            <Form.Select aria-label="Year(s) of Experience" required>
              <option value="0-1">0-1</option>
              <option value="1-3">1-3</option>
              <option value="3-5">3-5</option>
              <option value="5-8">5-8</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="type">
            <Form.Label>Type of Employment</Form.Label>
            <Form.Select aria-label="Type of Employment" required>
              <option value="full">Full Time</option>
              <option value="contract">Contract</option>
            </Form.Select>
          </Form.Group>
        </Form>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default RecruiterProfile;