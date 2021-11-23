
import React from 'react';

import { Row, Col, Space, Avatar } from 'antd';
import SmallCard from '../../common/smallCard';
import IconCard from '../../common/smallCard/iconCard';
import PostCard from '../../common/postCard';
import { PageHeader } from '../../common/StyledComponents/Headers';
import { DashboardSection } from '../../common/StyledComponents';
import RoundedButton from "../../common/button/roundedButton";
import { CommonPageHeading } from '../../common/heading/CommonPageHeading';

import { ReactComponent as Other } from '../../../assets/images/Other.svg';



import { DefaultText } from '../../common/typography';
import '../../../styles/page/profilenew.scss';



const smallCardData = [
    {
        icon: <Other height={32} width={32} />,
        title: '410',
        subTitle: 'Backers',
    },
    {
        icon: <Other height={32} width={32} />,
        title: '410',
        subTitle: 'Backers',
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
        currency: '$150',
        type: 'donated',
        content: 'Convallis non non nullam nec purus at ut mauris sagittis. Diam sed at quam fermentum, vel tristique nec. A viverra enim augue nulla erat id phasellus sit elit. Purus.',
    },
];

const ProfileNew = () => {
    return (
        <div className="profileWrapper">
            <div className="cover-photo">
                <img src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" className="profile-photo" />
            </div>
            <div className="username-wrapper">
                <DefaultText>
                    <div className="username default-text large ">James Aspey</div>
                    <div className="content">
                        Creating Educational & Inspiration Content

                    </div>
                </DefaultText>
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
                    <RoundedButton btnname='Show All' />
                </div>
            </DashboardSection>

        </div>
    )
};

export default ProfileNew;