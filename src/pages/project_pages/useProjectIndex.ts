import { useLocation } from "@solidjs/router";
import projectList from "../../common/projectList";

const useProjectIndex = () => {
  const location = useLocation();
  const projectIndex = projectList.findIndex(project => project.route === location.pathname);

  return projectIndex
}

export default useProjectIndex;