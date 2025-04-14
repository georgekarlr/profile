import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"
import type { Skill, SoftwareStack } from "@/types"

interface SkillsSectionProps {
  programmingLanguages: Skill[]
  softwareStacks: SoftwareStack[]
}

export function SkillsSection({ programmingLanguages, softwareStacks }: SkillsSectionProps) {
  return (
    <section className="py-20 relative">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Skills & Expertise</h2>

        <Card className="group hover:border-pink-500/50 transition-all duration-300 bg-zinc-900/50 backdrop-blur-sm border-zinc-800 mb-8">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-6 text-xl text-white group-hover:text-pink-400 transition-colors">
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {programmingLanguages.map((lang) => (
                <Badge
                  key={lang.name}
                  variant="secondary"
                  className="bg-zinc-800 hover:bg-pink-500 transition-colors text-white hover:text-white"
                >
                  {lang.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          {softwareStacks.map((stack, index) => (
            <Collapsible key={index}>
              <Card className="group hover:border-pink-500/50 transition-all duration-300 bg-zinc-900/50 backdrop-blur-sm border-zinc-800">
                <CardContent className="pt-6">
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between w-full group cursor-pointer">
                      <div className="text-left">
                        <h3 className="font-semibold text-xl text-white group-hover:text-pink-400 transition-colors mb-2">
                          {stack.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{stack.description}</p>
                      </div>
                      <ChevronDown className="h-5 w-5 text-pink-400 transition-transform duration-200 group-hover:text-pink-300" />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-6 pt-6 border-t border-zinc-800">
                      <div className="grid gap-4 md:grid-cols-2">
                        {stack.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors"
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-pink-500"></div>
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CollapsibleContent>
                </CardContent>
              </Card>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  )
}

