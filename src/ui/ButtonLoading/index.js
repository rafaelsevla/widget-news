import React from 'react'
import { Button } from 'reactstrap'
import { BarLoader } from "react-spinners"
import './style.scss'

const ButtonLoading = ({ loading = false, children = 'Submit'}) => (
  <Button outline color="danger" className="mt-3 btn-block">
    {
    loading 
    ? (
      <BarLoader
        css={{ width: '100%' }}
        color={"#ff4081"}
        loading={true}
      />
    )
    : children}
  </Button>
)

export default ButtonLoading