import { useLocation } from "@solidjs/router";
import projectsList from "../../globals/projectsList";

const useProjectIndex = () => {
  const location = useLocation();
  const projectIndex = projectsList.findIndex(project => project.link === location.pathname);

  return projectIndex
}

export default useProjectIndex;