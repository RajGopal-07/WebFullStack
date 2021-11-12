import Comp2 from "./Comp2";

function Comp1() {
  var product_Name = "Iphone 12";
  var color = ["Red", "Gray", "White"];
  return (
    <>
      <h1>Component 1</h1>
      <hr />
      <Comp2 one={product_Name} two={color} />
    </>
  );
}

export default Comp1;