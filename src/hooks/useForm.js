import { useState } from 'react'

const useForm = initialState => {
  const [form, setForm] = useState(initialState)
  const [isValid, setIsValid] = useState(true)

  const handleChange = e => {
    if (e.persist) {
      e.persist()
    }

    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const resetForm = () => setForm({ ...initialState })

  return {
    form,
    setForm,
    handleChange,
    resetForm,
    isValid,
    setIsValid
  }
}

export default useForm
