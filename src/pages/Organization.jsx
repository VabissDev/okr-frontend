import { useSelector } from "react-redux"
import { getAllWorkspaces } from "../redux/slices/workspaceSlices"
import { getAccountData } from "../redux/slices/accountSlice"

export const Organization = () => {

  const workspaces = useSelector(getAllWorkspaces)
  const account = useSelector(getAccountData)
  
  console.log(account)
  console.log(workspaces)
  return (
    <div>Organization</div>
  )
}
