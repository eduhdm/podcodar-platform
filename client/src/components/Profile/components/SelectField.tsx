import React from 'react'

import Select from 'react-select'
import { InputLabel, FormHelperText } from '@material-ui/core'

interface Props {
  options: { value: number; label: string }[]
  label: string
  error?: boolean
  helperText?: string
  defaultValues?: { value: number; label: string }[]
  className?: string
  selectClassName?: string
  [key: string]: any
}

function SelectField(props: Props) {
  const {
    options,
    selectClassName,
    label,
    error,
    helperText,
    defaultValues,
    className,
    ...restProps
  } = props

  return (
    <div className={className}>
      <InputLabel>{label}</InputLabel>
      <Select
        defaultValue={defaultValues}
        isMulti
        placeholder=""
        options={options}
        className={selectClassName}
        {...restProps}
      />
      {helperText && <FormHelperText error>{helperText}</FormHelperText>}
    </div>
  )
}

export default SelectField
