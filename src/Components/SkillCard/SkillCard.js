import React from 'react';
import './SkillCard.css';

const SkillCard = () => {
  return (
    /* From Uiverse.io by naveenkumarr-onyx */
    <div className="card">
      <div className="header">My Skills</div>
      <div className="body">
        <div className="skill">
          <div className="skill-name html">Cell culture</div>
          <div className="skill-level">
            <div style={{ width: '90%' }} className="skill-percent"></div>
          </div>
          <div className="skill-percent-number">90%</div>
        </div>
        <div className="skill">
          <div className="skill-name css">Western Blot</div>
          <div className="skill-level">
            <div style={{ width: '80%' }} className="skill-percent"></div>
          </div>
          <div className="skill-percent-number">80%</div>
        </div>
        <div className="skill">
          <div className="skill-name js">Quantitative PCR</div>
          <div className="skill-level">
            <div style={{ width: '75%' }} className="skill-percent"></div>
          </div>
          <div className="skill-percent-number">75%</div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
