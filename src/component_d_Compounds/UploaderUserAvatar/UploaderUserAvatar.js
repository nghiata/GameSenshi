import React, { useState, useCallback } from 'react'
import { stopUndefined } from './node_modules/1_utils'
import { Exports } from './node_modules/4_comp_3_Molecules'

const {
	ImageUploadStoreUserPropedSettings,
	ModalImageCropperPropedSettings,
} = stopUndefined(Exports)

const UploaderUserAvatar = () => {
	const [imageDataUrl, setImageDataUrl] = useState('')
	const [openCropper, setOpenCropper] = useState(false)

	const onSelectImageFile = useCallback(
		imageDataUrl => {
			setImageDataUrl(imageDataUrl)
			setOpenCropper(true)
		},
		[imageDataUrl]
	)

	const toggleCropper = useCallback(() => {
		setOpenCropper(!openCropper)
	}, [openCropper])

	return (
		<>
			<ModalImageCropperPropedSettings
				isOpen={openCropper}
				toggle={toggleCropper}
				src={imageDataUrl}
			/>
			<ImageUploadStoreUserPropedSettings onSelect={onSelectImageFile} />
		</>
	)
}

export { UploaderUserAvatar }
