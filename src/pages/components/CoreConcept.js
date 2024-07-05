import { Card } from "antd";
export const CoreConcept = ({id,title,description,image,icon,link}) => {
    return (
      
        <Card
            key={id}
            title={title}
            bordered={false}
            hoverable
            // style={{ backgroundColor:backColor }}
            onClick={() => window.location.href = link}
            cover={icon}
          >
            <p>{description}</p>
          </Card>
    );
}