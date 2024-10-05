import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Carousel, Image, Tag, Card } from 'antd';
import projectsData from '../data/projectData';  // Import the projects data

const { Title, Paragraph } = Typography;

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectsData.find(proj => proj.id === parseInt(projectId));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <Card>
      <Title level={2}>{project.title}</Title>
      <Paragraph>{project.description}</Paragraph>
      <Paragraph>Company: {project.company}</Paragraph>
      <Paragraph>Time: {project.time}</Paragraph>
      <div>
        {project.tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <Carousel>
        {project.images.map((image, index) => (
          <div key={index}>
            <Image src={image} alt={`${project.title} ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </Card>
  );
}

export default ProjectDetail;
