interface ProjectItemProps {
    name: string
    description: string
}

const ProjectItem = (props: ProjectItemProps) => {
    return (
        <div className="flex">
            <p>{props.name} {props.description}</p>
        </div>
    );
}

export default ProjectItem;