import Page from 'components/page/Page'
import PageTile from 'components/page/PageTile'
import useForm from 'hooks/useForm'
import CategoriesTable from 'modules/categories/components/CategoriesTable'
import CategoryForm from 'modules/categories/components/CategoryForm'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import withReducer from 'store/withReducer'
import config from '../../config'
import CategoryModel from '../../models/CategoryModel'
import reducers from '../../store'
import {
  deleteCategory,
  getCategories,
  insertCategory,
  resetCategories,
  selectAllCategories,
  updateCategory
} from '../../store/categoriesSlice'

const CategoriesPage = () => {
  const dispatch = useDispatch()

  const categories = useSelector(selectAllCategories)

  const { form, setForm, handleChange, resetForm } = useForm(CategoryModel())

  useEffect(() => {
    dispatch(resetCategories())
    dispatch(getCategories())
  }, [dispatch])

  const onSave = () => {
    form.id === null ? dispatch(insertCategory(form)) : dispatch(updateCategory(form))

    setForm(CategoryModel())
  }

  const onEdit = category => setForm(category)

  const onDelete = category => dispatch(deleteCategory(category))

  const onCancel = () => resetForm()

  return (
    <Page
      classes={{
        root: 'p-24 text-justify'
      }}
      header={<PageTile>Categories</PageTile>}
      content={
        <div>
          <CategoryForm className='mb-24' form={form} handleChange={handleChange} onSave={onSave} onCancel={onCancel} />

          <CategoriesTable data={categories} onEdit={onEdit} onDelete={onDelete} />
        </div>
      }
    />
  )
}

export default withReducer(config.moduleKey, reducers)(CategoriesPage)
