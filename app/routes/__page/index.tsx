// This file simply exist so that the "" and "/" routes will render the same component as the other pages
import Page, { loader } from './$page'
export {loader}
export default function PageIndex() {
  return (
    <Page />
  )
}
