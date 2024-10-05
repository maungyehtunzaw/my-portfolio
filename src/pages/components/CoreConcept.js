import { Card,Image,Flex,Badge} from "antd";
export const CoreConcept = ({id,title,description,icon,link,iconImage}) => {
    return (
      <Badge.Ribbon text={icon}>
        <Card
            key={id}
            title={<div className="center-title">{title}</div>}
            bordered={false}
            hoverable
            // style={{ backgroundColor:backColor }}
            onClick={() => window.location.href = link}
             className="card-animated-border"
    //         cover={
    //   <Image
    //     alt="example"
    //     src={iconImage}
    //     width={{ xs: 100, sm: 100, md: 100, lg: 100 }}
    //   />
    // }
          >
          <Flex gap="middle" align="center" vertical>
            <Image width={100} src={iconImage} preview={false}/>
          </Flex>
            <p>{description}</p>
          </Card>
      </Badge.Ribbon>
    );
}