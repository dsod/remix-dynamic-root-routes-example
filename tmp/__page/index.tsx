// This file simply exist so that the "" and "/" paths will render our $page component

import Page, { loader } from "./$page"
export {loader}

export default function Index() {
  return (
    <Page />
  )
}
