import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import TaskCard from '../components/tasks/TaskCard';
import MyTask from '../components/tasks/MyTask';
import { useEffect, useState } from 'react';



const Tasks = () => {
    const [theme, setTheme] = useState(null)

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        }
        else { document.documentElement.classList.remove("dark") }
    }, [theme])
   

    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    return (
        <div className="h-screen grid grid-cols-12 bg-white dark:bg-black">
            <div className="col-span-9 px-10 pt-10">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="font-semibold text-3xl">Tasks</h1>
                    </div>
                    <div className="flex gap-5">
                        <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10  grid place-content-center text-secondary hover:text-white transition-all">
                            <MagnifyingGlassIcon className="h-6 w-6" />
                        </button>
                        <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10 grid place-content-center text-secondary hover:text-white transition-all">
                            <BellIcon className="h-6 w-6" />
                        </button>
                        <button className="btn btn-primary">Add Task</button>

                        <div>

                            <button onClick={handleTheme}>
                                
                                { theme === "dark" ? <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg> : <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>}
                                
                            </button>
                        </div>

                        <div className="h-10 w-10 rounded-xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=644&q=80"
                                alt=""
                                className="object-cover h-full w-full "
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5 mt-10">

                    <div className="relative h-[800px] overflow-auto">
                        <div className='flex sticky top-0 justify-between bg-[#bccaef] p-5 rounded-md mb-3 text-black'>
                            <h2>Up Next</h2>
                            <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">0</p>
                        </div>
                        <div className='space-y-3'>
                            <TaskCard></TaskCard>
                        </div>
                    </div>
                    <div className="relative h-[800px] overflow-auto">
                        <div className='flex sticky top-0 justify-between bg-[#bccaef] p-5 rounded-md mb-3 text-black'>
                            <h2>In Progress</h2>
                            <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">0</p>
                        </div>
                        <div className='space-y-3'>
                            <TaskCard></TaskCard>
                        </div>
                    </div>
                    <div className="relative h-[800px] overflow-auto">
                        <div className='flex sticky top-0 justify-between bg-[#bccaef] p-5 rounded-md mb-3 text-black'>
                            <h2>Up Next</h2>
                            <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">0</p>
                        </div>
                        <div className='space-y-3'>
                            <TaskCard></TaskCard>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-span-3 border-l-2 border-secondary/20 px-10 pt-10">
                <div>
                    <h2 className='text-3xl'>Members</h2>
                    <div className='flex gap-3 pt-3'>

                        <div className="h-10 w-10 rounded-xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                alt=""
                                className="object-cover h-full w-full "
                            />
                        </div>
                        <div className="h-10 w-10 rounded-xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                alt=""
                                className="object-cover h-full w-full "
                            />
                        </div>
                        <div className="h-10 w-10 rounded-xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                alt=""
                                className="object-cover h-full w-full "
                            />
                        </div>
                        <div className="h-10 w-10 rounded-xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                alt=""
                                className="object-cover h-full w-full "
                            />
                        </div>
                        <div className="h-10 w-10 rounded-xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                alt=""
                                className="object-cover h-full w-full "
                            />
                        </div>

                    </div>
                </div>
                <div>
                    <MyTask></MyTask>
                </div>

            </div>
        </div>
    );
};

export default Tasks;