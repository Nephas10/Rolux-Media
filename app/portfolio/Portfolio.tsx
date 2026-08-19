import Image from "next/image"

const galleries = {
    

    portraits: [
        "/rolux/portraits/p5.jpeg",
        "/rolux/portraits/p1.jpg",
        "/rolux/portraits/p2.jpg",
        "/rolux/portraits/p3.jpg",
        "/rolux/portraits/p4.jpg",
    ],
    events: [
        "/rolux/events/e1.jpg",
        "/rolux/events/e2.jpg",
        "/rolux/events/e3.jpg",
        "/rolux/events/e4.jpg",
    ],

    weddings: [
        "/rolux/weddings/w1.jpg",
        "/rolux/weddings/w2.jpg",
        "/rolux/weddings/w3.jpg",
        "/rolux/weddings/w4.jpg",
    ],
}

type GalleryProps = {
    title: string
    images: string[]
}

function Gallery({ title, images }: GalleryProps) {
    return (
        <section className="mx-auto max-w-7xl px-6 py-12">

            {/* Section title */}
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900">
                    {title}
                </h2>

                <div className="mt-2 h-1 w-16 rounded bg-gray-900" />
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                {/* COVER IMAGE */}
                <div className="relative h-[400px] overflow-hidden rounded-xl md:h-[600px]">

                    <Image
                        src={images[0]}
                        alt={`${title} cover`}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition duration-500 hover:scale-105"
                    />

                </div>

                {/* OTHER IMAGES */}
                <div className="grid grid-cols-2 gap-4">

                    {images.slice(1).map((image, index) => (

                        <div
                            key={image}
                            className="relative h-[190px] overflow-hidden rounded-xl md:h-[290px]"
                        >

                            <Image
                                src={image}
                                alt={`${title} photo ${index + 2}`}
                                fill
                                sizes="(max-width: 768px) 50vw, 25vw"
                                className="object-cover transition duration-500 hover:scale-105"
                            />

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default function Portfolio() {
    return (
        <main className="min-h-screen bg-white">

            {/* Header */}
            <section className="px-6 py-16 text-center">

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                    Rolux Media
                </p>

                <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-6xl">
                    Our Portfolio
                </h1>

                <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                    A collection of our photography work, capturing
                    moments, people, and stories worth remembering.
                </p>

            </section>

            {/* Events */}
            <Gallery
                title="Events"
                images={galleries.events}
            />

            {/* Portraits */}
            <Gallery
                title="Portraits"
                images={galleries.portraits}
            />

            {/* Weddings */}
            <Gallery
                title="Weddings"
                images={galleries.weddings}
            />

        </main>
    )
}