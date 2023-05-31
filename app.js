// const  r=document.querySelector('.result');
// const arr=["hello","hi","yar chal na abhi kaam hai"]
// let a=Math.floor(Math.random()*arr.length)
// const value=(a)=>{
//       console.log("ys show this messsage slowly");
//       // console.log(a);
//       r.innerHTML+="<br>"+a;
// }
// let i=0;
// setInterval(()=>{
//  setTimeout(value,2000,arr[i]);
//  i++;
//  if(i>arr.length){
//     clearInterval();
//  }
// },2000);
// let b=document.getElementsByClassName('result');
// console.log(b[0])
// setInterval(() => {
//     b[0].classList.toggle('changes')
//     // b[0].style.display='none';
// },1000);
// let b=document.querySelector('.result');
// b.addEventListener('click',(e)=>{
//     // console.log(e.clientX,e.clientY)
//     console.log(e)
// //    console.log( b.getAttribute('data-name')
// console.log(b.dataset.name)
// });
// const jokes=[
//     {
//             "category": "Dark",
//             "type": "single",
//             "joke": "Nowadays people are so sensitive, you can't even say \"black paint\" anymore.\nInstead, you have to say \"Jamal, please paint the fence\".",
//             "flags": {
//                 "nsfw": false,
//                 "religious": false,
//                 "political": false,
//                 "racist": true,
//                 "sexist": false,
//                 "explicit": false
//             },
//             "id": 133,
//             "safe": false,
//             "lang": "en"
//         },
//         {
//             "category": "Misc",
//             "type": "single",
//             "joke": "My husband and I were happy for 20 years. And then we met.",
//             "flags": {
//                 "nsfw": false,
//                 "religious": false,
//                 "political": false,
//                 "racist": false,
//                 "sexist": false,
//                 "explicit": false
//             },
//             "safe": true,
//             "id": 273,
//             "lang": "en"
//         },
//         {
//             "category": "Programming",
//             "type": "single",
//             "joke": "Your mama's so FAT she can't save files bigger than 4GB.",
//             "flags": {
//                 "nsfw": false,
//                 "religious": false,
//                 "political": false,
//                 "racist": false,
//                 "sexist": false,
//                 "explicit": true
//             },
//             "id": 9,
//             "safe": false,
//             "lang": "en"
//         },
//         {
//             "category": "Programming",
//             "type": "single",
//             "joke": "I have a joke about Stack Overflow, but you would say it's a duplicate.",
//             "flags": {
//                 "nsfw": false,
//                 "religious": false,
//                 "political": false,
//                 "racist": false,
//                 "sexist": false,
//                 "explicit": false
//             },
//             "safe": true,
//             "id": 301,
//             "lang": "en"
//         },
//         {
//             "category": "Misc",
//             "type": "single",
//             "joke": "Two reasons I don't give money to homeless people.\n1) They are going to spend it all on drugs and alcohol\n2) I am going to spend it all on drugs and alcohol.",
//             "flags": {
//                 "nsfw": false,
//                 "religious": false,
//                 "political": false,
//                 "racist": false,
//                 "sexist": false,
//                 "explicit": false
//             },
//             "id": 72,
//             "safe": false,
//             "lang": "en"
//         },
//         {
//             "category": "Misc",
//             "type": "single",
//             "joke": "Women are like KFC, once you're done with the breasts and thighs, you just have a greasy box to put your bone in.",
//             "flags": {
//                 "nsfw": true,
//                 "religious": false,
//                 "political": false,
//                 "racist": false,
//                 "sexist": true,
//                 "explicit": true
//             },
//             "id": 149,
//             "safe": false,
//             "lang": "en"
//         },
//         {
//             "category": "Programming",
//             "type": "single",
//             "joke": "UDP is better in the COVID era since it avoids unnecessary handshakes.",
//             "flags": {
//                 "nsfw": false,
//                 "religious": false,
//                 "political": false,
//                 "racist": false,
//                 "sexist": false,
//                 "explicit": false
//             },
//             "id": 259,
//             "safe": true,
//             "lang": "en"
//         },
//         {
//             "category": "Programming",
//             "type": "single",
//             "joke": "If Bill Gates had a dime for every time Windows crashed ... Oh wait, he does.",
//             "flags": {
//                 "nsfw": false,
//                 "religious": false,
//                 "political": false,
//                 "racist": false,
//                 "sexist": false,
//                 "explicit": false
//             },
//             "id": 22,
//             "safe": true,
//             "lang": "en"
//         },
//         {
//             "category": "Pun",
//             "type": "single",
//             "joke": "To whoever stole my copy of Microsoft Office, I will find you. You have my Word!",
//             "flags": {
//                 "nsfw": false,
//                 "religious": false,
//                 "political": false,
//                 "racist": false,
//                 "sexist": false,
//                 "explicit": false
//             },
//             "id": 191,
//             "safe": true,
//             "lang": "en"
//         },
//         {
//             "category": "Programming",
//             "type": "single",
//             "joke": "A man is smoking a cigarette and blowing smoke rings into the air. His girlfriend becomes irritated with the smoke and says \"Can't you see the warning on the cigarette pack? Smoking is hazardous to your health!\" to which the man replies, \"I am a programmer.  We don't worry about warnings; we only worry about errors.\"",
//             "flags": {
//                 "nsfw": false,
//                 "religious": false,
//                 "political": false,
//                 "racist": false,
//                 "sexist": false,
//                 "explicit": false
//             },
//             "id": 38,
//             "safe": true,
//             "lang": "en"
//         }
// ]
// let index=Math.floor(Math.random()*(jokes.length-1))
// const j=document.querySelector('.jokes');
// console.log(j)
// j.innerHTML=jokes[index].joke
// let d=new Date();
// console.log(Date)
// const x=document.getElementById('txt')
// function getTime(){
//     let t=new Date();
//     let h=t.getHours();
//     let m=t.getMinutes();
//     let s=t.getSeconds();
//     s=setTime(s);
//     m=setTime(m);
//     x.innerHTML=h+":"+m+":"+s;
// }
// setInterval(getTime, 1000);
// function setTime(i){
//     if(i<10){
//         i='0'+i;
//     }
//     return i;
// }

