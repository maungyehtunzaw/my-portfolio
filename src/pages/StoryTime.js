import React from 'react';
import { Timeline, Typography, Card, Tag } from 'antd';
import timelineData from '../data/timelineData';  // Import the timeline data

const { Title, Paragraph } = Typography;

function StoryTime() {
  const timelineItems = timelineData.map((item, index) => ({
    key: index,
    dot: (
      <div style={{ fontSize: "30px" }}>
        {item.icon}
      </div>
    ),
    children: (
      <Card title={`${item.event} (${item.startYear} - ${item.endYear})`} bordered={true}>
        <Paragraph>{item.description}</Paragraph>
        <div>
          {item.skills.map((skill, idx) => (
            <Tag key={idx} color="blue">{skill}</Tag>
          ))}
        </div>
      </Card>
    )
  }));

  return (
    <div>
      <Title level={2}>Journey Through Technology: From Foundations to Expertise</Title>
      <Timeline items={timelineItems} />
    </div>
  );
}

export default StoryTime;
