import React, { use } from 'react'
import { useState,useEffect } from 'react'
import api from '../lib/axios'
import axios from 'axios';
import { useNavigate,useParams } from 'react-router';
import { LoaderCircleIcon } from 'lucide-react';
import { ArrowLeftIcon,Trash2Icon } from "lucide-react";
import { Link } from 'react-router';
import toast from 'react-hot-toast';


const Notepage = () => {
    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
    console.log("fetchNote function is starting...");
    const fetchNote = async () => {
     try{
        const response = await axios.get(`http://localhost:5001/api/notes/${id}`);
        console.log("Full API Response:", response)
        setNote(response.data);
        console.log(note);
        setLoading(false);
    }catch(error){
        console.log("Error fetching note:", error);
        setLoading(false);
    };
    }
    fetchNote();}, [id]);
    if (loading){
        return <div className="min-h-screen flex items-center justify-center">
        <LoaderCircleIcon className="size-10 animate-spin text-primary"/>
        </div>;
    }
    const handleDelete=async()=>{
        if(!window.confirm("Are you sure you want to delete this note?")) return;
        setSaving(true);
        try{
            await api.delete(`/notes/${id}`);
            toast.success("Note deleted successfully");
            navigate("/");
        }catch(error){
            console.error("Error deleting note:", error);
            toast.error("Failed to delete note");
        }finally{
            setSaving(false);
        }
    }

    const handleSave=async()=>{
        setSaving(true);
        if (!note.title || !note.content){
            toast.error("Please fill in all fields");
            setSaving(false);
            return;
        }
        try{
            await api.put(`/notes/${id}`,{title:note.title,content:note.content});
            toast.success("Note updated successfully");}
            catch(error){console.error("Error updating note:", error);
            toast.error("Failed to update note");
        }finally{
            setSaving(false);
        }}

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Notes
            </Link>
            <button onClick={handleDelete} className="btn btn-error btn-outline">
              <Trash2Icon className="h-5 w-5" />
              Delete Note
            </button>
          </div>
<div className="card bg-base-100">
  <div className="card-body">
    <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input type="text" value={note.title} onChange={(e) => setNote({...note, title: e.target.value})} className="input input-bordered" />
    </div>
    <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Content</span>
        </label>
        <textarea value={note.content} onChange={(e)=> setNote({...note, content: e.target.value})} className="textarea textarea-bordered h-40" />
    </div>
    <div className="card-actions justify-end">
        <button className="btn btn-primary" disabled={saving} onClick={handleSave}>
            {saving ? "Saving..." : "Save Changes"}
        </button>
    </div>
  </div>
  </div>

          </div>
        </div>
    </div>
  )
}

export default Notepage
