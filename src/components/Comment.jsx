import { Avatar, Comment as CommentAntd } from 'antd';
import React, { useState } from 'react';
import { theme } from '../style/theme';

const Comment = () => {
  return (
    <CommentAntd
      style={{ color: `${theme.white}` }}
      author={<a style={{ color: `${theme.white}` }}>Yoon XX</a>}
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Yoon XX" />}
      content={
        <p>
          It's fun and exciting to do a project based on what we learned. It's
          fun and exciting to do a project based on what we learned. It's fun
          and exciting to do a project based on what we learned.
        </p>
      }
    />
  );
};

export default Comment;
