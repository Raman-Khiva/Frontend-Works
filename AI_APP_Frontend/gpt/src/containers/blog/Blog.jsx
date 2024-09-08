import React from 'react';
import './blog.css';
import { Article } from '../../components';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container__groupA'>
          <Article imgUrl="blog01.png" text="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now."/>
        </div>
        <div className='gpt3__blog-container__groupB'>
          <Article imgUrl="blog02.png" text="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now."/>
          <Article imgUrl="blog03.png" text="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now."/>
          <Article imgUrl="blog04.png" text="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now."/>
          <Article imgUrl="blog05.png" text="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now."/>
        </div>
      </div>
    </div>
  )
}

export default Blog;
