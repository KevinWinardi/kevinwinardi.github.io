import Image from "next/image";

interface PillType {
    text: string,
    imageSrc?: string,
    imageAlt?: string,
}

export function Pill({ text, imageSrc, imageAlt }: PillType) {
    return (
        <div
            className="flex items-center gap-2 p-2 border border-gray-300 rounded shadow-md transition duration-500 hover:-translate-y-1">
            {
                (imageSrc && imageAlt) && (
                    <div className="relative aspect-square w-8 h-8">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            title={imageAlt}
                            fill
                            sizes="32px"
                        />
                    </div>
                )
            }
            <span className="text-gray-700">{text}</span>
        </div>
    );
}