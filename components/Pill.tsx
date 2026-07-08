import Image from 'next/image';

interface PillType {
    text: string;
    imageSrc?: string;
    imageAlt?: string;
}

export function Pill({ text, imageSrc, imageAlt }: PillType) {
    return (
        <div className="flex items-center gap-2 rounded border border-gray-300 p-2 shadow-md transition duration-500 hover:-translate-y-1">
            {imageSrc && imageAlt && (
                <div className="relative aspect-square h-8 w-8">
                    <Image src={imageSrc} alt={imageAlt} title={imageAlt} fill sizes="32px" />
                </div>
            )}
            <span className="text-gray-700">{text}</span>
        </div>
    );
}
