import { TabNav } from "@radix-ui/themes"
import { Code } from "lucide-react"

export default function Header() {
  return (
    <div className="bg-gray-950 text-white">
      <header className="container py-4 px-2 flex justify-between items-center">
        <div className="flex items-center gap-2 sm:gap-4">
          <Code size="3rem" />
          <h2 className="font-bold w-min sm:w-max text-base md:text-2xl">Thiago Andrade</h2>
        </div>

        <TabNav.Root className="gap-4">
          <TabNav.Link href="/" active={location.pathname === "/"}><p className="text-white font-medium">Home</p></TabNav.Link>
          <TabNav.Link href="/about" active={location.pathname === "/about"}><p className="text-white font-medium">About</p></TabNav.Link>
          <TabNav.Link href="/projects" active={location.pathname === "/projects"}><p className="text-white font-medium">Projects</p></TabNav.Link>
          <TabNav.Link href="/contact" active={location.pathname === "/contact"}><p className="text-white font-medium">Contact</p></TabNav.Link>
        </TabNav.Root>
      </header>
    </div>
  )
}
