import { useState } from "react"
import { useLocation, Link } from "wouter"
import { TypeBadge } from "./TypeBadge"
import { Button } from "@/components/ui/button"
import { CreateNewSnippetHero } from "./CreateNewSnippetHero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const LandingHero = () => {
  const [visible, setVisible] = useState(true)
  const [, setLocation] = useLocation()
  return (
    <div className="p-6">
      <CreateNewSnippetHero />

      {visible && (
        <Card className="mb-6 bg-gray-50 rounded-sm">
          <CardHeader className="p-3 pl-8">
            <CardTitle className="flex justify-between items-center">
              <div className="pt-2">Onboarding Tips</div>
              <Button
                variant="ghost"
                className="text-gray-400 text-xl"
                onClick={() => setVisible(!visible)}
              >
                &times;
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc marker:text-gray-400 pl-5 space-y-2">
              <li>
                tscircuit snippets are React components that turn into
                manufacturable circuit boards, circuit modules, 3D models or
                footprints.
              </li>
              <li>
                You can design full boards, or individual components like chips
              </li>
              <li>
                You can export snippets to{" "}
                <a href="#" className="text-blue-600">
                  KiCad
                </a>
                ,{" "}
                <a href="#" className="text-blue-600">
                  Gerbers
                </a>
                ,{" "}
                <a href="#" className="text-blue-600">
                  STEP
                </a>
                , and other formats
              </li>
              <li>
                Type <b>@</b> when coding to import other snippets
              </li>
            </ul>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-4 gap-4">
        <div>
          <Link href="/editor?template=blank-circuit-board">
            <Button className="w-full justify-between mb-2 px-2">
              Create new <TypeBadge type="board" className="ml-2" />
            </Button>
          </Link>
          <p className="text-sm text-gray-600">
            A printed circuit board containing multiple chips, resistors and
            capacitors to form a functional, manufacturable electronic device.
          </p>
        </div>
        <div>
          <Link href="/editor?template=blank-circuit-module">
            <Button className="w-full justify-between mb-2 px-2">
              Create new <TypeBadge type="package" className="ml-2" />
            </Button>
          </Link>
          <p className="text-sm text-gray-600">
            A chip or circuit module that you'd like to use as part of a larger
            package.
          </p>
        </div>
        <div>
          <Link href="/editor?template=blank-footprint">
            <Button className="w-full justify-between mb-2 px-2">
              Create new <TypeBadge type="footprint" className="ml-2" />
            </Button>
          </Link>
          <p className="text-sm text-gray-600">
            A footprint or landing-pattern for a component. This is usually used
            as part of a chip.
          </p>
        </div>
        <div>
          <Link href="/editor?template=blank-3d-model">
            <Button className="w-full justify-between mb-2 px-2">
              Create new <TypeBadge type="model" className="ml-2" />
            </Button>
          </Link>
          <p className="text-sm text-gray-600">
            A 3d model of a component. This is usually used as part of a chip.
          </p>
        </div>
      </div>
      <Button
        onClick={() => setLocation("/quickstart")}
        variant="outline"
        className="mt-4"
      >
        <span className="mr-2">📄</span> More Templates
      </Button>
    </div>
  )
}
