//import "./styles.css";

let words = [
    "ate",
    "eat",
    "tan",
    "I am Lord Voldemort",
    "Tom Marvolo Riddle",
    "Dgo",
    "God",
    "Gdo"
  ];
  function checkAnagrams(words) {
    let resultObj = {};
  
    words.forEach((element) => {
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
    console.log("return,values", Object.values(resultObj));
    console.log("return,keys", Object.keys(resultObj));
   console.log("return,entries", Object.entries(resultObj));
   
    for (let key in resultObj) {
      //console.log("return,key", key);
     // console.log("return,key", resultObj[key]);
    }
    let test = Object.values(resultObj);
    console.log("return,test",test);
    test= test = Object.values(resultObj).filter((x)=>{
      let myword='ate';
      console.log("return,x",x);
      console.log("return,test to",typeof x);
      typeof x === 'object' && console.log('object!!')
      if(typeof x === 'object'){
          return Object.values(x).filter((xy)=>{
     // console.log("return,xy",{xy.toLowerCase, myword.toLowerCase()});
            return xy.toLowerCase()===myword.toLowerCase();
          }
  
  
        )
      }else{
        return  x.toLowerCase()===myword.toLowerCase();
      }
    })
    console.log("return,test",test);
  
  }
  checkAnagrams(words);
  document.getElementById("app").innerHTML = `
  <h1>Hello Vanilla!</h1>
  <div>
    We use the same configuration as Parcel to bundle this sandbox, you can find more
    info about Parcel 
    <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
  </div>
  `;
  
  