import { Briefcase, BriefcaseBusiness, Code, Lightbulb, Target, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 ">
                        <h3 className="text-2xl font-semibold">Passionate Engeenearing & Tech Creator</h3>

                        <p className="text-muted-foreground">
                            With over 5 year of experience in develped projects academics, about
                            Automatization & Control accesible and performance aplications using 
                            modern technologies.
                        </p>

                        <p className="text-muted-foreground">
                            I passionate about creating elegant solutions to coomplex problems, and 
                            I´m constatly learning new technologies y techniques to stay at the 
                            forefront of the ever-envolving web lanscape.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-3 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a href="#ponerCv" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left ">
                                    <h4 className="font-semibold text-lg"> Enginearing AI</h4>
                                    <p className="text-muted-foreground"> 
                                        Developing automated strategies with AI and providing high-impact last-mile solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left ">
                                    <h4 className="font-semibold text-lg"> Machine Learning/AI</h4>
                                    <p className="text-muted-foreground"> 
                                        Automated analysis and design of e-commerce business models.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left ">
                                    <h4 className="font-semibold text-lg"> Project Management</h4>
                                    <p className="text-muted-foreground"> 
                                        Automated analysis and design of e-commerce business models.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};