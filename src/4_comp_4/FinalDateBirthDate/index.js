import React from 'react'
import { FinalDateBirthDate, FINAL_DATE_BIRTH_DATE } from './FinalDateBirthDate'

import { stopUndefined } from '1_utils'

// components
import { Exports } from '4_comp_3_Molecules'

const { LabelForm } = stopUndefined(Exports)

const FinalDateBirthDatePropedGeneraL = props => {
	return (
		<LabelForm label='Birth Date' htmlFor={FINAL_DATE_BIRTH_DATE} Inputmd='4'>
			<FinalDateBirthDate {...props} />
		</LabelForm>
	)
}

export { FinalDateBirthDatePropedGeneraL, FINAL_DATE_BIRTH_DATE }