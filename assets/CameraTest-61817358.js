import{d as m,r as l,c,a as d,b as v,o as s}from"./index-6823bdcd.js";const g=d("h1",null,"相機測試頁面",-1),p=d("video",{id:"videoRef",width:"300",autoplay:"",playsinline:""},null,-1),h=["src"],_=m({__name:"CameraTest",setup(f){const o=l(),n=l("");function r(){if(o.value!=null){const t=o.value,e=document.createElement("canvas");e.width=t.videoWidth,e.height=t.videoHeight;const i=e.getContext("2d");if(i!=null){i.drawImage(t,0,0),n.value=e.toDataURL("image/png");const a=document.createElement("a");a.href=n.value,a.download="snapshot.jpg",document.body.appendChild(a),a.click(),document.body.removeChild(a)}}}async function u(){o.value=document.querySelector("#videoRef");try{const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:{exact:"environment"},width:{ideal:99999},height:{ideal:99999}}});o.value!==void 0&&(o.value.srcObject=t)}catch(t){console.log(t)}}return(t,e)=>(s(),c("div",null,[g,d("button",{class:"border-red-500 border-2",onClick:e[0]||(e[0]=i=>u())}," 開啟相機 "),d("button",{class:"border-red-500 border-2 ml-2",onClick:e[1]||(e[1]=i=>r())}," 拍照 "),p,n.value!==""?(s(),c("img",{key:0,src:n.value,alt:"Image preview",style:{"max-width":"300px"}},null,8,h)):v("",!0)]))}});export{_ as default};
