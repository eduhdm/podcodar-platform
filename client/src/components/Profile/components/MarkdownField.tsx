import React, { useState } from 'react'
import { TextField, Button, makeStyles } from '@material-ui/core'
import ReactMarkdown from 'react-markdown'

interface Props {
  fieldProps?: any
  containerClassName?: string
  value: string
  [x: string]: any
}

const useStyles = makeStyles({
  container: {
    position: 'relative',
    width: '100%',
    minHeight: 150,
    overflowY: 'auto',
  },
  previewContainer: {
    padding: 10,
  },
  field: {
    marginTop: 16,
  },
  textAreaField: {
    minHeight: 120,
  },
  previewButton: {
    position: 'absolute',
    top: 16,
    right: 5,
  },
})

function MarkdownField({ fieldProps, value, containerClassName, ...restProps }: Props) {
  const [isPreview, setIsPreview] = useState(false)
  const classes = useStyles()

  const inputProps = {
    ...fieldProps?.inputProps,
    className: `${classes.textAreaField} ${fieldProps?.inputProps?.className}`,
  }

  return (
    <div className={`${classes.container} ${containerClassName}`}>
      {isPreview ? (
        <div className={classes.previewContainer}>
          <ReactMarkdown>{value}</ReactMarkdown>
        </div>
      ) : (
        <TextField
          multiline
          fullWidth
          value={value}
          {...{ ...fieldProps, inputProps }}
          {...restProps}
        />
      )}
      <Button
        size="small"
        className={classes.previewButton}
        onClick={() => setIsPreview(!isPreview)}
      >
        {isPreview ? 'Editar' : 'Preview'}
      </Button>
    </div>
  )
}

export default MarkdownField
