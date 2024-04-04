import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/taskSlice";


const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit, reset } = useForm()
    const dispatch = useDispatch()
    const onSubmit = (data) => { 
        dispatch(addTask(data))
        oncancel()
     }
    const oncancel=()=>{
        reset()
        setIsOpen(false)
    }
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title='Programming Hero'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" className="w-full rounded-md" {...register('title')} />
                </div>
                <div>
                    <label htmlFor="title">Description</label>
                    <textarea id="description" className="w-full rounded-md" {...register('description')}></textarea>
                </div>
                <div>
                    <label htmlFor="title">DeadLine</label>
                    <input type="date" id="date" className="w-full rounded-md" {...register('date')}  />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="assignedTo">AssignedTo</label>
                    <select id="assignedTo"className="w-full rounded-md" {...register('assignedTo')}>

                    <option value="anik">anik</option>
                    <option value="kartik">kartik</option>
                    <option value="fahim">fahim</option>
                    <option value="samrat">samrat</option>
                    <option value="rimon">rimon</option>
                    <option value="al-amin">al-amin</option>
 
                    </select>
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="priority">Priority</label>
                    <select id="priority"className="w-full rounded-md" {...register('priority')}>

                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                    
 
                    </select>
                </div>
                <div className="flex justify-end gap-3 mt-3">
                <button type="button" onClick={()=>oncancel()} className="btn btn-danger">Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </Modal>
    );
};

export default AddTaskModal;