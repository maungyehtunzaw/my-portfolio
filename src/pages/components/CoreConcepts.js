import { Row, Col } from 'antd';
import coreConceptData from '../../data/coreConceptData';
import { CoreConcept } from "./CoreConcept";
const CoreConceptSection = (props) => {
    return (
      <section className="skills-section">
      <Row justify="center" gutter={[16, 16]}>
       
          {coreConceptData.map((data) => (
            <Col xs={24} sm={24} md={12} lg={6}>
             <CoreConcept key={data.id} {...data}/>
            </Col>
          ))}
        
      </Row>
    </section>
    )
};
export default CoreConceptSection;