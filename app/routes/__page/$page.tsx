import { LoaderFunction, useParams } from 'remix'

export const loader: LoaderFunction = () => {
  // Load any page-specific data here
  return null;
}

export default function Page() {
  const {page} = useParams()
  return (
    <div>
      {page}
    </div>
  )
}
