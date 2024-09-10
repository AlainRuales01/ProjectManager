import { useLocation } from "react-router-dom";

interface ProjectDetailProps {
    name: string,
    description: string
}

const ProjectDetail = () => {
    const location = useLocation();
    const {name, description} = location.state as ProjectDetailProps;
    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    );
}

export default ProjectDetail;