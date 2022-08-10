import { Avatar, Comment as _Comment } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../style/theme';

const Comment = ({ footerData }) => {
  return (
    <CommentWrapper
      author={
        <p
          style={{
            color: `${theme.soft_blue}`,
            fontSize: `${theme.fs_3}`,
          }}
        >
          {footerData.github_id}
        </p>
      }
      avatar={<Avatar src={footerData.avatar} alt={footerData.github_id} />}
      content={
        <div>
          It's fun and exciting to do a project based on what we learned. It's
          fun and exciting to do a project based on what we learned. It's fun
          and exciting to do a project based on what we learned.
        </div>
      }
    />
  );
};

const CommentWrapper = styled(_Comment)`
  color: ${theme.very_dark_blue_line};

  :hover {
    color: ${theme.soft_blue};
  }
`;

export default Comment;
