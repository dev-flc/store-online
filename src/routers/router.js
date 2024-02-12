import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ContainerGlobal } from 'Containers/containerGlobal.js'
import { Home } from 'View/home/home.js'

const router = createBrowserRouter([
  {
    Component: () => (
      <ContainerGlobal>
        <Home />
      </ContainerGlobal>
    ),
    index: true,
    path: '*'
  }
])

const Router = () => {
  return <RouterProvider router={router} />
}

export { Router }
