import type { NextPage } from 'next'

type FormField = {
  name: string;
  label: string;
}
const addressFields: FormField[] = [
  { name: 'firstLine', label: 'First line' },
  { name: 'secondLine', label: 'Second line' },
  { name: 'thirdLine', label: 'Third line' },
  { name: 'fourthLine', label: 'Fourth line' },
  { name: 'postcode', label: 'Postcode'}
]

const nameFields: FormField[] = [
  { name: 'firstName', label: 'First name' },
  { name: 'lastName', label: 'Last name' },
]

const generateInputFields = (inputFields: FormField[]): JSX.Element[] => inputFields.map(({ name, label }) => (
  <div key={name}>
    <label>{label}</label>
    <input type="text" name={name} />
  </div>
))

const UserDetailsForm: NextPage = () => {
  
  return (
    <>
      <h1>New User Form</h1>
      <form method='post' action='/api/user/details'>
        <section>
          <h2>Basic Details</h2>
          { generateInputFields(nameFields) }
        </section>

        <section>
          <h2>Address</h2>
          { generateInputFields(addressFields)}        
        </section>

        <button type='submit'>Next</button>
      </form>
    </>
  )
}

export default UserDetailsForm
