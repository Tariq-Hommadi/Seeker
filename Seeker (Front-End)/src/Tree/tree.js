import './../styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TreeElement from './../Components/treeElement';
import Card from './../Components/Home/Card/Card'

function Tree() {
  return (
    <div className="tree ">
  

    {/* center div */}
    
  <div className="tree-center">
    <h4 className='heading'>Job Experience</h4>
  <TreeElement className="treeElement"
  title={"Personal Portfolio April Fools"} 
  rating={"4.5/5"}
  description={"The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."}
  provider={"Udemy"}
  cost={"Free"}
  />
  <TreeElement className='treeElement'
  title={"Personal Portfolio April Fools"} 
  rating={"4.5/5"}
  description={"The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."}
  provider={"Udemy"}
  cost={"Free"}
  />

</div>
    </div>
  );
}

export default Tree;
