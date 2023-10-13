import Image from "next/image";

export const Logo = () => {
    return (
        <div className="flex items-center justify-center">
            <Image 
            src="/logo.svg" 
            width={60} 
            height={60} 
            alt="logo"
            />         
        </div>
    )
}