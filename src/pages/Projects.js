import React, { useState } from "react";
import {
  Typography,
  Card,
  Tag,
  Tabs,
  Image,
  Row,
  Col,
  Avatar,
} from "antd";
import projectsData from "../data/projectData"; // Import the projects data

const { Title, Paragraph } = Typography;
const { CheckableTag } = Tag;

const categories = ["All", "Web Development", "App Development"];
const categoryTags = {
  All: [
    "PHP",
    "Javascript",
    "Laravel",
    "React",
    "MySQL",
    "Codeigniter",
    "jQuery",
    "CakePHP",
    "Flutter",
    "Firebase",
  ],
  "Web Development": [
    "PHP",
    "Javascript",
    "Laravel",
    "React",
    "MySQL",
    "Codeigniter",
    "jQuery",
    "CakePHP",
  ],
  "App Development": ["Flutter", "Firebase", "React", "Web App"],
  // "Web Application":['Web App']
};

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleCategoryChange = (key) => {
    setSelectedCategory(key);
    setSelectedTags([]); // Reset selected tags when category changes
  };

  const handleTagChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

  const filteredProjects = projectsData.filter((project) => {
    const categoryMatch =
      selectedCategory === "All" || project.category === selectedCategory;
    const tagsMatch = selectedTags.length
      ? selectedTags.every((tag) => project.tags.includes(tag))
      : true;
    return categoryMatch && tagsMatch;
  });

  // Create an array of tab items
  const tabItems = categories.map((category) => ({
    label: category,
    key: category,
    children: (
      <div>
        <div style={{ marginBottom: 20 }}>
          {categoryTags[category].map((tag) => (
            <CheckableTag
              key={tag}
              checked={selectedTags.includes(tag)}
              onChange={(checked) => handleTagChange(tag, checked)}
            >
              {tag}
            </CheckableTag>
          ))}
        </div>
        <Row gutter={[16, 16]} style={{ display: "flex", flexWrap: "wrap" }}>
          {filteredProjects.map((project) => (
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={8}
              key={project.id}
              style={{ display: "flex" }}
            >
              <Card
                className="project-card"
                title={
                  <div>
                    <Avatar src="https://img.icons8.com/?size=100&id=104229&format=png&color=000000" />{" "}
                    {project.title}
                  </div>
                }
                bordered={true}
                cover={
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    style={{
                      height: 200,
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                  />
                }
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <Paragraph>{project.description}</Paragraph>
                <div>
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    ),
  }));

  return (
    <div>
      <Title level={2}>A Glimpse of My Work</Title>
      {/* Featured Projects / Highlighted Projects / Selected Projects /Some of My Favorite Projects */}
      <Tabs
        defaultActiveKey={categories[0]}
        onChange={handleCategoryChange}
        items={tabItems}
      />
    </div>
  );
}

export default Projects;
