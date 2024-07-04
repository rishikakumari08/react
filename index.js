 // Create the React element
 //the curly brases is used for the attributes like id,classes and more attributes which we use we can also give some random attributes like xyz 
//  const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello world!");

// console.log(heading) //it will return a object

 //creating root by reactDOM
//  const root = ReactDOM.createRoot(document.getElementById("root") );
//  root.render(heading);


//  now we need to make nested div element
 const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child"},
        [
            React.createElement("h1",{},"The nested div I have created jsut."),
            React.createElement("h2",{},"I'm h2 tag"),
            React.createElement("h3",{},"I'm h3 tag")]
    ),
    React.createElement(
        "div",
        {id:"child2"},
        [
            React.createElement("h1",{},"The nested div I have created jsut."),
            React.createElement("h2",{},"I'm h2 tag"),
            React.createElement("h3",{},"I'm h3 tag")]
    )
]
);

//now creating more complex div we need to make arrays and it will look a mesh so to overcome from this problem
/*Jsx* exist*/

console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root") );
root.render(parent);