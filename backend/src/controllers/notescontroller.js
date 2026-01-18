import note from "../model/note.js";
export async function getallnotes(req,res){
   
   try{
      const notes = await note.find({}).sort({createdAt: -1});
      //console.log("Step B: Data fetched from DB", notes.length);
      res.status(200).json(notes);
   }catch(err){
      console.log("Step C: Error occurred", error);
      res.status(500).send("Server Error"+ err);
   }
}

export async function getnotesById(req,res){
   try{
      const id=req.params.id;
      const notes = await note.findById(id);
      if(!notes){
         return res.status(404).send("Note not found");
      }
      res.status(200).json(notes);
   }catch(err){
      res.status(500).send("Server Error");
   }
}

export async function createnote(req,res){
   try{
      const {title,content}=req.body
      const newnote=new note({title:title,content:content});
      await newnote.save();
      res.status(201).json(newnote);
   }catch(err){
      res.status(500).send("Server Error"+err);
   }


   
}
 export async function updatenote(req,res){
   try{
      const id=req.params.id;
      const {title,content}=req.body;
      const updatednote=await note.findByIdAndUpdate(id,{title,content},{new:true});   
      if(!updatednote){
         return res.status(404).send("Note not found");
      }
      res.status(200).send("Note updated successfully"); 
   }catch(err){
      res.status(500).send("Server Error");}
}
   
export async function deletenote(req,res){
   try{
      const id=req.params.id;
      const deletednote=await note.findByIdAndDelete(id);
      if(!deletednote){
         return res.status(404).send("Note not found");
      }
      res.status(200).send("Note deleted successfully");
   }catch(err){
      res.status(500).send("Server Error");
   }
}