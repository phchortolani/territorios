"use client";

import { Territorio } from "@/models/Territorio";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

interface params {
    params: {
        id: number
    }
}

export default function Info({ params }: params) {
    const { id } = params;
    const { data: TerritorioData } = useQuery({ queryKey: 'info', queryFn: async () => (await axios.get<Territorio>(`/api/territorio/${id}`)).data })

    const [slide, setSlide] = useState({
        totalSlides: 0,
        slideAtual: 0
    })


    useEffect(() => {
        if (TerritorioData?.id) {
            setSlide({ ...slide, totalSlides: TerritorioData.numberOfFiles + 1 })
        }
    }, [TerritorioData])


    const [cover, setCover] = useState("object-none")

    let slides = new Array<string>(`/laminas/${id}.png`)

    for (let i = 1; i < slide.totalSlides; i++) {
        slides.push(`/maps/${id}/${i}.png`)
    }

    function ajustarCover() {
        setCover(cover == "object-none" ? "object-cover" : "object-none")
    }


    function avancar() {
        let avancarPara = slide.slideAtual + 1;
        if (avancarPara > slide.totalSlides) {
            avancarPara = slide.totalSlides;
        }
        setSlide({ ...slide, slideAtual: avancarPara })
    }

    function retroceder() {
        let retrocederPara = slide.slideAtual - 1;

        if (retrocederPara >= 0) {
            setSlide({ ...slide, slideAtual: retrocederPara })
        }

    }

    return <div className="flex my-2 mb-24 justify-center flex-col  gap-3 mx-2  dark:text-white text-slate-900">
        <div className="flex flex-col m-auto">
            <div className="text-lg p-2 mb-3 bg-slate-600 rounded-lg text-white items-center">
                <Link href={'./'} className="flex justify-center gap-2">
                    <i className="uil uil-arrow-left"></i><span>Voltar</span>
                </Link>
            </div>
            <div className="relative w-full" data-carousel="slide">
                <div className="relative overflow-hidden rounded-lg shadow-2xl ">
                    {
                        slides.map((link, i) => {
                            return <div key={i} onClick={() => ajustarCover()} className={`duration-700 ease-in-out ${i == slide.slideAtual ? "" : "hidden"}`}>
                                <Image

                                    className={`rounded-lg bg-cover shadow-lg bg-center h-72 min-w-full ${i > 0 && cover}`}
                                    src={link}
                                    alt="Lamina"
                                    width={500}
                                    height={500} />
                            </div>
                        })
                    }
                </div>
                {
                    slide.slideAtual > 0 && <button type="button" onClick={() => retroceder()} className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <i className="uil uil-angle-left-b"></i>
                            <span className="sr-only" >Previous</span>
                        </span>
                    </button>
                }
                {
                    slide.slideAtual < slide.totalSlides - 1 && <button type="button" onClick={() => avancar()} className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <i className="uil uil-angle-right-b"></i>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                }

            </div>

            <div className="mt-5 p-4 flex flex-col gap-3 rounded-lg shadow-lg text-white dark:bg-white dark:text-slate-900 bg-slate-500">
                <h1 className="font-bold text-xl ">Território {id}</h1>
                <hr />
                <div>
                    <span className="font-semibold">Ultima vez trabalhado</span>
                    <div>{new Date().toLocaleDateString()} - {'Quinta'}</div>
                </div>
                <div>
                    <span className="font-semibold">Quantidade de casas</span>
                    <div>50</div>
                </div>
                <div>
                    <span className="font-semibold">Ultima vez trabalhado por</span>
                    <div>Volnei</div>
                </div>
                <div>
                    <span className="font-semibold">Observação</span>
                    <div>Casa 104 só bater a tarde</div>
                </div>
                <hr />
                <div>
                    <span className="font-semibold"><i className="uil uil-exclamation-triangle dark:text-red-500"></i> Não bater nessas casas</span>
                    <div>Av Pery Ronchetti Nº 105 </div>
                    <div>R. Dino Gabriel Nº 405 </div>
                    <div>R. Dos Vianas Nº 201 </div>
                </div>
            </div>
        </div>
    </div>
}