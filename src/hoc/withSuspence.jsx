import React, { Suspense } from 'react'

const withSuspence = (Component) => {
  return (props) => {
    return (
      <Suspense fallback={<div>Загрузка...</div>}>
        <Component {...props} />
      </Suspense>
    )
  }
}

export default withSuspence