// function loadSript(src,callback){
//     var script=document.createElement('script');
//     script.src=src;
//     script.onload=()=>{
//         console.log("src: "+src);
//         callback();
//     }
//     document.body.appendChild(script)
// }
// loadSript('https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js',()=>{
//     alert("hi rahul")
// });

// const t=document.querySelector('.text');
// const r = function (a) {
//     // console.log("hello");
//     console.log(a);
// }
// function show(v,callback){
//     t.innerHTML=v;
//     // console.log(callback());
//     callback(1);
// }
// let a=1;
// show("the total sum of the given number",r);

// let t=document.querySelector('.text');
// function Solve(result){
//     t.innerHTML='The resut is '+result;
// }

// function calculate(num1,num2,operation,callback){
//     let result;
//     if(operation==='addition'){
//         result=num1+num2;
//     }else if(operation==='multiply'){
//         result=num1*num2;
//     }
//     else if(operation==='subtract'){
//         if(num1>num2){
//         result=num1-num2;
//         }else{
//             result=num2-num1;
//         }
//     }
//     else {
//         result=num1/num2;
//     }
//     callback(result);
// }

// calculate(5,5,'addition',Solve);

// console.log("hello")
// setTimeout(()=>{
//     console.log("hello in 1sec")
// },100)
// console.log("my name is john")

// let promise = new Promise(function (resolve, reject) {
//   // alert(" i am the alert in the promise")
//   console.log("inside of promise");
//   resolve(56);
// });
// // promise.then((value) => console.log(value));
// console.log("after promise");
// console.log(promise);

// let p = new Promise((resolve, reject) => {
//   console.log("promise is pending.");
//   setTimeout(() => {
//     reject(new Error("i am an error"));
//     // resolve(true);
//     // console.log("heloo");
//     // console.log(p);
//   }, 1000);
// });
// p.catch((error) => console.log("there is a error in p"));
// // console.log(p);
// p.then(value => {
//   console.log(value)
// })
// p.catch(error => {
//   console.log('some error as occured')
// })

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("resolve after 2 sec");
//     resolve(56);
//   }, 2000);
// });
// p1.then((value) => {
//   console.log(value);
//   let p2 = new Promise((resolve, reject) => {
//     resolve("promise 2");
//   });
//   return p2;
// })
//   .then((value) => {
//     console.log("we are done");
//     console.log(value);
//     return 2;
//   })
//   .then((value) => {
//     console.log(value);
//   });

