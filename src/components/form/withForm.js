import { useFormContext } from 'react-hook-form'

const withForm = Component => props => {
  const { errors, control } = useFormContext()

  return <Component {...props} errors={errors} control={control} />
}

export default withForm
