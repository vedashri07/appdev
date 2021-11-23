import React from 'react';
import { Row, Col, Space, Avatar } from 'antd';

import { CommonPageHeading } from '../../common/heading/CommonPageHeading';
import { DefaultText } from '../../common/typography';
import SmallCard from '../../common/smallCard';
import IconCard from '../../common/smallCard/iconCard';
import SimpleCard from '../../common/simpleCard';
import PostCard from '../../common/postCard';
import { PageHeader } from '../../common/StyledComponents/Headers';
import { DashboardSection } from '../../common/StyledComponents';

import strongArm from '../../../assets/images/strong-arm.png';
import savePuppy from '../../../assets/images/save-puppy.png';
import { ReactComponent as Rewards } from '../../../assets/images/Rewards.svg';
import { ReactComponent as SmallLogo } from '../../../assets/logo/small-logo.svg';
import { ReactComponent as Other } from '../../../assets/images/Other.svg';
import { ReactComponent as Commerce } from '../../../assets/images/Commerce.svg';
import { ReactComponent as Travel } from '../../../assets/images/Travel.svg';

import '../../../styles/page/profile.scss';
import RoundedButton from "../../common/button/roundedButton";

const smallCardData = [
  {
    icon: <Rewards height={32} width={32} />,
    title: '$500',
    subTitle: 'Today Earning',
  },
  {
    icon: <Other height={32} width={32} />,
    title: '410',
    subTitle: 'Backers',
  },
  {
    icon: <Commerce height={32} width={32} />,
    title: '410',
    subTitle: 'Today Earning',
  },
  {
    icon: <Travel height={32} width={32} />,
    title: '3',
    subTitle: 'Active Projects',
  },
];

const cardActivityData = [
  {
    title: 'Hanna Smith',
    currency: '$500',
    type: 'donated',
    content: 'Convallis non non nullam nec purus at ut mauris sagittis. Diam sed at quam fermentum, vel tristique nec. A viverra enim augue nulla erat id phasellus sit elit. Purus.',
  },
  {
    title: 'Hanna Smith',
    currency: '$25',
    type: 'donated',
    content: 'At auctor quisque potenti fringilla vel. Vitae diam velit aliquam interdum lorem hendrerit. Faucibus morbi ut justo gravida sed turpis porttitor tristique. Orci nulla orci massa odio gravida tortor aliquet turpis mattis. Ac risus fringilla quis quisque neque ut et in. Ac sed quisque purus volutpat venenatis, vitae. Duis non senectus vestibulum, gravida adipiscing mauris, commodo.',
  },
  {
    title: 'Hanna Smith',
    currency: '$150',
    type: 'donated',
    content: 'Convallis non non nullam nec purus at ut mauris sagittis. Diam sed at quam fermentum, vel tristique nec. A viverra enim augue nulla erat id phasellus sit elit. Purus.',
  },
  {
    title: 'Hanna Smith',
    currency: '$50',
    type: 'donated',
    content: 'At auctor quisque potenti fringilla vel. Vitae diam velit aliquam interdum lorem hendrerit. Faucibus morbi ut justo gravida sed turpis porttitor tristique. Orci nulla orci massa odio gravida tortor aliquet turpis mattis. Ac risus fringilla quis quisque neque ut et in. Ac sed quisque purus volutpat venenatis, vitae. Duis non senectus vestibulum, gravida adipiscing mauris, commodo.',
  },
  {
    title: 'Hanna Smith',
    currency: '$150',
    type: 'donated',
    content: 'Convallis non non nullam nec purus at ut mauris sagittis. Diam sed at quam fermentum, vel tristique nec. A viverra enim augue nulla erat id phasellus sit elit. Purus.',
  },
  {
    title: 'Hanna Smith',
    currency: '$25',
    type: 'donated',
    content: 'At auctor quisque potenti fringilla vel. Vitae diam velit aliquam interdum lorem hendrerit. Faucibus morbi ut justo gravida sed turpis porttitor tristique. Orci nulla orci massa odio gravida tortor aliquet turpis mattis. Ac risus fringilla quis quisque neque ut et in. Ac sed quisque purus volutpat venenatis, vitae. Duis non senectus vestibulum, gravida adipiscing mauris, commodo.',
  },
];

const Profile = () => {
  return (
    <div className="profileWrapper">
      <div className="pageHeader">
        <CommonPageHeading>Good morning, </CommonPageHeading>
        <CommonPageHeading className="pageHeader__userName">Zach Doty<img src={strongArm} alt={'strong-arm'} /></CommonPageHeading>
      </div>

      <DashboardSection className="profileCardWrapper">
        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
          {smallCardData.map((cData, index) => (
            <Col className="gutter-row" sm={12} xs={12} md={6} lg={6} xl={6} key={`${cData.title}-${index}`}>
              <SmallCard className="profileCardWrapper__smallCard">
                <IconCard>
                  {cData.icon}
                </IconCard>
                <div className="vertical-wrapper">
                  <Space direction="vertical" size={0}>
                    <DefaultText className="default-text large"> {cData.title} </DefaultText>
                    <DefaultText className="default-text medium"> {cData.subTitle} </DefaultText>
                  </Space>
                </div>
              </SmallCard>
            </Col>
          ))}
        </Row>
      </DashboardSection>


      <DashboardSection className="profileSection profileProjectWrapper">

        <PageHeader>
          <CommonPageHeading>Projects</CommonPageHeading>
          <DefaultText className="default-text red show-all"> Show All </DefaultText>
        </PageHeader>


          <PostCard
            className='postCards'
            postCards={cardActivityData}
          />

        <div className="page-footer">
          <RoundedButton btnname='Show All'/>
        </div>
      </DashboardSection>

      <DashboardSection className="profileSection profileActivityWrapper">
        <PageHeader>
          <CommonPageHeading>Activity</CommonPageHeading>
          <DefaultText className="default-text red show-all"> Show All </DefaultText>
        </PageHeader>

        <div className="activityColCardWrapper">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {cardActivityData.map((e, index) =>
              <Col className="gutter-row" sm={24} xs={24} lg={12} xl={12}>
                <SimpleCard className="activityColCardWrapper__simpleCard" key={`${e.title}-${index}`}>
                  <div>
                    <Avatar className="activityColCardWrapper__avatar" size={36} icon={<Other height={15} width={15} />} />
                  </div>
                  <div className="simpleCardContent">
                    <DefaultText className="heading">
                      <span className="userName">{e.title}</span>
                      donated
                      <span className="money">{e.currency}</span>
                    </DefaultText>
                    <div className="content">
                      {e.content}
                    </div>
                  </div>
                </SimpleCard>
              </Col>
            )}
          </Row>
        </div>

        <div className="page-footer">
          <RoundedButton btnname='Show All'/>
        </div>

      </DashboardSection>
    </div>
  )
};

export default Profile;
