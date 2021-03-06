import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const About = React.forwardRef((_, ref) => {
    return (
        <section ref={ref} className="bg-brand-yellow px-5 py-20">
            <div className="max-w-5xl flex sm:flex-row flex-col justify-between items-center mx-auto">
                <div className="w-full sm:w-1/2 flex flex-col justify-start">
                    <h1 className="text-3xl font-bold">
                        Tentang Kami
                    </h1>
                    <p className="mt-4">
                        Dikadoin.dong merupakan bisnis industri kreatif yang menghasilkan produk berupa custom gift dan variasi buket yang berlokasi di Yogyakarta.
                        Konsep yang ditawarkan adalah berupa kesederhanaan yang bernilai estetika. Dengan Tagline "Berbagi Kisah" membantu untuk memvisualisasikan rasa sayang dengan produk kami.
                    </p>
                </div>
                <div className="w-full sm:w-1/2 mt-8 flex justify-center sm:mt-0">
                    <StaticImage
                        src="../images/about-us.webp"
                        alt="dikadoin logo"
                        width={300}
                        placeholder="none"
                        layout="constrained"
                    />
                </div>
            </div>
        </section>
    )
})

export default About
