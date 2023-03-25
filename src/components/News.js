import React from 'react';
import NewsItems from './NewsItems';


class News extends React.Component {
      render() {
            return (
            <div>
            this is news Component
            <NewsItems/>
            <NewsItems/>
            <NewsItems/>
            <NewsItems/>
            <NewsItems/>
            <NewsItems/>
            </div>
            );
      }
}



export default News;