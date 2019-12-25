import React from 'react'
import t from 'prop-types'
import { Button } from 'reactstrap'
import { BarLoader } from 'react-spinners'
import './style.scss'

const ButtonLoading = ({ loading = false, children = 'Submit', disabled = false, onClick }) => (
  <Button
    disabled={disabled}
    outline
    color='danger'
    className='mt-3 btn-block'
    onClick={onClick}
  >
    {
      loading
        ? (
          <BarLoader
            css={{ width: '100%' }}
            color={'#ff4081'}
            loading
          />
        )
        : children}
  </Button>
)

ButtonLoading.propTypes = {
  loading: t.bool,
  children: t.string,
  disabled: t.bool,
  onClick: t.func
}

export default ButtonLoading
