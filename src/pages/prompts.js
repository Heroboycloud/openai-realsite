import prompts_lists from './prompt_list.js';
//import copy from "copy-to-clipboard";

//import { Copy as CopyIcon } from "lucide-react";
//import { useState, useEffect } from "react";
const prompts= prompts_lists;

export default function Prompts(){
  return (
    <>


          {prompts.map((item,key) => (
<div key={key} className="bg-white dark:bg-slate-900 rounded-lg px-4 py-4 mx-4 my-4 ring-1 ring-slate-900/5 shadow-xl ">
  <div>
    <span  className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
     
    </span>
  </div>
  <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">{item.title}</h3>
  <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
    {item.prompt}
  </p>
</div>
            ))}
    </>
    
    )
}
