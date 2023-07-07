import React from 'react'
import Input from '../Input'

describe('Input.cy.tsx', () => {
  it('renders input wrapper properly', () => {
    const props = {
      name: 'name',
    }

    cy.mount(<Input {...props} />)

    cy.get('[data-cy=input-wrapper').should('exist')
  })

  it('renders label properly', () => {
    const props = {
      name: 'name',
      label: 'label'
    }

    cy.mount(<Input {...props} />)

    cy.get('[data-cy=input-label').should('have.text', 'label')
  })

  it('do not renders label properly', () => {
    const props = {
      name: 'name'
    }

    cy.mount(<Input {...props} />)

    cy.get('[data-cy=input-label').should('not.exist')
  })

  it('renders input properly', () => {
    const props = {
      name: 'name',
      type: 'text'
    }

    cy.mount(<Input {...props} />)

    cy.get('[data-cy=input').should('exist')
  })

  it('check for correct type in input', () => {
    const props = {
      name: 'name',
      type: 'email'
    }

    cy.mount(<Input {...props} />)

    cy.get('[data-cy=input').should('have.prop', 'type', 'email')
  })
})
