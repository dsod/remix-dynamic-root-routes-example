import { Outlet } from 'remix'

export default function PageLayout() {
  return (
    <div>
      This will render on all routes.
      <Outlet />
    </div>
  )
}