// const loadSript = (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.type = "text/javascipt";
//     script.src = src;
//     document.body.appendChild(script);
//     script.onload = () => {
//       resolve("it has been loaded");
//     };
//     //     script.onerror = () => {
//     //       reject("it has not been loaded");
//     //    };
//   });
// };
// let p1 = loadSript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js"
// );
// p1.then((value) => {
//   console.log(value);
// }).catch((error) => {
//   console.log(error);
// });

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // alert("it is not resolved");
//     resolve(1);
//   }, 2000);
// });
// p1.then(() => {
//   console.log("hi");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(4);
//     }, 4000);
//   });
// }).then((value) => {
//   console.log(value);
// });
// p1.then(() => {
//   console.log("it is now resolved");
// });

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("value 1");
//   }, 1000);
// });
// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("value 2");
//     // reject(new Error("error is inserted"));
//   }, 2000);
// });
// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("value 3");
//   }, 3000);
// });
// p1.then((value) => {
//   console.log(value);
// });
// p2.then((value) => {
//   console.log(value);
// });
// p3.then((value) => {
//   console.log(value);
// });

// let promise_all = Promise.all([p1, p2, p3]);
// promise_all.then((value) => {
//   console.log(value);
// });

// let promise_all = Promise.allSettled([p1, p2, p3]);
// promise_all.then((value) => {
//   console.log(value);
// });

// let promise_all = Promise.race([p1, p2, p3]);
// promise_all.then((value) => {
//   console.log(value);
// });

// async function harry() {
//   let delhiweather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("data 1");
//     }, 1000);
//   });
//   let bangloreWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("data 2");
//     }, 2000);
//   });
//   //   delhiweather.then(alert);
//   //   bangloreWeather.then(alert);
//   console.log("fetching both weather please wait: ");
//   let delhiw = await delhiweather;
//   let bangloreW = await bangloreWeather;
//   return [delhiw, bangloreW];
// }
// console.log("welcome to weather report room");
// let a = harry();
// a.then((value) => {
//   console.log(value);
// });
// console.log(a);

// harry().then((x) => {
//   console.log(x);
// });

// try {
//   console.log(Rahul);
// } catch (error) {
//   console.log(error);
// }

//custom made error
// try {
//   //   harry;
//   //   throw new Error("harry is bad");
//   console.log("harry");
//   throw new ReferenceError("harry is bad");
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
// }

// const loadSript = (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//       resolve(src + " done success");
//     };
//     document.head.append(script);
//   });
// };
// const main1 = async () => {
//   // console.log(new Date().getSeconds());
//   let a = await loadSript(
//     "https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
//   );
//   console.log(a);
// };
// main1();

// let a = loadSript(
//   "https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
// );
// a.then((value) => {
//   console.log(value);
// });

// let p = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("please wait"));
//     }, 3000);
//   });
// };
// let a = async () => {
//   try {
//     let c = await p();
//     console.log(c);
//   } catch (error) {
//     console.log("this error has been resolved");
//   }
// };
// a();

// let p1 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(10);
//     }, 2000);
//   });
// };
// let p2 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(20);
//     }, 3000);
//   });
// };
// let p3 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(30);
//     }, 4000);
//   });
// };
// const run = async () => {
//   //   console.log("run");
//   //   let a1 = await p1();
//   //   console.log(a1);
//   //   let a2 = await p2();
//   //   console.log(a2);
//   //   let a3 = await p3();
//   //   console.log(a3);
//   let a1 = p1();
//   let a2 = p2();
//   let a3 = p3();
//   let promise_all = await Promise.all([a1, a2, a3]);
//   //   console.timeEnd("run");
//   console.log(promise_all);
// };
// run();

// let promise_all = Promise.all([p1, p2, p3]);
// console.log(promise_all);

// let p = fetch("https://jsonplaceholder.typicode.com/posts");
// p.then((response) => {
//   // console.log(response.json());
//   return response.json();
// }).then((response) => {
//   console.log(response);
// });

