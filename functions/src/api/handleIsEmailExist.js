import * as admin from 'firebase-admin'
import { resObj } from 'utils/objects'
import { EMAIL } from 'constantValues'

const handleIsEmailExist = data => {
	return admin
		.auth()
		.getUserByEmail(data[EMAIL])
		.then(user => {
			// User already exists
			console.log(user)
			return resObj(false, 'User Already Exist')
		})
		.catch(err => {
			console.log(err)
			if (err.code === 'auth/user-not-found') {
				// User doesn't exist yet...
				return resObj(true, 'User is not exist')
			} else {
				return resObj(false, 'Internal Error Code 1', 1)
			}
		})
}

export default handleIsEmailExist
