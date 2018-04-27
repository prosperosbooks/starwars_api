import React from "react";
import Card from "./Card";

const CardList = ({ starwarschars }) => {
    const cardArray = starwarschars.map((user, i) => {
        return (
            <Card
                key={i}
                id={starwarschars[i].id}
                name={starwarschars[i].name}
                height={starwarschars[i].height}
                mass={starwarschars[i].mass}
            />
        );
    });
    return <div>{cardArray}</div>;
};

// Alternatively:
// remove const cardArray and just cut the starwarschars.map and insert
// that into the returned div as an expression {}

// const CardList = ({ starwarschars }) => {
//     return (
//         <div>
//             {starwarschars.map((user, i) => {
//                 return (
//                     <Card
//                         key={i}
//                         id={starwarschars[i].id}
//                         name={starwarschars[i].name}
//                         height={starwarschars[i].height}
//                         mass={starwarschars[i].mass}
//                     />
//                 );
//             })}
//         </div>
//     );
// };

export default CardList;
