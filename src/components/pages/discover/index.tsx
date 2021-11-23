import React, {useState} from 'react';
import PostCard from '../../common/postCard';
import { CommonPageHeading } from '../../common/heading/CommonPageHeading';

import './style.scss';
import WhiteButton from "../../common/button/whiteButton";
import BatchTag from "../../common/batchTag";

import {Card, Col, Row} from "antd";
import { ReactComponent as WhiteLogo } from '../../../assets/images/whiteLogo.svg';
import { ReactComponent as FilterImg } from '../../../assets/images/Filter.svg';

import { DefaultText } from '../../common/typography';

const cardActivityData = [
  {
    title: 'Save the puppy!',
    currency: '$500',
    type: 'donated',
    content: 'Convallis non non nullam nec purus at ut mauris sagittis. Diam sed at quam fermentum, vel tristique nec. A viverra enim augue nulla erat id phasellus sit elit. Purus.',
  },
  {
    title: 'Test',
    currency: '$25',
    type: 'donated',
    content: 'At auctor quisque potenti fringilla vel. Vitae diam velit aliquam interdum lorem hendrerit. Faucibus morbi ut justo gravida sed turpis porttitor tristique. Orci nulla orci massa odio gravida tortor aliquet turpis mattis. Ac risus fringilla quis quisque neque ut et in. Ac sed quisque purus volutpat venenatis, vitae. Duis non senectus vestibulum, gravida adipiscing mauris, commodo.',
  },
  {
    title: 'Demo',
    currency: '$150',
    type: 'donated',
    content: 'Convallis non non nullam nec purus at ut mauris sagittis. Diam sed at quam fermentum, vel tristique nec. A viverra enim augue nulla erat id phasellus sit elit. Purus.',
  },
  {
    title: 'Save the puppy!',
    currency: '$50',
    type: 'donated',
    content: 'At auctor quisque potenti fringilla vel. Vitae diam velit aliquam interdum lorem hendrerit. Faucibus morbi ut justo gravida sed turpis porttitor tristique. Orci nulla orci massa odio gravida tortor aliquet turpis mattis. Ac risus fringilla quis quisque neque ut et in. Ac sed quisque purus volutpat venenatis, vitae. Duis non senectus vestibulum, gravida adipiscing mauris, commodo.',
  },
  {
    title: 'Test',
    currency: '$150',
    type: 'donated',
    content: 'Convallis non non nullam nec purus at ut mauris sagittis. Diam sed at quam fermentum, vel tristique nec. A viverra enim augue nulla erat id phasellus sit elit. Purus.',
  },
  {
    title: 'Demo',
    currency: '$25',
    type: 'donated',
    content: 'At auctor quisque potenti fringilla vel. Vitae diam velit aliquam interdum lorem hendrerit. Faucibus morbi ut justo gravida sed turpis porttitor tristique. Orci nulla orci massa odio gravida tortor aliquet turpis mattis. Ac risus fringilla quis quisque neque ut et in. Ac sed quisque purus volutpat venenatis, vitae. Duis non senectus vestibulum, gravida adipiscing mauris, commodo.',
  },
];


const Discover = () => {
  const [activeTag, setActiveTag] = useState(1);
  const tagsData = [
    {
      id: 1,
      title: '#demo1',
    },
    {
      id: 2,
      title: '#demo2',
    },
    {
      id: 3,
      title: '#test'
    }
  ];

  return(
    <div className="discover-warapper">
      <div className="pageHeader">
        <CommonPageHeading className="pageHeader__header">Discover Project</CommonPageHeading>
        <DefaultText className="pageHeader__sideText">412 Result</DefaultText>
      </div>
      <div className="filter-hashTag-wrapper">
        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
          <Col>
            <BatchTag active title={'Filter'}>
              <FilterImg />
            </BatchTag>
          </Col>
          {tagsData.map((tag, index) => (
            <Col key={`tag-data-${tag.id}-${index}`}>
              <BatchTag title={tag.title} />
            </Col>
          ))}
        </Row>
      </div>
      <PostCard
        className="postCards"
        postCards={cardActivityData}
      />
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        <Col span={24}>
          <Card  bordered={false} className="bottomCard">
            <h2>Change the way good work is valued <WhiteLogo /></h2>
            <p><WhiteButton btnname='Get Started' /></p>
          </Card>
        </Col>
      </Row>

    </div>
  )
};

export default Discover;
