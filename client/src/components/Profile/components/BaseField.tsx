import React, { ReactElement } from 'react'
import { useFormContext, Controller } from 'react-hook-form'

interface Props {
  fieldProps: any
  Component: (props: any) => JSX.Element
  name: string
  [key: string]: any
}

function BaseField(props: Props) {
  const { name, fieldProps, Component, ...restProps } = props
  const { control } = useFormContext()

  const renderField = ({ field, fieldState: { error } }: any): ReactElement => (
    <Component
      data-testid={`ProfileForm-${name}`}
      error={Boolean(error?.message)}
      helperText={error?.message ?? ''}
      fullWidth
      {...field}
      {...fieldProps}
    />
  )

  return <Controller render={renderField} control={control} name={name} {...restProps} />
}

export default BaseField
