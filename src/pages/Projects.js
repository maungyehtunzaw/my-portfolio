import React, { useState } from 'react';
import { Typography, Card, Tag, Tabs, Image, Row, Col, Modal, Carousel } from 'antd';
import projectsData from '../data/project_data';  // Import the projects data

const { Title, Paragraph } = Typography;
const { CheckableTag } = Tag;
const { TabPane } = Tabs;

const categories = ['All', 'Web Development', 'App Development'];
const categoryTags = {
  'All': ['PHP', 'Javascript', 'Laravel', 'React', 'MySQL', 'Codeigniter', 'jQuery', 'CakePHP', 'Flutter', 'Firebase'],
  'Web Development': ['PHP', 'Javascript', 'Laravel', 'React', 'MySQL', 'Codeigniter', 'jQuery', 'CakePHP'],
  'App Development': ['Flutter', 'Firebase', 'React']
};

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedTags, setSelectedTags] = useState([]);
  const handleCategoryChange = (key) => {
    console.log("selected category"+key);
    setSelectedCategory(key);
    setSelectedTags([]); 
     // Reset selected tags when category changes
  };

  const handleTagChange = (tag, checked) => {
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

 

  const filteredProjects = projectsData.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const tagsMatch = selectedTags.length ? selectedTags.every(tag => project.tags.includes(tag)) : true;
    return categoryMatch && tagsMatch;
  });

  return (
    <div>
      <Title level={2}>Projects</Title>
      <Tabs defaultActiveKey={categories[0]} onChange={handleCategoryChange}>
        {categories.map(category => (
          <TabPane tab={category} key={category}>
            <div style={{ marginBottom: 20 }}>
              {categoryTags[category].map(tag => (
                <CheckableTag
                  key={tag}
                  checked={selectedTags.includes(tag)}
                  onChange={checked => handleTagChange(tag, checked)}
                >
                  {tag}
                </CheckableTag>
              ))}
            </div>
            <Row gutter={[16, 16]} style={{ display: 'flex', flexWrap: 'wrap' }}>
              {filteredProjects.map(project => (
                <Col xs={24} sm={24} md={12} lg={8} key={project.id} style={{ display: 'flex' }}>
                  <Card
                    className="project-card"
                    title={project.title}
                    bordered={false}
                    cover={<Image src={project.mainImage} alt={project.title} style={{ height: 200, objectFit: 'cover', cursor: 'pointer' }} />}
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}
                  >
                    <Paragraph>{project.description}</Paragraph>
                    <div>
                      {project.tags.map(tag => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </TabPane>
        ))}
      </Tabs>
     
    </div>
  );
}

export default Projects;
