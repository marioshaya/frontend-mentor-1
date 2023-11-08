// Next
import Image from "next/image";

// React icons
import { FaBars } from "react-icons/fa"

export default function Header() {
	return (
		<header className="flex w-full items-center justify-between p-4">
			<Image src="/logo.svg" width={100} height={50} alt="Snap Logo" />
			<button>
				<FaBars />
			</button>
		</header>
	)
}