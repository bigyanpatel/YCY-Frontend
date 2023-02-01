import React from 'react'
import { Footer, Header, Feed } from '../../components/ComponentExport'
import { AnimatePresence } from "framer-motion";
import Modal from '../../components/Feed/Modal';
import { modalState, modalTypeState } from '../../atoms/modalAtom';
import { useRecoilState } from 'recoil';



export const HomePage = () => {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);

  return (
    <>

      <div className=" w-[100%] min-w-fit">
        <Header />
      </div>
      <div className="flex flex-row pt-0 pb-0 pl-[10px] pr-[10px] bg-[#f1f2f2]">
        <div className="flex justify-center pt-[50px] pb-[50px] pl-0 pr-0 min-w-fit w-[100%]">
          {/* <Sidebar/> */}
          <Feed />
        </div>
        <AnimatePresence>
          {modalOpen && (
            <Modal className="" handleClose={() => setModalOpen(false)} type={modalType} />
          )}
        </AnimatePresence>

      </div>
      <Footer />


    </>
  )
}
