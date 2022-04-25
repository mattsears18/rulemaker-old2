import {
  Form,
  FormError,
  FieldError,
  Label,
  DatetimeLocalField,
  TextField,
  Submit,
} from '@redwoodjs/forms'


const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}


const UserForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.user?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="created_at"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Created at
        </Label>
        
          <DatetimeLocalField
            name="created_at"
            defaultValue={formatDatetime(props.user?.created_at)}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="created_at" className="rw-field-error" />

        <Label
          name="updated_at"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Updated at
        </Label>
        
          <DatetimeLocalField
            name="updated_at"
            defaultValue={formatDatetime(props.user?.updated_at)}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="updated_at" className="rw-field-error" />

        <Label
          name="auth0_sub"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Auth0 sub
        </Label>
        
          <TextField
            name="auth0_sub"
            defaultValue={props.user?.auth0_sub}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="auth0_sub" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
