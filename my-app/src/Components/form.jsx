import react from react; 
import useState from react; 

export const form = () =>{
    const[title , setTitle] = useState(''); 
    const[description , setDescription] = useState('');
    const[status , setStatus] = useState('')

    const handleSubmit = () =>{
        const{title , description , status} = req.body; 
        axios.post('http://localhost:3000/tasks')
        try{
            if(!title || !description || !status){
                res.status(400).json({message:"Please provide all details"});
            }
            title,
            description,
            status,
            res.status(200).status({message:'submitted'})
        }catch{
            res.status(500).json({message:'Internal Server Error'});
        }
    }
return(
    <div>
        <h1>form</h1>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
    <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}></input>
    <input type="text" value={status} onChange={(e)=>setStatus(e.target.value)}></input>
    <button onClick={handleSubmit}>Submit</button>
    </div>
)
}