// async function logJSONData() {
//   const response = await fetch("http://example.com/movies.json");
//   const jsonData = await response.json();
//   console.log(jsonData);
// }

// let fData = fetch("https://jsonplaceholder.typicode.com/users");
// ////fetch returns a promise
// // p.then((response) => {
// //   return response.json();
// // }).then((value) => {
// //   console.log(value);
// // });
// // p.then((res) => res.json()).then((data) => console.log(data));
// fData
//   .then(function (res) {
//     //this is use to get the status of the json data then it will return res.json()
//     console.log(res.status);
//     return res.json();
//   })
//   .then((data) => {
//     //if fisrt then is working fine then we will get the data
//     console.log(data);
//   });

// const data = {
//   title: "this is title",
//   body: "this is post body",
//   userId: 2,
// };
// let post = fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: {
//     "content-type": "appliaction/json",
//   },
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// const createTodo = async () => {
//   let options = {
//     method: "POST",
//     body: JSON.stringify({
//       title: "foo",
//       body: "bar",
//       userId: 1110,
//     }),
//     headers: {
//       "content-type": "application/json",
//     },
//   };
//   let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
//   // .then((res) => res.json())
//   // .then((value) => console.log(value));
//   let response = await p.json();
//   return response;
// };

// const mainFunc = async () => {
//   let todo = await createTodo();
//   console.log(todo);
// };
// mainFunc();

// const createTodo = async (todo) => {
//   let options = {
//     method: "POST",
//     body: JSON.stringify(todo),
//     headers: {
//       "content-type": "application/json",
//     },
//   };
//   let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
//   // .then((res) => res.json())
//   // .then((value) => console.log(value));
//   let response = await p.json();
//   return response;
// };

// const getTodo = async (id) => {
//   let p = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
//   let res = await p.json();
//   return res;
// };

// const mainFunc = async () => {
//   let Todo = {
//     title: "rahul",
//     body: "bhai",
//     userId: 1100,
//   };
//   await fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((val) => console.log(val));
//   let todo = await createTodo(Todo);
//   console.log(todo);
//   console.log(await getTodo(5));
// };
// mainFunc();

// const datas = [
//   {
//     name: "ajay",
//     profession: "engineer",
//   },
//   {
//     name: "anuj",
//     profession: "mba",
//   },
// ];
// function getData() {
//   let output = "";
//   setTimeout(() => {
//     datas.forEach((data, index) => {
//       output += `<li>${data.name}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }
// function createdata(val) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       datas.push(val);
//       let error = false;
//       if (!error) {
//         resolve();
//       } else {
//         reject("it is bad");
//       }
//     }, 2000);
//   });
// }

// createdata({ name: "rohit", profession: "mbbs" })
//   .then(getData)
//   .catch((err) => console.log(err));
// getData();

// async function start() {
//   await createdata({ name: "rohit", profession: "mbbs" });
//   getData();
// }
// start();
// start().then(getData);

// const loadSript = (src) => {
//   return new Promise((resolve, reject) => {
//     let li = document.createElement("li");
//     document.body.appendChild(script);
//     script.onload = () => {
//       resolve("it has been loaded");
//     };
//     //     script.onerror = () => {
//     //       reject("it has not been loaded");
//     //    };
//   });
// };
// let p1 = loadSript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js"
// );
// p1.then((value) => {
//   console.log(value);
// }).catch((error) => {
//   console.log(error);
// });

// let r = async (val) => {
//   let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify(val),
//     headers: {
//       "content-type": "application/java",
//     },
//   });
//   let r = await res.json();
//   return r;
// };
// console.log(r({ title: "foo", body: "bar", userId: 101 }));

// let r = async () => {
//   await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       title: "foo",
//       body: "bar",
//       userId: 1,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((err) => console.log("i have handled the error"));

//   await fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((val) => console.log(val));
// };
// r();

// let getData = async (val) => {
//   let r = await fetch("https://jsonplaceholder.typicode.com/posts/" + val);
//   // .then((res) => res.json())
//   // .then((valu) => console.log(valu));
//   let res = await r.json();
//   return res;
// };
// // console.log(getData(5));
// // getData(5).then((value) => console.log(value));

