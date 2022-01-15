import { LoaderFunction, useParams } from "remix"

export const loader: LoaderFunction = async ({params: {page}}) => {
  // Load any specific page data here
  return null
}

export default function Page() {
  const page = useParams()
  
  return (
    <div>
      Page rendered: {page}
    </div>
  );
}
