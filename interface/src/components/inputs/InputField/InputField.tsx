import React from 'react'
import { useFormContext } from 'react-hook-form'

interface Iprops {
  name: string,
  isRequired?: boolean
}

const InputField = (props: Iprops) => {
  const { name, isRequired } = props
  const formMethods = useFormContext();
  
  return (
    <input placeholder={name} {...formMethods.register(name, { required: isRequired })} />
  )
}

export default InputField