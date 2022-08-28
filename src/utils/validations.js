const FILE_IMAGE_REGEX = /image\/(png|jpeg)/

export const validateFileIsImage = (file) => {
  const { type: fileType } = file
  const isImage = FILE_IMAGE_REGEX.test(fileType)
  return isImage
}
