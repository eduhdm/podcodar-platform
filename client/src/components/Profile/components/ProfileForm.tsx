import { Button, Card, TextField, makeStyles } from '@material-ui/core'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import BaseField from './BaseField'
import SelectField from './SelectField'

interface Props {
  userInfo: any
  onSubmit: any
  skills: { id: number; name: string }[]
  toggleEditMode: () => void
}

const useStyles = makeStyles({
  card: {
    padding: 20,
  },
  field: {
    marginTop: 16,
  },
  textAreaField: {
    minHeight: 120,
  },
})

function ProfileForm({ userInfo, onSubmit, skills, toggleEditMode }: Props): JSX.Element {
  console.log({ userInfo, onSubmit, skills, toggleEditMode })
  const methods = useForm()
  const { handleSubmit } = methods

  const transformSkillToOptions = (skillsList) => {
    return skillsList?.map(({ id, name }) => ({ value: id, label: name }))
  }
  const classes = useStyles()
  const skillsOptions = transformSkillToOptions(skills)

  return (
    <FormProvider {...methods}>
      <Card className={classes.card}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <BaseField
            name="first_name"
            defaultValue={userInfo.first_name}
            rules={{
              required: 'Esse campo é obrigatório',
              minLength: { value: 3, message: 'Deve ter tamanho maior que 3' },
            }}
            Component={TextField}
            fieldProps={{
              fullWidth: true,
              label: 'Primeiro nome',
            }}
          />
          <BaseField
            name="last_name"
            defaultValue={userInfo.last_name}
            rules={{
              required: 'Esse campo é obrigatório',
              minLength: { value: 3, message: 'Deve ter tamanho maior que 3' },
            }}
            Component={TextField}
            fieldProps={{
              className: classes.field,
              fullWidth: true,
              label: 'Segundo nome',
            }}
          />
          <BaseField
            name="has_skills"
            defaultValue={transformSkillToOptions(userInfo.has_skills)}
            rules={{
              required: 'Esse campo é obrigatório',
            }}
            Component={SelectField}
            fieldProps={{
              className: classes.field,
              fullWidth: true,
              multiline: true,
              options: skillsOptions,
              label: 'Selecione os temas que você quer aprender',
            }}
          />
          <BaseField
            name="wants_to_learn_skills"
            defaultValue={transformSkillToOptions(userInfo.wants_to_learn_skills)}
            rules={{
              required: 'Esse campo é obrigatório',
            }}
            Component={SelectField}
            fieldProps={{
              className: classes.field,
              fullWidth: true,
              multiline: true,
              options: skillsOptions,
              label: 'Selecione os temas que você possui algum domínio e gostaria de compartilhar',
            }}
          />
          <BaseField
            name="bio_description"
            defaultValue={userInfo.bio_description}
            rules={{
              required: 'Esse campo é obrigatório',
              minLength: { value: 3, message: 'Deve ter tamanho maior que 3' },
            }}
            Component={TextField}
            fieldProps={{
              className: classes.field,
              inputProps: {
                className: classes.textAreaField,
              },
              fullWidth: true,
              multiline: true,
              label: 'Conte um pouco sobre você...',
            }}
          />
          <Button type="submit">Atualizar</Button>
          <Button color="secondary" onClick={toggleEditMode}>
            Voltar
          </Button>
        </form>
      </Card>
    </FormProvider>
  )
}

export default ProfileForm
