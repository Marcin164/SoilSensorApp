import React from 'react'
import Href from '../Href'

describe('Href.cy.tsx', () => {
  it('renders link', () => {
    const props = {
      url: '',
      text: 'link'
    }

    cy.mount(<Href {...props} />)

    cy.get('[data-cy=href]').should('have.text', 'link')
  })

  it('renders component as link', () => {
    const props = {
      url: ''
    }

    cy.mount(
      <Href {...props}>
        <p>Link</p>
      </Href>
    )

    cy.get('[data-cy=href] > p').should('exist')
  })
})
