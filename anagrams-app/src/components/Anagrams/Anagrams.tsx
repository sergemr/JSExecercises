import React from "react";
import styles from "./Anagrams.module.scss";

export const checkAnagrams=(words : [])=> {
  let resultObj = {};

  words.forEach((element  : any) => {
    let key = element.toLowerCase().split("").sort().join("").trim();
    //resultObj[]
    resultObj[key]
      ? resultObj[key].push(element)
      : (resultObj[key] = [element]);
    //console.log("return.",element)
    //console.log("return.",key)
    //console.log("return,key",resultObj)
    //console.log("return,key",Object.values(resultObj))
  });

  //console.log("return,key",JSON.stringify(resultObj))
  //console.log("return,values", Object.values(resultObj));
  //console.log("return,keys", Object.keys(resultObj));
  //console.log("return,entries", Object.entries(resultObj));

  return Object.values(resultObj);
}

const Anagrams: React.FC = () => {
  let words = [
    "ate",
    "eat",
    "tan",
    "I am Lord Voldemort",
    "Tom Marvolo Riddle",
    "Dgo",
    "God",
    "Gdo",
  ];
   
  return (
    <div data-testid="Anagrams" className={styles.anagrams}>
      <h1>Anagrams</h1>
      <p>Anagrams</p>
    </div>
  );
};

export default Anagrams;
