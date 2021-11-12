function Comp2(props) {
    return (
      <>
        <h1>Component 2</h1>
        <pre>{JSON.stringify(props)}</pre>
        <h5>Product Name : {props.one}</h5>
        <h6>Default Color: {props.two}</h6>
      </>
    );
  }
  
  export default Comp2;