import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import IconButton from "@mui/material/IconButton";
// import { useSession } from "next-auth/react";
import { Avatar } from "@mui/material";
import { useRef, useState } from "react";
import { XMarkIcon, PhotoIcon } from '@heroicons/react/24/solid';
import { Tab } from "@headlessui/react";
// import { useRecoilValue } from "recoil";
// import { getPostState } from "../atoms/postAtom";
// import Post from "./Post";

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

// const gifYouUp = {
//     hidden: {
//         opacity: 0,
//         scale: 0,
//     },
//     visible: {
//         opacity: 1,
//         scale: 1,
//         transition: {
//             duration: 0.2,
//             ease: "easeIn",
//         },
//     },
//     exit: {
//         opacity: 0,
//         scale: 0,
//         transition: {
//             duration: 0.15,
//             ease: "easeOut",
//         },
//     },
// };

const Modal = ({ handleClose, type }) => {
    // const { data: session } = useSession();
    // const post = useRecoilValue(getPostState);
    const [input, setInput] = useState("");
    const [selectedFile, setSelectedFile] = useState(null)
    const [loading, setLoading] = useState(false)
    const filePickerRef = useRef(null)

    const sendQuestion = () => {
        if (loading) return;
        setLoading(true);
    }

    const sendPost = () => {
        if (loading) return;
        setLoading(true);
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        }


    };



    return (
        <Backdrop onClick={handleClose}>
            {type === "dropIn" && (
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className=" rounded-xl flex flex-col justify-center bg-white dark:bg-[#ffffff] w-full max-w-lg md:-mt-60 mx-6 "
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >

                    <div>
                        <IconButton onClick={handleClose}>
                            <CloseRoundedIcon className="h-7 w-7 dark:text-[#000000] ml-[]" />
                        </IconButton>
                    </div>



                    <div className="flex flex-col w-full items-center justify-between px-4 py-2.5">
                        {/* 
                        <h4 className="ml-10 text-xl text-[#000000] font-medium">Add Question</h4>
                        <h4 className="ml-10 text-xl text-[#000000] font-medium">Post</h4> */}





                        <Tab.Group>


                            <Tab.List className="flex space-x-24 mt-[-50px]">

                                <Tab className={({ selected }) =>
                                    `whitespace-nowrap rounded-t-lg py-3 px-5 text-xl font-medium outline-none md:py-4 md:px-6 md:text-base text-[#000000] ${selected
                                        ? "border-b-2 border-[#ec6b25] text-[#000000] "
                                        : "  text-[#747474]"
                                    }`
                                }
                                >Add Question
                                </Tab>

                                <Tab className={({ selected }) =>
                                    `whitespace-nowrap rounded-t-lg py-3 px-5 text-xl font-medium outline-none md:py-4 md:px-6 md:text-base text-[#000000] ${selected
                                        ? "border-b-2 border-[#ec6b25] text-[#000000] "
                                        : "  text-[#747474]"
                                    }`
                                }
                                >Post
                                </Tab>
                            </Tab.List>


                            <Tab.Panels className="flex w-full ">

                                <Tab.Panel className="w-full">
                                    <div className="p-4 space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <Avatar className="!h-11 !w-11" />
                                            <h6 className="font-bold">Rafeeq Syed Amjad</h6>
                                        </div>

                                        <div className="w-full divide-y">
                                            <form className={`${selectedFile && "pb-1"} ${input && "space-y-2.5"}`}>
                                                <textarea rows="2" placeholder="  Ask your doubt ..."
                                                    className=" ml-[3] bg-transparent focus:outline-none w-full"
                                                    value={input} onChange={(e) => setInput(e.target.value)} />
                                            </form>

                                            {selectedFile && (
                                                <div className="relative">
                                                    <div className="absolute " onClick={() => setSelectedFile(null)}>
                                                        <XMarkIcon className="dark:text-[#000000] h-5 icon ml-2 mt-2" />
                                                    </div>
                                                    <img src={selectedFile} alt="" className="object-contain rounded-2xl max-h-64" />
                                                </div>
                                            )}
                                        </div>
                                    </div>



                                    <div className="flex items-center justify-between pt-2.5 pl-5">
                                        <div className="flex items-center ">
                                            <div className="icon" onClick={() => filePickerRef.current.click()}>
                                                <PhotoIcon className="h-[22px] text-[#000000] cursor-pointer" />
                                                <input hidden type="file" onChange={addImageToPost} ref={filePickerRef} />
                                            </div>
                                        </div>
                                        <button className="bg-[#ec6b25] text-[#fff] rounded-full  px-4 py-1.5 font-bold shadow-md mr-2 mb-2
                                                disabled:opacity-50"
                                            disabled={!input.trim() && !selectedFile}
                                            onClick={sendQuestion}
                                        >
                                            Post
                                        </button>
                                    </div>
                                </Tab.Panel>


                                <Tab.Panel className="w-full">
                                    <div className="p-4 space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <Avatar className="!h-11 !w-11" />
                                            <h6 className="font-bold">Rafeeq Syed Amjad</h6>
                                        </div>

                                        <div className="w-full divide-y">
                                            <form className={`${selectedFile && "pb-1"} ${input && "space-y-2.5"}`}>
                                                <textarea rows="2" placeholder="  Say Something ..."
                                                    className=" ml-[3] bg-transparent focus:outline-none w-full"
                                                    value={input} onChange={(e) => setInput(e.target.value)} />
                                            </form>

                                            {selectedFile && (
                                                <div className="relative">
                                                    <div className="absolute " onClick={() => setSelectedFile(null)}>
                                                        <XMarkIcon className="text-[#000000] h-5 icon ml-2 mt-2" />
                                                    </div>
                                                    <img src={selectedFile} alt="" className="object-contain rounded-2xl max-h-64" />
                                                </div>
                                            )}
                                        </div>
                                    </div>



                                    <div className="flex items-center justify-between pt-2.5 pl-5">
                                        <div className="flex items-center ">
                                            <div className="icon" onClick={() => filePickerRef.current.click()}>
                                                <PhotoIcon className="h-[22px] text-[#000000] cursor-pointer" />
                                                <input hidden type="file" onChange={addImageToPost} ref={filePickerRef} />
                                            </div>
                                        </div>
                                        <button className="bg-[#ec6b25] text-[#fff] rounded-full  px-4 py-1.5 font-bold shadow-md mr-2 mb-2
                                                disabled:opacity-50"
                                            disabled={!input.trim() && !selectedFile}
                                            onClick={sendPost}
                                        >
                                            Post
                                        </button>
                                    </div>
                                </Tab.Panel>


                            </Tab.Panels>
                        </Tab.Group>

                    </div>

                </motion.div>
            )
            }

            {/* {type === "gifYouUp" && (
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="rounded-l-lg flex bg-[#1D2226] w-full max-w-6xl -mt-[7vh] mx-6"
                    variants={gifYouUp}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <motion.img
                        alt=""
                        onDoubleClick={handleClose}
                        src={post.photoUrl}
                        className="object-contain max-h-[80vh] w-full max-w-3xl rounded-l-lg"
                    />
                    <div className="w-full md:w-3/5 bg-white dark:bg-[#1D2226] rounded-r-lg">
                        <Post post={post} modalPost />
                    </div>
                </motion.div>
            )} */}


            {type === "PostdropIn" && (
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className=" rounded-xl flex flex-col justify-center bg-white dark:bg-[#ffffff] w-full max-w-lg md:-mt-60 mx-6 "
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >

                    <div>
                        <IconButton onClick={handleClose}>
                            <CloseRoundedIcon className="h-7 w-7 dark:text-[#000000] ml-[]" />
                        </IconButton>
                    </div>



                    <div className="flex flex-col w-full items-center justify-between px-4 py-2.5">
                        {/* 
                        <h4 className="ml-10 text-xl text-[#000000] font-medium">Add Question</h4>
                        <h4 className="ml-10 text-xl text-[#000000] font-medium">Post</h4> */}





                        <Tab.Group>


                            <Tab.List className="flex space-x-24 mt-[-50px]">

                                <Tab className={({ selected }) =>
                                    `whitespace-nowrap rounded-t-lg py-3 px-5 text-xl font-medium outline-none md:py-4 md:px-6 md:text-base text-[#000000] ${selected
                                        ? "border-b-2 border-[#ec6b25] text-[#000000] "
                                        : "  text-[#747474]"
                                    }`
                                }
                                >Post
                                </Tab>

                                <Tab className={({ selected }) =>
                                    `whitespace-nowrap rounded-t-lg py-3 px-5 text-xl font-medium outline-none md:py-4 md:px-6 md:text-base text-[#000000] ${selected
                                        ? "border-b-2 border-[#ec6b25] text-[#000000] "
                                        : "  text-[#747474]"
                                    }`
                                }
                                >Add Question
                                </Tab>
                            </Tab.List>


                            <Tab.Panels className="flex w-full ">

                                <Tab.Panel className="w-full">
                                    <div className="p-4 space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <Avatar className="!h-11 !w-11" />
                                            <h6 className="font-bold">Rafeeq Syed Amjad</h6>
                                        </div>

                                        <div className="w-full divide-y">
                                            <form className={`${selectedFile && "pb-1"} ${input && "space-y-2.5"}`}>
                                                <textarea rows="2" placeholder="  Ask your doubt ..."
                                                    className=" ml-[3] bg-transparent focus:outline-none w-full"
                                                    value={input} onChange={(e) => setInput(e.target.value)} />
                                            </form>

                                            {selectedFile && (
                                                <div className="relative">
                                                    <div className="absolute " onClick={() => setSelectedFile(null)}>
                                                        <XMarkIcon className="dark:text-[#000000] h-5 icon ml-2 mt-2" />
                                                    </div>
                                                    <img src={selectedFile} alt="" className="object-contain rounded-2xl max-h-64" />
                                                </div>
                                            )}
                                        </div>
                                    </div>



                                    <div className="flex items-center justify-between pt-2.5 pl-5">
                                        <div className="flex items-center ">
                                            <div className="icon" onClick={() => filePickerRef.current.click()}>
                                                <PhotoIcon className="h-[22px] text-[#000000] cursor-pointer" />
                                                <input hidden type="file" onChange={addImageToPost} ref={filePickerRef} />
                                            </div>
                                        </div>
                                        <button className="bg-[#ec6b25] text-[#fff] rounded-full  px-4 py-1.5 font-bold shadow-md mr-2 mb-2
                                                disabled:opacity-50"
                                            disabled={!input.trim() && !selectedFile}
                                            onClick={sendQuestion}
                                        >
                                            Post
                                        </button>
                                    </div>
                                </Tab.Panel>


                                <Tab.Panel className="w-full">
                                    <div className="p-4 space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <Avatar className="!h-11 !w-11" />
                                            <h6 className="font-bold">Rafeeq Syed Amjad</h6>
                                        </div>

                                        <div className="w-full divide-y">
                                            <form className={`${selectedFile && "pb-1"} ${input && "space-y-2.5"}`}>
                                                <textarea rows="2" placeholder="  Say Something ..."
                                                    className=" ml-[3] bg-transparent focus:outline-none w-full"
                                                    value={input} onChange={(e) => setInput(e.target.value)} />
                                            </form>

                                            {selectedFile && (
                                                <div className="relative">
                                                    <div className="absolute " onClick={() => setSelectedFile(null)}>
                                                        <XMarkIcon className="text-[#000000] h-5 icon ml-2 mt-2" />
                                                    </div>
                                                    <img src={selectedFile} alt="" className="object-contain rounded-2xl max-h-64" />
                                                </div>
                                            )}
                                        </div>
                                    </div>



                                    <div className="flex items-center justify-between pt-2.5 pl-5">
                                        <div className="flex items-center ">
                                            <div className="icon" onClick={() => filePickerRef.current.click()}>
                                                <PhotoIcon className="h-[22px] text-[#000000] cursor-pointer" />
                                                <input hidden type="file" onChange={addImageToPost} ref={filePickerRef} />
                                            </div>
                                        </div>
                                        <button className="bg-[#ec6b25] text-[#fff] rounded-full  px-4 py-1.5 font-bold shadow-md mr-2 mb-2
                                                disabled:opacity-50"
                                            disabled={!input.trim() && !selectedFile}
                                            onClick={sendPost}
                                        >
                                            Post
                                        </button>
                                    </div>
                                </Tab.Panel>


                            </Tab.Panels>
                        </Tab.Group>

                    </div>

                </motion.div>
            )

            }



        </Backdrop >
    );
};

export default Modal;