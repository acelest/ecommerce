import { Metadata } from 'next'

import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import AccountForm from './AccountForm'

import classes from './index.module.scss'

export default async function Account() {
  return (
    <div>
      <h5 className={classes.personalInfo}> Information Personelle</h5>
      <AccountForm />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Account',
  description: 'Créez un compte ou connectez-vous à votre compte existant.',
  openGraph: mergeOpenGraph({
    title: 'Account',
    url: '/account',
  }),
}
