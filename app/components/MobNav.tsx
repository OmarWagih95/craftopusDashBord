'use client'
import React, { useState } from 'react'
import { IoMenuSharp } from "react-icons/io5";
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const MobNav = () => {
    const router= useRouter();
    const links =[
        {name:'Home',target:'/'},
        {name:'Categories',target:'/categories'},
        {name:'Products',target:'/products'},
        {name:'Orders',target:'/orders'},
      ];
    const [toggleDropDown, settoggleDropDown] = useState(false);
  return (
    <div className='flex gap-4 px-3 min-w-[100vw] items-center justify-between lg:hidden h-14 absolute top-0 left-0 bg-purple-800  '>
          {/* <div className="flex gap-4 px-3 h-32 items-center justify-between"> */}
     
     <div>
<IoMenuSharp onClick={()=>settoggleDropDown((prev)=>!prev)}
     width={50}
     height={50}
     scale={0.5}
     size={25}
     className='text-white ' />

     {/* <Image  src={'/craftopus1.png'}
     onClick={()=>settoggleDropDown((prev)=>!prev)}
     width={37}
     height={37}
     className="rounded-full"></Image> */}
    </div>
<div className='flex items-center gap-2 pl-4 py-2'>

{/* <a className="block text-teal-600" href="#">
 <span className="sr-only">Home</span>
<Image src={'/craftopus1.png'} width={50} height={30}></Image>
</a> */}
<Link href='/' className='  font-bold'>
 <h6 className=' text-white  bg-clip-text'>
 Craftopus
 </h6>
 </Link>
</div>
<div></div>

{/* </div> */}
{toggleDropDown && (<div className="dropdown z-50 justify-center items-center bg-purple-800">
{links.map((link,index)=>{
    return (<Link key={index} href={link.target} onClick={()=>settoggleDropDown(false)}>
        <li className=" z-30 list-none p-3 text-white transition hover:text-gray-500/75">
        {link.name}
        </li>
    </Link>)
//        return(        <li className=" list-none p-3 text-gray-500 transition hover:text-gray-500/75">
//          <Link 
//          key={d}
//          href={''}
//          onClick={()=>{

//            settoggleDropDown((prev)=>!prev)

//              router.push(`/#${link.target}`)
       
//          }
//          }
//          //  onClick={
//          //   path.length>1?
//          //   //TODO: after release m7tag check  
//          //  link.onclick:null
   
//          // }
//          // onClick={()=>{
//          //   path.length>1?
//          // //   //TODO: after release m7tag check  
//          //  link.onclick:null;
//          //  settoggleDropDown((prev)=>!prev)
//          // }}
//          // onClick={()=>settoggleDropDown((prev)=>!prev)}
//          className='pb-2 border-b-2 border-gray-900'
//         //  offset={link.offset}
//         //  to={link.target}
     
//          key={index}
//          >
//             </Link>
//            {/* <Link offset={link.offset} href={`#${link.target}`} className="dropdown_link" 
//      onClick={()=>settoggleDropDown(false)}>{link.name}</Link> */}

     
// {/* <Link  className='pb-2 border-b-2 border-gray-900'
//          offset={link.offset}
//          reloadCurrent={true}
//          // replace={true}
//          onClick={()=>{settoggleDropDown(false);}}
//          href={link.target}
//          smooth 
//          scroll={true}
//          spy
//          key={index}
//          activeClass='active'>
//            {link.name}
       
//            </Link> */}

//          {/* <a className="text-gray-500 transition hover:text-gray-500/75" href="#ourProducts"> Products </a> */}
//        </li>);
}
)}
 {/* <Link href={'/profile'} className="dropdown_link" 
 onClick={()=>settoggleDropDown(false)}>my profile</Link>
 <Link href={'/create-prompt'} className="dropdown_link" 
 onClick={()=>settoggleDropDown(false)}>create prompt</Link>
 <button className="black_btn w-full mt-5" 
 onClick={()=>{settoggleDropDown(false);
 signOut}
 }>Sign Out</button> */}
</div>)}
    </div>
  )
}

export default MobNav