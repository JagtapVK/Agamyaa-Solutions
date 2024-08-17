import React from 'react';
import './ProcessSection.css';

const ProcessSection = () => {
  return (
    <div className="process-section">
      <div className="process-header">
        <h2>OUR PROCESS OF WORKING</h2>
        <p>
          Riemen Solution is one of the best call center company in India. Riemen Solution was established and is
          working in this field since 2013. Our company has expertise staff which handles the work and makes our
          clients and your clients satisfied. Our believe is to provide you with quality work not quantity work. Our
          team follow a unique way of completing our tasks which is the most effective way till yet. By following this
          process we have made many happy clients for us. Let's know about the process:
        </p>
      </div>
      <div className="process-steps">
        <div className="step">
          <h3>1. The Planning Phase:</h3>
          <p>
            First of all after getting any project our team do a deep research on the project to understand the
            needs and services of our customers. Planning is the most basic and effective step for any project.
            Under this stage we create whole transitions which includes names of all participants and also the
            deadline of each and every activity. After doing all planning the tasks are signed-off by the
            stakeholders.
          </p>
        </div>
        <div className="step">
          <h3>2. Acquiring Phase:</h3>
          <p>
            Under this phase all the documentation is taken care of. Before doing anything else the migration
            manager acquires the assistance of networking, project documentation and experts to recognize
            the process details. The team which will handle the process make sure that right competencies are
            identified before the recruitment begins. Also the team will ensure that all the required documents
            are approved and signed-off by the client.
          </p>
        </div>
        <div className="step">
          <h3>3. Transferring Phase:</h3>
          <p>
            Under this phase the functional managers execute various plans which were developed and signed-
            off in the previous stage. Various backups will also be taken. The tasks are then assigned to the
            staff members according to the requirement. After that they have to clear a process where they
            have to show their skills before answering live calls.
          </p>
        </div>
        <div className="step">
          <h3>4. Operating Phase:</h3>
          <p>
            This phase begins with the evaluation of tasks involving the call center process. After the
            implementation the team will be monitored closely and will be supervised by our head staff. The
            quality work will be maintained by daily data integrity checks, weekly call monitoring and regular
            coaching.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
