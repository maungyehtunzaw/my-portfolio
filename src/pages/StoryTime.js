import React from 'react';
import { Timeline, Typography, Card, Tag } from 'antd';
import timelineData from '../data/timelineData';  // Import the timeline data

const { Title, Paragraph } = Typography;

function StoryTime() {
  return (
    <div>
      <Title level={2}>How i'am becoming & passing through</Title>
      <Timeline>
        {timelineData.map((item, index) => (
          <Timeline.Item key={index} dot={item.icon}>
            <Card title={`${item.event} (${item.startYear} - ${item.endYear})`} bordered={false}>
              <Paragraph>{item.description}</Paragraph>
              <div>
                {item.skills.map((skill, idx) => (
                  <Tag key={idx} color="blue">{skill}</Tag>
                ))}
              </div>
            </Card>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
}

export default StoryTime;
