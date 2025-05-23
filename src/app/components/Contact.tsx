"use client"
import React from 'react'
import { BackgroundBeams } from './ui/background-beams';
import { SiWhatsapp } from "react-icons/si";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Button } from '@nextui-org/react';
import Form from './Form';
import { AnimatedTooltipPreview } from './AnimatedTooltipPreview';

const Contact = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const msg = `Hello, I am interested in your Web Development Services!`;
    const encodedMessage = encodeURIComponent(msg);
    const number = `6360443469`;
    const urlEndpoint = `https://wa.me/${number}?text=${encodedMessage}`;
    return (
        <>
            <section id="contact">
                <div className="relative rounded-2xl bg-slate-800   mb-20 mt-20 text-gray-100 max-w-6xl  xl:mx-auto min-h-96 h-full  overflow-hidden pb-4">
                    <div className='absolute inset-0 top-0  bg-grid-slate-700/50 sm:h-[5rem]'></div>

                    <div className='lg:grid lg:grid-cols-1 gap-10 p-2 md:p-8 relative z-20'>
                        <div className='text-center lg:text-left'>
                            <h2 className='text-2xl md:text-4xl font-bold my-10  text-center'> Let&apos;s build your website today!</h2>
                            <div className='flex items-center justify-center text-center my-8'>
                                <p className=' text-base text-gray-300 md:text-lg tracking-wide font-light max-w-lg mx-auto"'>Contact us, and we&apos;ll respond as soon as possible.</p>
                            </div>
                            <div className='flex justify-center'>
                                <Button onPress={onOpen} className="flex justify-center rounded-lg text-sm font-bold py-3 px-4 bg-white/0 text-white ring-1 ring-slate-100 hover:bg-white/25 hover:ring-slate-900/15 mx-4">Contact Us</Button>

                                <a href={urlEndpoint} target='_blank' className=" hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[#21e065] px-5 py-2 bg-[#21e065] rounded-md text-white font-light transition duration-200 ease-linear cursor-pointer">
                                    <div className='flex gap-2'>
                                        <span><SiWhatsapp size={24} /></span>
                                        <span>WhatsApp</span>
                                    </div>
                                </a>
                            </div>
                            <AnimatedTooltipPreview />
                            <div className='flex items-center justify-center text-center my-8'>
                                <p className=' text-base text-gray-300 md:text-lg tracking-wide font-light max-w-lg mx-auto"'>⚡ Our Team! ⚡</p>
                            </div>
                        </div>
                    </div>

                    <BackgroundBeams />
                </div>
            </section>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Contact Us 📧</ModalHeader>
                            <ModalBody>
                                <Form />
                            </ModalBody>
                            <ModalFooter>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default Contact