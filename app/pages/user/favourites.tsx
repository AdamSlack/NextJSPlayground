import type { NextPage } from 'next'

type FormField = {
  name: string;
  label: string;
}
const bookFields: FormField[] = [
  { name: 'fictionBook', label: 'Fiction book' },
  { name: 'nonFictionBook', label: 'Non-fiction book' },
]

const musicFields: FormField[] = [
  { name: 'soloArtist', label: 'Solo artist' },
  { name: 'band', label: 'Band' },
]

const generateInputFields = (inputFields: FormField[]): JSX.Element[] => inputFields.map(({ name, label }) => (
  <div key={name}>
    <label>{label}</label>
    <input type="text" name={name} />
  </div>
))

const UserFavouritesForm: NextPage = () => {
  
  return (
    <>
      <h1>Your Favourites</h1>
      <form method='post' action='/api/user/favourites'>
        <section>
          <h2>Books</h2>
          { generateInputFields(bookFields) }
        </section>

        <section>
          <h2>Music</h2>
          { generateInputFields(musicFields)}        
        </section>

        <button type='submit'>Next</button>
      </form>
    </>
  )
}

export default UserFavouritesForm
