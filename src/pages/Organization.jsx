import { useSelector } from "react-redux"
import { getAllWorkspaces } from "../redux/slices/workspaceSlices"

export const Organization = () => {

  const workspaces = useSelector(getAllWorkspaces)
  console.log(workspaces)
  return (
    <div>Organization</div>
  )
}
