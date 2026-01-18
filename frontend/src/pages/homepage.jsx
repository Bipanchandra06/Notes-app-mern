import React, { useEffect } from 'react'
import Navbar from '../components/navbar.jsx'
import Notecard from '../components/notecard.jsx'
import { useState } from 'react'
import axios from 'axios'
import { LoaderCircleIcon } from 'lucide-react';


const Homepage = () => {
    const [isratelimited,setisratelimited]=useState(false);
    const [notes,setnotes]=useState([]);
    const [loading,setloading]=useState(true);

    useEffect(()=>{
        //console.log("Fetching notes...");
        const fetchnotes=async()=>{
            try{ 
                //console.log("3. Sending request to Backend...");
                const response=await axios.get("http://localhost:5001/api/notes/");
                console.log("4. Response received:", response.data);
                setnotes(response.data);
                setloading(false);
                setisratelimited(false);
               }
            catch(err){
                if(err.response && err.response.status===429){
                    setisratelimited(true);
                } 
            }finally {
                    setloading(false);
                }   
        }
        fetchnotes();
    },[])

    if (loading){
        return <div className="min-h-screen flex items-center justify-center">
        <LoaderCircleIcon className="size-10 animate-spin text-primary"/>
        </div>;
    }

  return (
    <div className='min-h-screen'>
      <Navbar />
      {isratelimited && <div className="alert alert-warning">Rate limit exceeded. Please try again later.</div>}
        <div className='max-w-6xl mx-auto px-4 py-8'>
            {loading && <div className='text-center text-primary py-10'>Loading notes...</div>}
            { !loading && notes.length===0 && !isratelimited && <div className='text-center text-primary py-10'>No notes found. Create your first note!</div>}
            {!loading && notes.length>0 && !isratelimited && (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {notes.map((note)=>(
                        <div key={note._id}>
                            <Notecard note={note} setnotes={setnotes}/>
                        </div>))}
                        </div>)}



        </div>

    </div>
  )
}

export default Homepage
