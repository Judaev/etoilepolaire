import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

describe('Button component', () => {
  test('status from props should be in the state', () => {
    const component = create(<ProfileStatus status='Тест прошел отлично' />)
    const instance = component.getInstance()
    expect(instance.state.status).toBe('Тест прошел отлично')
  })

  test('after', () => {
    const component = create(<ProfileStatus status='Тест прошел отлично' />)
    const root = component.root
    let span = root.findByType('span')
    expect(span.length).toBe(1)
  })
})