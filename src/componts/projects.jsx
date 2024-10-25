import { PROJECTS } from '../constants';

const Projects = () => {
    return (
        <div className="pb-4">
            <h2 className="my-20 text-center text-4xl">Projects</h2>
            <div className="flex flex-wrap justify-center">
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 w-full max-w-sm lg:max-w-xs lg:mx-4">
                        <img 
                            src={project.image} 
                            width={250} 
                            height={250} 
                            alt={project.title} 
                            className="mb-4 rounded" 
                        />
                        <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
                        <p className="mb-4 text-stone-400">{project.description}</p>
                        <div className="flex flex-wrap">
                            {project.technologies.map((tech, index) => (
                                <span 
                                    className="mr-2 rounded bg-stone-900 text-sm font-medium p-2 text-stone-300" 
                                    key={index}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
