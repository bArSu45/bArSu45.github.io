import React from "react";
import style from './Stat.module.css'

function Stat({ colorMode }) {

  return (
    <section className={style.services_experience}>
      <div className="container" id="coding">
        <div className={style.experiences} id={style.experiences}>
          <div className={style.experience}>
            <h3>1200+</h3>
            <p>Hrs Coding</p>
          </div>
          <div className={style.portfolios}>
            <div className={style.portfolio} style={{ backgroundColor: colorMode === 'light' ? "#5F7464" : '#488A99' }}>
              <h4>60+</h4>
              <h6>Mini Projects</h6>
            </div>
            <div className={style.portfolio} style={{ backgroundColor: colorMode === 'light' ? "#5F7464" : '#488A99' }}>
              <h4>05+</h4>
              <h6>Major Projects</h6>
            </div>
            <div className={style.portfolio} style={{ backgroundColor: colorMode === 'light' ? "#5F7464" : '#488A99' }}>
              <h4>300+</h4>
              <h6>DSA Problem</h6>
            </div>
            <div className={style.portfolio} style={{ backgroundColor: colorMode === 'light' ? "#5F7464" : '#488A99' }}>
              <h4>200+</h4>
              <h6>Hrs Soft Skills</h6>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default Stat;
