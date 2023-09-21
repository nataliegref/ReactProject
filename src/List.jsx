
function List(props){
    if (!props.facts){
        return <div>Loading..</div>
    }

    if (props.facts.length === 0){
        return <div>No fun facts in the list!</div>;
    }
    return (
        <ul>
            {props.facts.map((fact) =>{
                return (fact.fact.startsWith("H")||fact.fact.startsWith("B")) && <li key={fact.id}> {fact.fact}</li>;
            })}
        </ul>
    )
}

function ShowList(){
    const facts = [{fact: "Honey never spoils", id:'honey'},
    {fact: "Octopus has 2 correct plurals: octopuses and octopodes", id:'octopus'},
    {fact:"Bananas are berries but strawberries aren't", id:'banana'}];
    return (<>
    <h1>Fun facts </h1>
    <List facts = {facts}/>
    </>)
}

function Circle(){
    return <>
    <svg>
        <circle cx="25" cy="75" r="20" stroke="red" strokeWidth="3"></circle>
    </svg>
    </>
}

export default ShowList;