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
          <div className="row">
            <Form.Group className="mb-3 col-md-10 col-lg-10" controlId="primaryskill">
              <Form.Label>Primary Skill</Form.Label>
              <Form.Control type="text" placeholder="Enter the skill you are looking for" required />
            </Form.Group>
            <Form.Group className="mb-3 col-md-2 col-lg-2" controlId="primaryskillweightage">
              <Form.Label>Weightage</Form.Label>
              <Form.Select aria-label="Weightage" required>
                <option value="20%">20%</option>
                <option value="30%">30%</option>
                <option value="50%" selected>50%</option>
                <option value="70%">70%</option>
                <option value="100%">100%</option>
              </Form.Select>
            </Form.Group>
          </div>

          <div className="row">
            <Form.Group className="mb-3 col-md-10 col-lg-10" controlId="secondaryskill">
              <Form.Label>Secondary Skill</Form.Label>
              <Form.Control type="text" placeholder="Enter the skill you are looking for" required />
            </Form.Group>
            <Form.Group className="mb-3 col-md-2 col-lg-2" controlId="secondaryskillweightage">
              <Form.Label>Weightage</Form.Label>
              <Form.Select aria-label="Weightage" required>
                <option value="20%">20%</option>
                <option value="30%" selected>30%</option>
                <option value="50%">50%</option>
                <option value="70%">70%</option>
                <option value="100%">100%</option>
              </Form.Select>
            </Form.Group>
          </div>

          <div className="row">
            <Form.Group className="mb-3 col-md-10 col-lg-10" controlId="tertiaryskill">
              <Form.Label>Tertiary Skill</Form.Label>
              <Form.Control type="text" placeholder="Enter the skill you are looking for" required />
            </Form.Group>
            <Form.Group className="mb-3 col-md-2 col-lg-2" controlId="tertiaryskillweightage">
              <Form.Label>Weightage</Form.Label>
              <Form.Select aria-label="Weightage" required>
                <option value="20%" selected>20%</option>
                <option value="30%">30%</option>
                <option value="50%">50%</option>
                <option value="70%">70%</option>
                <option value="100%">100%</option>
              </Form.Select>
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="relatedskill">
            <Form.Label>Related Keywords</Form.Label>
            <Form.Control as="textarea" placeholder="Enter comma separated words" required />
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

          <Form.Group className="mb-3" controlId="expectedctc">
            <Form.Label>Expected CTC</Form.Label>
            <Form.Select aria-label="Expected CTC" required>
              <option value="1lakh-3lakh">1lakh - 3lakh</option>
              <option value="3lakh-6lakh">3lakh - 6lakh</option>
              <option value="6lakh-10lakh">6lakh - 10lakh</option>
              <option value="10lakh-15lakh">10lakh - 15lakh</option>
              <option value="15lakh-20lakh">15lakh - 20lakh</option>
              <option value="20lakh-above">20lakh & above</option>
            </Form.Select>
          </Form.Group>
        </Form>

        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default RecruiterProfile;