// let createData = async () => {
//   let options = {
//     method: "POST",
//     body: JSON.stringify({
//       userId: 56,
//       id: 101,
//       title: "arlo carto",
//       body: "rapid firing decrease the fire arm value",
//     }),
//   };
//   let r = await fetch("https://jsonplaceholder.typicode.com/posts", options);
//   let res = await r.json();
//   return res;
// };

// // console.log(createData());
// let result = async () => {
//   let c = await createData().then((value) => console.log(value));
//   let g = await getData(101).then((value) => console.log(value));
//   let dataSummary = await fetch(
//     "https://jsonplaceholder.typicode.com/posts"
//   ).then((res) => res.json());
//   console.log(dataSummary);
//   return [c, g];
// };
// console.log(result());

// console.log(document.cookie);
// document.cookie = "name=harry9990";
// console.log(document.cookie);
//document.cookie="name=harry"
// console.log(document.cookie);

// let key = prompt("enter your key");
// let v = prompt("enter your value");
// document.cookie = `${key}=${v}`;
// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(v)}`;
// //key=a;; v=harry
// console.log(document.cookie);
// console.log(decodeURIComponent("a%38%38%")); //a;;

// console.log(localStorage);
// localStorage.setItem("name", "Rahul Kumar");
// console.log(localStorage.getItem(name));
// //localStorage.removeItem(key)
// //localStorage.clear()
// //localStorage.length
// //localStorage.key(1)
// //localStorage.key(2)

// let a = [
//   "Intializing the Hack Tool<br/>",
//   "Connecting to Facebook<br/>",
//   "Connecting to server 1<br/>",
//   "Connection failed, Retrying ...<br/>",
//   "Connecting to Server 2<br/>",
//   "Connected Successfully...<br/>",
//   "Username I am Rahul<br/>",
//   "Trying Brute Force<br/>",
//   "200k Passwords tried<br/>",
//   "Match found<br/>",
//   "Accessing account<br/>",
//   "Hack Successful",
// ];

// const text = document.getElementById("text");
// console.log(text.innerHTML);

// let sleep = async (v) => {
//   await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(true);
//     }, v * 1000);
//   });
// };

// let run = async (m) => {
//   await sleep(2);
//   text.innerHTML += m;
// };

// (async () => {
//   for (let i = 0; i < a.length; i++) {
//     await run(a[i]);
//   }
// })();

// async () => {
//   for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
//     await run(a[i]);
//   }
// };

// class RailwayForm {
//   submit() {
//     alert(this.name + " form submitted");
//   }
//   cancel() {
//     alert(this.name + " form is cancelled");
//   }
//   fill(name) {
//     this.name = name;
//   }
// }
// let harry = new RailwayForm();
// harry.fill("rahul");
// harry.submit();
// harry.cancel();

// submit.addEventListener("click", (e) => {
//   e.preventDefault(); //it will not let the page reload after pressing the submit button here
//   let titlec = title.value;
//   let descc = desc.value;
//   localStorage.setItem("todo", JSON.stringify([titlec, descc]));
//   console.log(e);
// });

console.log("this is working");
const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.getElementsByClassName("whiteBox");

imgBox.addEventListener("dragstart", (e) => {
  //pakda
  console.log("dragstart is triggerd");
  //   imgBox.classList.add("hold");
  //   e.target.className += " hold";
  setTimeout(() => {
    e.target.className = "hide";
  }, 0);
});

imgBox.addEventListener("dragend", (e) => {
  //choda
  console.log("dragend is triggered");
  //   e.target.classList.remove("hold");
  console.log(e.target.className);
  e.target.className = " imgBox";
});

for (whiteBox of whiteBoxes) {
  whiteBox.addEventListener("dragover", (e) => {
    console.log("drag over method is triggered");
    e.preventDefault();
  });
  whiteBox.addEventListener("dragenter", (e) => {
    console.log("drag enter is triggered");
    e.preventDefault();
    e.target.classList.add("hold");
  });
  whiteBox.addEventListener("dragleave", (e) => {
    console.log("drag leave is triggered");
    e.preventDefault();
    e.target.classList.remove("hold");
  });
  whiteBox.addEventListener("drop", (e) => {
    console.log("drop is triggered");
    e.target.append(imgBox);
  });
}
