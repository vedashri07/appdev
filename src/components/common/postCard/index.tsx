import React from 'react';
import { Col, Row } from 'antd';

import PostCardCol from './PostCardCol';

import './style.scss';

interface postCard {
  image?: any,
  title: string,
  content: string,
  currency: string,
}

interface postCardsProps extends Array<postCard>{}

interface postCardProps {
  postCards: postCardsProps,
  className?: string,
}

const PostCard = ({ postCards, className } : postCardProps) => {
  return (
    <div className={`${className} postCardWrapper`}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

        {postCards.map(e => (
          <PostCardCol {...e} />
        ))}

      </Row>
    </div>
  )
};

export default PostCard;
