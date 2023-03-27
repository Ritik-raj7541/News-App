import React from 'react';
import NewsItems from './NewsItems';


class News extends React.Component {
      render() {
            return (
            <div>
            this is news Component
            <div className="container my-3">
            this is news Component
            <div className="row align-items-center my-3">
                  <div className="col-md-4">
                  <NewsItems title="good morning" description="good days" image="https://i.insider.com/641dd3df23738f0018bb00f3?width=1200&format=jpeg"  />
                  </div>
                  <div className="col-md-4">
                  <NewsItems title="good morning" description="good days" image="https://media.wired.com/photos/641b5f09a52b790517dbfead/191:100/w_1280,c_limit/Logitech-MX-Mechanical-Keyboard-Gear.jpg" />
                  </div>
                  <div className="col-md-4">
                  <NewsItems title="good morning" description="good days" image="https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/01/0/0/IMF-Managing-Director-Kristalina-Georgieva-Reuters-A.jpg?ve=1&tl=1"/>
                  </div>
            </div>
            </div>
            </div>
            );
      }
}



export default News;